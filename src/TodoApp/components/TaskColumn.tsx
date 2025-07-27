import {  useDroppable } from "@dnd-kit/core";
import { useTodoContext } from "../TodoContextProvider";

import TodoCard from "./TodoCard";
import type { TodoTaskStatus } from "../todoModelTypes";

type TasColumnProps = { 
    title: string;
    status: TodoTaskStatus;
}



export default function TaskColumn({ title, status }: TasColumnProps) {

const {tasks} = useTodoContext();

const {setNodeRef} = useDroppable({
    id: status,
});

const filteredTasks = tasks.filter(task => task.status === status);

  return (
    <div ref={setNodeRef} className="bg-teal-700 p-4 rounded-lg min-h-[400px] shadow  relative ">
      <h2 className="text-xl font-semibold mb-4 text-slate-950 text-center border p-4 bg-slate-200">{title}</h2>
      {filteredTasks.map((task) => (
        <TodoCard key={task.id} task={task} />
      ))}
    </div>
  )
}


