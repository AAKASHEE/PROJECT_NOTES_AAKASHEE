import React from 'react';
import { TodoStatsProps } from './types';

export function TodoStats({ todos }: TodoStatsProps) {
  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const pending = total - completed;

  return (
    <div className="flex justify-between mb-6 text-sm text-gray-600">
      <span>Total: {total}</span>
      <span>Completed: {completed}</span>
      <span>Pending: {pending}</span>
    </div>
  );
}