import { useDroppable } from "@dnd-kit/core";

export default function Trash() {
  const { setNodeRef } = useDroppable({ id: "trash" });

  return (
    <div
      ref={setNodeRef}
      className="
        mt-6 mx-auto 
        w-full sm:w-2/3 lg:w-1/3 
        text-center 
        border-2 border-red-400 
        bg-red-100 p-3 sm:p-4 
        rounded
      "
    >
      🗑 <span className="hidden sm:inline">Drop here to delete task</span>
      <span className="sm:hidden">Drop to delete</span>
    </div>
  );
}
