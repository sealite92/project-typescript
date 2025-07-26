export type TodoTaskStatus = 'todo' | 'in-progress' | 'done';

export type TodoTaskType = {
  id: string;
    text: string;
    status: TodoTaskStatus;
   
}

