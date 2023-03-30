import React from 'react';
import loopIcon from '../../assets/images/loop-icon.png';
import hardwareIcon from '../../assets/images/hardware-icon.png';
import autoFixHighIcon from '../../assets/images/auto-fix-high-icon.png';

function Move({ move, onMoveClick, gameStatus }) {
  const {
    name,
    physicalDmg,
    magicDmg,
    physicArmorPercents,
    magicArmorPercents,
    cooldown,
    cooldownCounter,
    active,
    avaliable,
  } = move;

  return (
    <li className="mb-1">
      <div
        className={`w-full p-1 ${
          active ? 'shadow-md' : 'shadow'
        } rounded bg-white`}
      >
        <button
          className={`mb-1 w-full rounded border border-gray-500 px-2 py-1 text-center ${
            active ? 'bg-warning' : ''
          } ${!avaliable || !gameStatus.start ? 'opacity-50' : ''}`}
          disabled={!avaliable || !gameStatus.start}
          onClick={() => onMoveClick(move)}
        >
          {name}
        </button>
        <p className="text-sm">
          <img
            src={hardwareIcon}
            alt="Hardware Icon"
            className="inline align-middle"
          />
          {` Физический урон ${physicalDmg} / защита ${physicArmorPercents}`}
        </p>
        <p className="text-sm">
          <img
            src={autoFixHighIcon}
            alt="Auto Fix High Icon"
            className="inline align-middle"
          />
          {` Магический урон ${magicDmg} / защита ${magicArmorPercents}`}
        </p>
        {!cooldown ? (
          ''
        ) : (
          <p className="text-sm">
            <img
              src={loopIcon}
              alt="Loop Icon"
              className="inline align-middle"
            />
            {` Заряд: ${
              cooldownCounter === 0 ? cooldown : cooldownCounter - 1
            } из ${cooldown}`}
          </p>
        )}
      </div>
    </li>
  );
}

export default Move;
