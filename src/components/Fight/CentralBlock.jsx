import React from 'react';
import swordsImage from '../../assets/images/swords.png';

function CentralBlock({ gameStatus, onDifficultClick }) {
  return (
    <div className="flex w-52 flex-col gap-3">
      <div className="rounded bg-white p-4">
        <h3 className="text-center text-2xl font-bold">
          {(!gameStatus.start && !gameStatus.end && 'Choose a difficulty') ||
            (!gameStatus.end && !gameStatus.fight && 'Your turn') ||
            (gameStatus.fight && 'Battle') ||
            (gameStatus.end && `${gameStatus.looser}, you lose, try again?`)}
        </h3>
      </div>
      {(!gameStatus.start || gameStatus.end) && (
        <div className="flex flex-col gap-3">
          <button
            className="rounded border-2 border-black px-4 py-2"
            onClick={() => onDifficultClick(25)}
          >
            Easy
          </button>
          <button
            className="rounded border-2 border-black px-4 py-2"
            onClick={() => onDifficultClick(18)}
          >
            Moderate
          </button>
          <button
            className="rounded border-2 border-black px-4 py-2"
            onClick={() => onDifficultClick(12)}
          >
            Hard
          </button>
        </div>
      )}
      {gameStatus.fight && <img src={swordsImage} className="" />}
    </div>
  );
}

export default CentralBlock;
