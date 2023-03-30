import React from 'react';
import Move from './Move';
import HealthLine from './HealthLine';

function Character({
  maxHealth,
  health,
  name,
  imageName,
  moves,
  onMoveClick,
  gameStatus,
}) {
  return (
    <div
      className={`flex ${name === 'Евстафий' ? 'flex-row-reverse' : ''} gap-8`}
    >
      <div className="flex w-36 flex-col items-center gap-2">
        <h2 className="text-xl font-bold">{name}</h2>
        <img
          alt={name}
          src={`/src/assets/images/${imageName}.png`}
          className="w-32"
        />
        {(gameStatus.start || gameStatus.end) && (
          <HealthLine maxHealth={maxHealth} health={health} />
        )}
      </div>
      <ul className="list-none">
        {moves.map((move, index) => (
          <Move
            key={index}
            move={move}
            onMoveClick={onMoveClick}
            gameStatus={gameStatus}
          />
        ))}
      </ul>
    </div>
  );
}

export default Character;
