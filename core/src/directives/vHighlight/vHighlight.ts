import type { Directive } from "vue";

interface HighlightOptions {
  bgColor: string;
  textColor?: string;
  auto?: boolean;
}

const isValidColor = (color: string): boolean => {
  const tempElement = document.createElement("div");
  tempElement.style.backgroundColor = color;
  return tempElement.style.backgroundColor !== "";
};

const calculateContrastColor = (bgColor: string): string => {
  const tempElement = document.createElement("div");
  tempElement.style.backgroundColor = bgColor;
  document.body.appendChild(tempElement);
  const computedBgColor = window.getComputedStyle(tempElement).backgroundColor;
  document.body.removeChild(tempElement);

  const rgb = computedBgColor.match(/\d+/g);
  if (!rgb) return "#000000";

  const brightness =
    (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) /
    1000;
  return brightness >= 128 ? "#000000" : "#ffffff";
};

const parseModifiers = (modifiers: Record<string, boolean>): Partial<HighlightOptions> => {
  const options: Partial<HighlightOptions> = {};
  
  for (const key in modifiers) {
    const [property, value] = key.split('-');
    switch (property) {
      case 'bgColor':
        options.bgColor = value;
        break;
      case 'textColor':
        options.textColor = value;
        break;
      case 'auto':
        options.auto = value === 'true';
        break;
    }
  }
  
  return options;
};

export const vHighlight: Directive<HTMLElement, string | HighlightOptions> = {
  mounted(el, binding) {
    const modifierOptions = parseModifiers(binding.modifiers);
    const valueOptions = typeof binding.value === 'string' ? { bgColor: binding.value } : binding.value;
    const options = { ...valueOptions, ...modifierOptions };
    
    if (!options || !options.bgColor) return;

    if (!isValidColor(options.bgColor)) {
      console.warn(
        `[v-highlight]: Invalid background color value "${options.bgColor}"`
      );
      return;
    }

    el.style.transition = "all 0.3s ease";
    el.style.backgroundColor = options.bgColor;

    if (options.auto) {
      el.style.color = calculateContrastColor(options.bgColor);
    } else if (options.textColor) {
      if (!isValidColor(options.textColor)) {
        console.warn(
          `[v-highlight]: Invalid text color value "${options.textColor}"`
        );
      } else {
        el.style.color = options.textColor;
      }
    }
  },

  updated(el, binding) {
    const modifierOptions = parseModifiers(binding.modifiers);
    const valueOptions = typeof binding.value === 'string' ? { bgColor: binding.value } : binding.value;
    const options = { ...valueOptions, ...modifierOptions };
    
    if (!options || !options.bgColor) {
      el.style.backgroundColor = '';
      el.style.color = '';
      return;
    }

    if (!isValidColor(options.bgColor)) {
      console.warn(
        `[v-highlight]: Invalid background color value "${options.bgColor}"`
      );
      return;
    }

    el.style.backgroundColor = options.bgColor;

    if (options.auto) {
      el.style.color = calculateContrastColor(options.bgColor);
    } else if (options.textColor) {
      if (!isValidColor(options.textColor)) {
        console.warn(
          `[v-highlight]: Invalid text color value "${options.textColor}"`
        );
      } else {
        el.style.color = options.textColor;
      }
    }
  },

  unmounted(el) {
    el.style.backgroundColor = "";
    el.style.color = "";
    el.style.transition = "";
  },
};
