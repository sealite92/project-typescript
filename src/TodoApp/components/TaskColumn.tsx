import { useDroppable } from "@dnd-kit/core"
import { useTodoContext } from "../TodoContextProvider"
import { Circle, Clock, CheckCircle } from "lucide-react"

import TodoCard from "./TodoCard"
import type { TodoTaskStatus } from "../todoModelTypes"

type TaskColumnProps = {
  title: string
  status: TodoTaskStatus
}

export default function TaskColumn({ title, status }: TaskColumnProps) {
  const { tasks } = useTodoContext()

  const { setNodeRef } = useDroppable({
    id: status,
  })

  const getColumnStyles = (status: TodoTaskStatus) => {
    switch (status) {
      case "todo":
        return {
          border: "border-blue-200 dark:border-blue-800",
          bg: "bg-blue-50 dark:bg-blue-950/30",
          icon: <Circle className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
          titleColor: "text-blue-700 dark:text-blue-300",
        }
      case "in-progress":
        return {
          border: "border-amber-200 dark:border-amber-800",
          bg: "bg-amber-50 dark:bg-amber-950/30",
          icon: <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
          titleColor: "text-amber-700 dark:text-amber-300",
        }
      case "done":
        return {
          border: "border-emerald-200 dark:border-emerald-800",
          bg: "bg-emerald-50 dark:bg-emerald-950/30",
          icon: <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
          titleColor: "text-emerald-700 dark:text-emerald-300",
        }
      default:
        return {
          border: "border-slate-200 dark:border-slate-800",
          bg: "bg-slate-100/50 dark:bg-slate-800/50",
          icon: <Circle className="w-5 h-5 text-slate-500" />,
          titleColor: "text-slate-900 dark:text-slate-100",
        }
    }
  }

  const styles = getColumnStyles(status)
  const filteredTasks = tasks.filter((task) => task.status === status)

  return (
    <div
      ref={setNodeRef}
      className={`${styles.bg} ${styles.border} border-2 border-dashed rounded-2xl p-6 min-h-[500px] transition-colors hover:border-opacity-60`}
    >
      <div className="flex items-center gap-3 mb-6">
        {styles.icon}
        <h2 className={`text-lg font-semibold ${styles.titleColor}`}>{title}</h2>
        <span className="ml-auto bg-white dark:bg-slate-800 px-2 py-1 rounded-full text-sm font-medium text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
          {filteredTasks.length}
        </span>
      </div>

      <div className="space-y-3">
        {filteredTasks.map((task) => (
          <TodoCard key={task.id} task={task} />
        ))}
      </div>

      {filteredTasks.length === 0 && (
        <div className="text-center py-12">
          <div className="text-slate-500 dark:text-slate-400 text-sm">Drop tasks here</div>
        </div>
      )}
    </div>
  )
}
