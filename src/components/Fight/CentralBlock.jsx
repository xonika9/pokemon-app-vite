import React from 'react';
import swordsImage from '../../assets/images/swords.png';

function CentralBlock({ gameStatus, onDifficultClick }) {
  return (
    <div className="flex w-52 flex-col gap-3">
      <div className="rounded bg-white p-4">
        <h3 className="text-center text-2xl font-bold">
          {(!gameStatus.start && !gameStatus.end && 'Выбери сложность') ||
            (!gameStatus.end && !gameStatus.fight && 'Твой ход') ||
            (gameStatus.fight && 'Удар') ||
            (gameStatus.end && `${gameStatus.looser} повержен! Ещё раз?`)}
        </h3>
      </div>
      {(!gameStatus.start || gameStatus.end) && (
        <div className="flex flex-col gap-3">
          <button
            className="rounded border-2 border-black px-4 py-2"
            onClick={() => onDifficultClick(25)}
          >
            Легкий
          </button>
          <button
            className="rounded border-2 border-black px-4 py-2"
            onClick={() => onDifficultClick(18)}
          >
            Норм
          </button>
          <button
            className="rounded border-2 border-black px-4 py-2"
            onClick={() => onDifficultClick(12)}
          >
            Дес матч
          </button>
        </div>
      )}
      {gameStatus.fight && <img src={swordsImage} className="w-full" />}
    </div>
  );
}

export default CentralBlock;
