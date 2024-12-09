import React, { useState, useEffect } from 'react';
import { formatTime } from '../../utils/date';

export function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [status, setStatus] = useState<'stopped' | 'running' | 'paused'>('stopped');

  useEffect(() => {
    let intervalId: number;
    
    if (status === 'running') {
      intervalId = window.setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [status]);

  const handleStart = () => {
    setStatus('running');
  };

  const handlePause = () => {
    setStatus('paused');
  };

  const handleReset = () => {
    setStatus('stopped');
    setSeconds(0);
  };

  const handleResume = () => {
    setStatus('running');
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg min-w-[200px]">
      <div className="text-4xl font-mono text-center mb-4 font-bold">
        {formatTime(seconds)}
      </div>
      <div className="flex gap-2 justify-center">
        {status === 'stopped' && (
          <button
            onClick={handleStart}
            className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-colors"
          >
            Start
          </button>
        )}
        {status === 'running' && (
          <button
            onClick={handlePause}
            className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white transition-colors"
          >
            Pause
          </button>
        )}
        {status === 'paused' && (
          <button
            onClick={handleResume}
            className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors"
          >
            Resume
          </button>
        )}
        {(status === 'running' || status === 'paused') && (
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-colors"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}