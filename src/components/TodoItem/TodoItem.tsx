import React from 'react';
import { TodoItemProps } from './types';
import clsx from 'clsx';
import { formatDate } from '../../utils/date';

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex flex-col gap-2 p-4 bg-white rounded-lg shadow">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
        />
        <span
          className={clsx(
            'flex-1',
            todo.completed && 'line-through text-gray-500'
          )}
        >
          {todo.text}
        </span>
        <button
          onClick={() => onDelete(todo.id)}
          className="p-2 text-red-500 hover:text-red-700 focus:outline-none"
          aria-label="Delete todo"
        >
          Delete
        </button>
      </div>
      <div className="text-xs text-gray-500 pl-8">
        Created: {formatDate(todo.createdAt)}
      </div>
    </div>
  );
}