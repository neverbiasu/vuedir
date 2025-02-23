<template>
  <div v-hotkey="{ key: 'space', callback: handleSpace }">
    Press 'Space' to trigger the callback.
  </div>
  <div v-hotkey="{ key: 'ctrl+enter', callback: handleCtrlEnter }">
    Press 'Ctrl + Enter' to trigger the callback.
  </div>
  <div v-hotkey="{ key: 'f1', callback: handleF1 }">
    Press 'F1' to trigger the callback.
  </div>
  <div v-hotkey="{ key: 'alt+shift+arrowup', callback: handleAltShiftArrowUp }">
    Press 'Alt + Shift + ArrowUp' to trigger the callback.
  </div>
  <textarea name="" id=""> </textarea>
</template>

<script lang="ts" setup>
import { vHotkey } from "@cp-vuedir/core";

const handleSpace = () => {
  console.log("Space key pressed!");
};

const handleCtrlEnter = () => {
  console.log("Ctrl + Enter pressed!");
};

const handleF1 = () => {
  console.log("F1 key pressed!");
};

const handleAltShiftArrowUp = () => {
  console.log("Alt + Shift + ArrowUp pressed!");
};
</script>
