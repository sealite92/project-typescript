
import { useTodoContext } from '../TodoContextProvider';
import { DndContext, MouseSensor, TouchSensor, useSensor } from '@dnd-kit/core';
import type { DragEndEvent } from "@dnd-kit/core";

import TaskColumn from './TaskColumn';
import Trash from './Trash';
import { VALID_STATUSES, type TodoTaskStatus } from '../todoModelTypes';


export default function Main() {

const {updateTaskStatus, deleteTask} = useTodoContext();


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

const sensors = [mouseSensor, touchSensor];

 const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;
const activeId =  String(active.id);
    const overId = String(over.id); 
    if (over.id === "trash") {
      deleteTask(activeId);
    } else if (VALID_STATUSES.includes(overId as TodoTaskStatus)) {
      updateTaskStatus(activeId, overId as TodoTaskStatus);
    }
//     if (!over) return;
// const activeId =  String(active.id);
//     const overId = String(over.id); 
//     if (over.id === "trash") {
//       deleteTask(activeId);
//     } else if (["todo", "in-progress", "done"].includes(overId)) {
//       updateTaskStatus(activeId, overId as TodoTaskStatus);
//     }

    // if (overId === "todo") {
    //     const task = tasks.find(t => t.id === activeId);
    //     if (task && task.status !== "todo") {
    //       return; 
    //     }
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <main className='grid grid-cols-1 md:grid-cols-3 gap-4'>
       <TaskColumn title='To Do' status={'todo'} />
       <TaskColumn title="In Progress" status={"in-progress"}/>
       <TaskColumn title="Done" status={"done"} />
      </main>
      <Trash />
    </DndContext>
  )
}
