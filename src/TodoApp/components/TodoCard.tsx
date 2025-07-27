import type { TodoTaskType } from "../todoModelTypes";
import { CardHelpers } from "./TodoCardHelpers";

type TodoCardProps = {
  task: TodoTaskType;
};

export default function TodoCard({ task,  }: TodoCardProps) {

  const { attributes, listeners, setNodeRef,  style, getStatusColor } = CardHelpers(task.id);

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className={`p-4 bg-white rounded mb-3 shadow w-full border-l-4 ${getStatusColor(
        task.status
      )} ${task.status === "done" ? "line-through text-gray-500" : ""}`}
    >
      <p>{task.text}</p>
    </div>
  );
}
