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
        return "border-l-blue-500 hover:border-l-blue-600 dark:border-l-blue-400 dark:hover:border-l-blue-300"
      case "in-progress":
        return "border-l-amber-500 hover:border-l-amber-600 dark:border-l-amber-400 dark:hover:border-l-amber-300"
      case "done":
        return "border-l-emerald-500 hover:border-l-emerald-600 dark:border-l-emerald-400 dark:hover:border-l-emerald-300"
      default:
        return "border-l-slate-300 dark:border-l-slate-600"
    }
  }

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className={`
        p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 border-l-4 
        ${getCardStyles(task.status)}
        hover:shadow-md transition-all duration-200 cursor-grab active:cursor-grabbing
        ${task.status === "done" ? "opacity-75" : ""}
      `}
    >
      <p
        className={`text-slate-900 dark:text-slate-100 leading-relaxed ${task.status === "done" ? "line-through text-slate-500 dark:text-slate-400" : ""}`}
      >
        {task.text}
      </p>
    </div>
  )
}
