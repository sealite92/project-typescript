import { useDroppable } from "@dnd-kit/core";


export default function Trash() {
 const { setNodeRef } = useDroppable({ id: "trash" });

  return (
    <div
      ref={setNodeRef}
      className="mt-6 mx-auto w-1/3 text-center border-2 border-red-400 bg-red-100 p-4 rounded"
    >
      🗑 Drop here to delete task
    </div>
  );
}
