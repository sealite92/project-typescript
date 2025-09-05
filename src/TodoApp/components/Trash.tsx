import { useDroppable } from "@dnd-kit/core"
import { Trash2 } from "lucide-react"

export default function Trash() {
  const { setNodeRef, isOver } = useDroppable({
    id: "trash",
  })

  return (
    <div className="fixed bottom-6 right-6">
      <div
        ref={setNodeRef}
        className={`
          p-4 rounded-full shadow-lg transition-all duration-200
          ${
            isOver
              ? "bg-red-600 text-white scale-110"
              : "bg-white dark:bg-slate-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20"
          }
          border-2 border-red-200 dark:border-red-800
        `}
      >
        <Trash2 className="w-6 h-6" />
      </div>
    </div>
  )
}
