export interface DragEventParams {
  event: MouseEvent;
  left: number;
  top: number;
}

export type DragCallback = (params: DragEventParams) => void;

// 🌟 `onDrag` 参数可以是函数，也可以是 `{ event: Function, throttle?: number }`
export interface OnDragOptions {
  event: DragCallback;
  throttle?: number;
}

// 🌟 允许用户传递函数或对象
export type OnDragType = DragCallback | OnDragOptions;

// 🌟 指令参数类型
export interface DragOptions {
  range?: HTMLElement | null;
  startDrag?: DragCallback;
  onDrag?: OnDragType;
  endDrag?: DragCallback;
}
