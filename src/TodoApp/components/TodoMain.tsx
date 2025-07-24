
import { useTodoContext } from '../TodoContextProvider';
import { DndContext } from '@dnd-kit/core';
import TaskColumn from './TaskColumn';
import Trash from './Trash';

export default function Main() {

const {updateTaskStatus, deleteTask} = useTodoContext();

 const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (!over) return;

    if (over.id === "trash") {
      deleteTask(active.id);
    } else if (["to-do", "in-progress", "done"].includes(over.id)) {
      updateTaskStatus(active.id, over.id);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <main className='grid grid-cols-1 md:grid-cols-3 gap-4'>
       <TaskColumn title='To Do' status={'todo'} />
       <TaskColumn title="In Progress" status={"in-progress"}/>
       <TaskColumn title="Done" status={"done"} />
      </main>
      <Trash />
    </DndContext>
  )
}
