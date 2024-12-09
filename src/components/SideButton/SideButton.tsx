import React from 'react';
import { SideButtonProps } from './types';

export function SideButton({ onClick, isOpen }: SideButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed right-0 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-l-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
      aria-label="Toggle Timer"
    >
      <span className="writing-mode-vertical text-lg">
        {isOpen ? '✕' : '⏱️ Timer'}
      </span>
    </button>
  );
}