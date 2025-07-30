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

const colors = (status : TodoTaskStatus) => {
   switch (status) {
      case "todo":
        return "border-blue-400 bg-blue-50";
      case "in-progress":
        return "border-yellow-400 bg-yellow-50";
      case "done":
        return "border-green-400 , bg-green-50";
      default:
        return "border-gray-300";
    }
}

const filteredTasks = tasks.filter(task => task.status === status);

  return (
    <div ref={setNodeRef} className="bg-white p-4 rounded-lg min-h-[400px] shadow  relative ">
      <h2 className={`text-xl font-semibold mb-4 text-slate-950 text-center border p-4  ${colors(status)}`}>{title}</h2>
      {filteredTasks.map((task) => (
        <TodoCard key={task.id} task={task} />
      ))}
    </div>
  )
}


