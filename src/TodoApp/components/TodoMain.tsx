"use client"

import { useTodoContext } from "../TodoContextProvider"
import { DndContext, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core"
import type { DragEndEvent } from "@dnd-kit/core"

import TaskColumn from "./TaskColumn"
import Trash from "./Trash"
import { VALID_STATUSES, type TodoTaskStatus } from "../todoModelTypes"

export default function Main() {
  const { updateTaskStatus, deleteTask } = useTodoContext()

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 5,
    },
  })

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 150,
      tolerance: 5,
    },
  })

  const sensors = useSensors(mouseSensor, touchSensor)

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over) return

    const activeId = String(active.id)
    const overId = String(over.id)

    if (over.id === "trash") {
      deleteTask(activeId)
    } else if (VALID_STATUSES.includes(overId as TodoTaskStatus)) {
      updateTaskStatus(activeId, overId as TodoTaskStatus)
    }
  }

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 ">
        <TaskColumn title="All" status={"todo"} />
        <TaskColumn title="Active" status={"in-progress"} />
        <TaskColumn title="Completed" status={"done"} />
      </main>
      <Trash />
    </DndContext>
  )
}
