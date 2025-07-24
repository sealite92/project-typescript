export type TaskStatus = 'todo' | 'in-progress' | 'done';

export type Task = {
  id: string;
    text: string;
    status: TaskStatus;
   
}

