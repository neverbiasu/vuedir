export interface DragEventParams {
  event: MouseEvent
  left: number
  top: number
}

export type DragCallback = (params: DragEventParams) => void

export interface OnDragOptions {
  event: DragCallback
  throttle?: number
}

export type OnDragType = DragCallback | OnDragOptions

export interface SortEventParams {
  oldIndex: number
  newIndex: number
  items: any[]
}

export type SortCallback = (params: SortEventParams) => void

export interface DragOptions {
  range?: HTMLElement | null
  startDrag?: DragCallback
  onDrag?: OnDragType
  endDrag?: DragCallback

  isList?: boolean // 是否启用列表拖拽功能
  onSort?: SortCallback // 列表排序完成回调

  handle?: string // 拖拽把手选择器

  axis?: 'x' | 'y' | 'both' // 限制拖拽方向
  bounds?: HTMLElement | 'parent' | null // 限制拖拽边界
  disabled?: boolean // 是否禁用拖拽
}
