import  { useEffect, useState } from 'react'
import type { TodoTaskType } from './types';

export default function useLocalStorage(key: string, initialValue: TodoTaskType[]) {
     const [tasks, setTasks] = useState<TodoTaskType[]>(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
   
      return initialValue;
    }
  });


  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(tasks));
    } catch (err) {
     
    }
  }, [tasks]);

    return [tasks, setTasks] as const;
 
}
