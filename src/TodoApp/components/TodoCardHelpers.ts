import { useDraggable } from "@dnd-kit/core";
import type { TodoTaskStatus, } from "../types";

export function CardHelpers (id: string) {

  
   const  { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id
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

  const getStatusColor = (status: TodoTaskStatus) => {
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

  return { attributes, listeners, setNodeRef,  isDragging, style, getStatusColor }
}



