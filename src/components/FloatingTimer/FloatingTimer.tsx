import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import { Timer } from '../Timer';
import { createPortal } from 'react-dom';

export function FloatingTimer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const nodeRef = useRef(null);

  const handleDrag = (_e: any, data: { x: number; y: number }) => {
    setPosition({ x: data.x, y: data.y });
  };

  return createPortal(
    <Draggable
      nodeRef={nodeRef}
      position={position}
      onDrag={handleDrag}
      bounds="body"
      handle=".drag-handle"
    >
      <div ref={nodeRef} className="fixed z-50">
        {isExpanded ? (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="drag-handle bg-gray-100 p-2 cursor-move flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Timer</span>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded"
              >
                Minimize
              </button>
            </div>
            <div className="p-4">
              <Timer />
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsExpanded(true)}
            className="drag-handle w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center shadow-lg cursor-move focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            ⏱️
          </button>
        )}
      </div>
    </Draggable>,
    document.body
  );
}