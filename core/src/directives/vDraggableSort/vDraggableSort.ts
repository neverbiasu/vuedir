import { Directive, DirectiveBinding } from 'vue'
import { DraggableOptions, DragState, DraggableHTMLElement } from './type'

// 定义一个指令，用于实现拖拽排序
export const vDraggableSort: Directive = {
  // 指令绑定到元素时调用
  mounted(el: DraggableHTMLElement, binding: DirectiveBinding<DraggableOptions>) {
    const { storageKey } = binding.value

    // 从 localStorage 中读取保存的排序数据
    if (storageKey) {
      const saveItems = loadFromStorage(storageKey)
      if (saveItems) {
        binding.value.items = saveItems
        binding.value.onUpdate(saveItems)
      }
    }

    // 初始化拖拽状态
    const state: DragState = {
      el,
      options: binding.value,
      clone: null,
      placeholder: null,
      startY: 0,
      startIndex: 0,
      originalElement: null
    }

    // 定义鼠标按下事件处理函数
    const handleMouseDown = (e: MouseEvent) => startDrag(e, state)
    // 定义触摸事件处理函数
    const handleTouchStart = (e: TouchEvent) => startDrag(e, state)

    // 给元素添加鼠标按下和触摸事件监听
    el.addEventListener('mousedown', handleMouseDown)
    el.addEventListener('touchstart', handleTouchStart)

    // 保存事件处理函数，以便在指令卸载时移除
    el._draggableListeners = {
      mousedown: handleMouseDown,
      touchstart: handleTouchStart
    }
    // 保存拖拽状态，以便在指令更新时使用
    el._draggableState = state
  },

  // 指令更新时调用
  updated(el: DraggableHTMLElement, binding: DirectiveBinding<DraggableOptions>) {
    // 更新拖拽状态中的选项
    if (el._draggableState) {
      el._draggableState.options = binding.value
    }
  },

  // 指令卸载前调用
  beforeUnmount(el: DraggableHTMLElement) {
    // 移除事件监听
    if (el._draggableListeners) {
      el.removeEventListener('mousedown', el._draggableListeners.mousedown)
      el.removeEventListener('touchstart', el._draggableListeners.touchstart)
    }
  }
}

// 开始拖拽
const startDrag = (e: MouseEvent | TouchEvent, state: DragState) => {
  // 获取事件目标元素
  const target = (e.target as DraggableHTMLElement).closest('[data-draggable]') as DraggableHTMLElement
  if (!target) return

  e.preventDefault()
  const clientY = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY

  // 获取拖拽元素的子元素
  const children = getDraggableChildren(state.el)
  // 记录拖拽元素的起始索引
  state.startIndex = children.indexOf(target)
  if (state.startIndex === -1) return

  // 保存原始元素
  state.originalElement = target
  // 设置原始元素样式，使其不可见
  state.originalElement.style.opacity = '0'
  state.originalElement.style.pointerEvents = 'none'

  // 创建拖拽元素的副本
  state.clone = createClone(target)
  // 将副本添加到文档中
  document.body.appendChild(state.clone)

  // 创建占位元素
  state.placeholder = createPlaceholder(target)
  // 将占位元素插入到原始元素之前
  target.parentNode?.insertBefore(state.placeholder, target)

  // 记录拖拽起始位置
  state.startY = clientY

  // 根据事件类型定义移动和结束事件
  const moveEvent = e instanceof MouseEvent ? 'mousemove' : 'touchmove'
  const endEvent = e instanceof MouseEvent ? 'mouseup' : 'touchend'

  // 定义移动事件处理函数
  const handleMove = (e: MouseEvent | TouchEvent) => onDragMove(e, state)
  // 定义结束事件处理函数
  const handleEnd = () => {
    onDragEnd(state)
    // 移除移动和结束事件监听
    document.removeEventListener(moveEvent, handleMove as EventListener)
    document.removeEventListener(endEvent, handleEnd as EventListener)
  }

  // 添加移动和结束事件监听
  document.addEventListener(moveEvent, handleMove as EventListener)
  document.addEventListener(endEvent, handleEnd as EventListener)
}

// 拖拽移动
const onDragMove = (e: MouseEvent | TouchEvent, state: DragState) => {
  if (!state.clone || !state.placeholder) return

  // 获取当前鼠标位置
  const clientY = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY
  // 计算鼠标移动距离
  const deltaY = clientY - state.startY

  // 设置拖拽元素副本的位移
  state.clone.style.transform = `translateY(${deltaY}px)`

  // 获取拖拽元素的子元素
  const children = getDraggableChildren(state.el)
  // 获取子元素的位置信息
  const rects = children.map((child) => child.getBoundingClientRect())

  // 计算拖拽元素的新索引
  let newIndex = state.startIndex
  for (let i = 0; i < rects.length; i++) {
    const rect = rects[i]
    const middle = rect.top + rect.height / 2
    if (clientY < middle) {
      newIndex = i
      break
    }
  }
  newIndex = Math.min(newIndex, rects.length - 1)

  // 如果新索引与占位元素索引不同，则更新占位元素位置
  if (newIndex !== getCurrentPlaceholderIndex(state)) {
    const referenceNode = children[newIndex] || null
    state.el.insertBefore(state.placeholder, referenceNode)
  }
}

// 拖拽结束
const onDragEnd = (state: DragState) => {
  if (!state.clone || !state.placeholder || !state.originalElement) return

  // 获取占位元素的新索引
  const finalIndex = getCurrentPlaceholderIndex(state)
  // 更新拖拽元素的索引
  const newItems = [...state.options.items]
  const [moveItem] = newItems.splice(state.startIndex, 1)
  newItems.splice(finalIndex, 0, moveItem)
  // 调用更新回调函数
  state.options.onUpdate(newItems)

  // 保存排序后的数据到 localStorage
  if (state.options.storageKey) {
    saveToLocalStorage(state.options.storageKey, newItems)
  }

  // 恢复原始元素样式
  state.originalElement.style.opacity = ''
  state.originalElement.style.pointerEvents = ''

  // 移除拖拽元素副本和占位元素
  state.clone.remove()
  state.placeholder.remove()

  // 重置拖拽状态
  state.clone = null
  state.placeholder = null
  state.originalElement = null
}

// 获取拖拽元素的子元素
const getDraggableChildren = (el: DraggableHTMLElement): DraggableHTMLElement[] => {
  return Array.from(el.children).filter((child) => child.hasAttribute('data-draggable')) as DraggableHTMLElement[]
}

// 创建拖拽元素的副本
const createClone = (el: DraggableHTMLElement): DraggableHTMLElement => {
  // 获取元素相对于视口的位置和尺寸
  const rect = el.getBoundingClientRect() //  获取元素相对于视口的位置和尺寸
  const clone = el.cloneNode(true) as DraggableHTMLElement

  clone.style.position = 'fixed'
  clone.style.width = `${rect.width}px`
  clone.style.height = `${rect.height}px`
  clone.style.top = `${rect.top}px`
  clone.style.left = `${rect.left}px`
  clone.style.pointerEvents = 'none'
  clone.style.opacity = '0.8'
  clone.style.transition = 'transform 0.2s'
  clone.style.cursor = 'grabbing'
  clone.style.zIndex = '9999'
  clone.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'
  clone.setAttribute('data-draggable-clone', '')

  return clone
}

// 创建占位元素
const createPlaceholder = (el: DraggableHTMLElement): DraggableHTMLElement => {
  const styles = window.getComputedStyle(el)
  const placeholder = document.createElement('div')

  placeholder.style.width = `${el.offsetWidth}px`
  placeholder.style.height = `${el.offsetHeight}px`
  placeholder.style.margin = styles.margin
  placeholder.style.padding = styles.padding
  placeholder.style.flex = '0 0 auto'
  placeholder.style.backgroundColor = 'rgba(148, 163, 184, 0.1)'
  placeholder.style.border = '2px dashed #94a3b8'
  placeholder.style.borderRadius = '8px'
  placeholder.setAttribute('data-draggable-placeholder', '')

  return placeholder
}

// 获取占位元素的新索引
const getCurrentPlaceholderIndex = (state: DragState): number => {
  return Array.from(state.el.children).indexOf(state.placeholder!)
}

// 保存数据到 localStorage
const saveToLocalStorage = (key: string, data: any[]) => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    console.error('Failed to save data to localStorage:', error)
  }
}

// 从 localStorage 加载数据
const loadFromStorage = (key: string): any[] | null => {
  try {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  } catch (error) {
    console.error('Failed to load data from localStorage:', error)
    return null
  }
}
