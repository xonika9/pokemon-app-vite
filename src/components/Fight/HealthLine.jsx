import React from 'react';

function HealthLine({ maxHealth, health }) {
  const normalise = (value) => (value * 100) / maxHealth;
  const progressBarWidth = `${normalise(health)}%`;

  return (
    <div className="m-1 flex w-full items-center">
      <div className="mr-1 w-full">
        <div className="h-1 rounded bg-gray-200">
          <div
            className="h-full rounded bg-blue-500"
            style={{ width: progressBarWidth }}
          ></div>
        </div>
      </div>
      <div className="min-w-9">
        <span className="text-right text-sm text-gray-600">{health}</span>
      </div>
    </div>
  );
}

export default HealthLine;
