import { Todo } from '../types/todo';

const STORAGE_KEY = 'todos';

export function saveTodos(todos: Todo[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export function loadTodos(): Todo[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  
  const todos = JSON.parse(stored);
  return todos.map((todo: any) => ({
    ...todo,
    createdAt: new Date(todo.createdAt)
  }));
}