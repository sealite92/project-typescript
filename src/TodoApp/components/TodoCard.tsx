import type { TodoTaskType } from "../todoModelTypes"
import { CardHelpers } from "./TodoCardHelpers"

type TodoCardProps = {
  task: TodoTaskType
}

export default function TodoCard({ task }: TodoCardProps) {
  const { attributes, listeners, setNodeRef, style, getStatusColor } = CardHelpers(task.id)

  const getCardStyles = (status: string) => {
    switch (status) {
      case "todo":
        return "border-l-blue-500 hover:border-l-blue-600"
      case "in-progress":
        return "border-l-amber-500 hover:border-l-amber-600"
      case "done":
        return "border-l-emerald-500 hover:border-l-emerald-600"
      default:
        return "border-l-gray-300"
    }
  }

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className={`
        p-4 bg-white rounded-xl shadow-sm border border-gray-200 border-l-4 
        ${getCardStyles(task.status)}
        hover:shadow-md transition-all duration-200 cursor-grab active:cursor-grabbing
        ${task.status === "done" ? "opacity-75" : ""}
      `}
    >
      <p className={`text-gray-900 leading-relaxed ${task.status === "done" ? "line-through text-gray-500" : ""}`}>
        {task.text}
      </p>
    </div>
  )
}
