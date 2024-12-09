import { useState, useCallback, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../types/todo';
import { saveTodos, loadTodos } from '../utils/storage';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => loadTodos());

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = useCallback((text: string) => {
    setTodos(current => [
      {
        id: uuidv4(),
        text,
        completed: false,
        createdAt: new Date()
      },
      ...current
    ]);
  }, []);

  const toggleTodo = useCallback((id: string) => {
    setTodos(current =>
      current.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos(current => current.filter(todo => todo.id !== id));
  }, []);

  const clearCompleted = useCallback(() => {
    setTodos(current => current.filter(todo => !todo.completed));
  }, []);

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted
  };
}