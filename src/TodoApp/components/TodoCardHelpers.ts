import { useDraggable } from "@dnd-kit/core"
import type { TodoTaskStatus } from "../todoModelTypes"

export function CardHelpers(id: string) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: id,
  })

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        opacity: isDragging ? 0.5 : 1,
      }
    : undefined

  const getStatusColor = (status: TodoTaskStatus) => {
    switch (status) {
      case "todo":
        return "border-l-blue-500"
      case "in-progress":
        return "border-l-amber-500"
      case "done":
        return "border-l-emerald-500"
      default:
        return "border-l-border"
    }
  }

  return {
    attributes,
    listeners,
    setNodeRef,
    style,
    getStatusColor,
  }
}
