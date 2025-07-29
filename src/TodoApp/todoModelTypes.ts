 export const VALID_STATUSES = ['todo', 'in-progress', 'done'] as const;



export type TodoTaskStatus = typeof VALID_STATUSES[number];

export type TodoTaskType = {
  id: string;
    text: string;
    status: TodoTaskStatus;
   
}

