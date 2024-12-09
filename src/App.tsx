import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { TodoStats } from './components/TodoStats';
import { Timer } from './components/Timer';
import { SideButton } from './components/SideButton';
import { useTodos } from './hooks/useTodos';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos();
  const [isTimerOpen, setIsTimerOpen] = useState(false);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Todo App</h1>
            <button
              onClick={clearCompleted}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Clear Completed
            </button>
          </div>
          <TodoStats todos={todos} />
          <TodoInput onAdd={addTodo} />
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        </div>
      </div>
      <SideButton onClick={() => setIsTimerOpen(!isTimerOpen)} isOpen={isTimerOpen} />
      {isTimerOpen && (
        <div className="fixed right-16 top-1/2 -translate-y-1/2 z-50">
          <Timer />
        </div>
      )}
    </Layout>
  );
}

export default App;