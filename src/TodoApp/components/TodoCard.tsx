import { useDraggable } from "@dnd-kit/core";
import type { Task } from "../types";

type TodoCardProps = {
  task: Task;
};

export default function TodoCard({ task }: TodoCardProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: task.id,
  });

  const style: React.CSSProperties = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    transition: "transform 250ms ease",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
    cursor: "grab",
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 1000 : "auto",
    position: isDragging ? "absolute" : "relative",
  };

  const getStatusColor = (status: Task["status"]) => {
    switch (status) {
      case "todo":
        return "border-blue-400";
      case "in-progress":
        return "border-yellow-400";
      case "done":
        return "border-green-400";
      default:
        return "border-gray-300";
    }
  };

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
