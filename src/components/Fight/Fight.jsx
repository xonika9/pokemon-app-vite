import React, { useEffect, useState } from 'react';
import Character from './Character';
import CentralBlock from './CentralBlock';

function Fight() {
  const monsterMovesProps = [
    {
      name: 'Catastropika',
      physicalDmg: 3,
      magicDmg: 0,
      physicArmorPercents: 20,
      magicArmorPercents: 20,
      cooldown: 0,
      cooldownCounter: 0,
      active: false,
      avaliable: true,
    },
    {
      name: 'Pulverizing Pancake',
      physicalDmg: 0,
      magicDmg: 4,
      physicArmorPercents: 0,
      magicArmorPercents: 0,
      cooldown: 3,
      cooldownCounter: 0,
      active: false,
      avaliable: true,
    },
    {
      name: 'Explosion',
      physicalDmg: 2,
      magicDmg: 0,
      physicArmorPercents: 50,
      magicArmorPercents: 0,
      cooldown: 2,
      cooldownCounter: 0,
      active: false,
      avaliable: true,
    },
  ];

  const heroMovesProps = [
    {
      name: 'Splintered Stormshards',
      physicalDmg: 2,
      magicDmg: 0,
      physicArmorPercents: 0,
      magicArmorPercents: 50,
      cooldown: 0,
      cooldownCounter: 0,
      active: false,
      avaliable: true,
    },
    {
      name: 'Oceanic Operetta',
      physicalDmg: 4,
      magicDmg: 0,
      physicArmorPercents: 0,
      magicArmorPercents: 0,
      cooldown: 4,
      cooldownCounter: 0,
      active: false,
      avaliable: true,
    },
    {
      name: 'Searing Sunraze Smash',
      physicalDmg: 0,
      magicDmg: 5,
      physicArmorPercents: 0,
      magicArmorPercents: 0,
      cooldown: 3,
      cooldownCounter: 0,
      active: false,
      avaliable: true,
    },
    {
      name: 'Magic block',
      physicalDmg: 0,
      magicDmg: 0,
      physicArmorPercents: 100,
      magicArmorPercents: 100,
      cooldown: 4,
      cooldownCounter: 0,
      active: false,
      avaliable: true,
    },
  ];

  const [monsterHealth, setMonsterHealth] = useState(10);
  const [monsterMove, setMonsterMove] = useState(null);
  const [monsterMoveList, setMonsterMoveList] =
    React.useState(monsterMovesProps);

  const [heroMaxHealth, setHeroMaxHealth] = useState(1);
  const [heroHealth, setHeroHealth] = React.useState(1);
  const [heroMove, setHeroMove] = useState(null);
  const [heroMoveList, setHeroMoveList] = React.useState(heroMovesProps);

  const [gameStatus, setGameStatus] = useState({
    start: false,
    fight: false,
    end: false,
    looser: '',
  });

  const calcDamage = (myMoove, hisMove) => {
    let magicDmg =
      myMoove.magicArmorPercents - hisMove.magicDmg < 0
        ? myMoove.magicArmorPercents - hisMove.magicDmg
        : 0;
    let physicalDmg =
      myMoove.physicArmorPercents - hisMove.physicalDmg < 0
        ? myMoove.physicArmorPercents - hisMove.physicalDmg
        : 0;
    return magicDmg + physicalDmg;
  };

  const resetFightWithDelay = () => {
    setTimeout(() => {
      setGameStatus((prev) => ({ ...prev, fight: false }));

      let moves = monsterMoveList.map((move) => ({
        ...updateMoveStatus(move),
      }));
      setMonsterMoveList(moves);
      setMonsterMove(null);

      moves = heroMoveList.map((move) => ({ ...updateMoveStatus(move) }));
      setHeroMoveList(moves);
      setHeroMove(null);
    }, 1000);
  };

  useEffect(() => {
    if (gameStatus.start && !monsterMove) {
      makeMonsterMove();
    }

    if (gameStatus.fight && !gameStatus.end) {
      const newMonsterHealth =
        monsterHealth + calcDamage(monsterMove, heroMove);
      const newHeroHealth = heroHealth + calcDamage(heroMove, monsterMove);

      setMonsterHealth(newMonsterHealth);
      setHeroHealth(newHeroHealth);

      if (newMonsterHealth <= 0 || newHeroHealth <= 0) {
        setHeroMoveList(heroMovesProps);
        setMonsterMoveList(monsterMovesProps);

        setGameStatus({
          start: false,
          fight: false,
          end: true,
          looser:
            newHeroHealth <= 0 && newMonsterHealth <= 0
              ? 'Spare'
              : newHeroHealth <= 0
              ? 'Pokemon 2'
              : 'Pokemon 1',
        });
        return;
      }
      resetFightWithDelay();
    }
  }, [gameStatus]);

  const updateMoveStatus = (move) => {
    if (move.active) {
      if (move.cooldown) {
        move.avaliable = false;
      }
      move.active = false;
    }
    if (!move.avaliable) {
      move.cooldownCounter++;
      if (move.cooldownCounter > move.cooldown) {
        move.avaliable = true;
        move.cooldownCounter = 0;
      }
    }
    return move;
  };

  const makeMonsterMove = () => {
    setTimeout(() => {
      const avaliableMoves = monsterMoveList.filter((a) => a.avaliable);
      const randomMove =
        avaliableMoves[(avaliableMoves.length * Math.random()) << 0];
      setMonsterMoveList(
        monsterMoveList.map((move) => {
          if (move.name === randomMove.name) move.active = true;
          return { ...move };
        }),
      );
      setMonsterMove(randomMove);
    }, 100);
  };

  const makeHeroMove = (heroMove) => {
    if (gameStatus.fight) return;

    const moves = heroMoveList.map((move) => {
      if (move.name === heroMove.name) move.active = true;
      return { ...move };
    });
    setHeroMoveList(moves);
    setHeroMove(heroMove);
    setGameStatus((prev) => ({ ...prev, fight: true }));
  };

  const handleDifficultyClick = (heroMaxHealth) => {
    setHeroMaxHealth(heroMaxHealth);
    setHeroHealth(heroMaxHealth);
    setMonsterHealth(10);
    setHeroMove(null);
    setHeroMoveList(heroMovesProps);
    setMonsterMove(null);
    setMonsterMoveList(monsterMovesProps);
    setGameStatus({ start: true, fight: false, end: false, looser: '' });
  };

  return (
    <div className="my-10 flex justify-evenly p-4">
      <Character
        maxHealth={10}
        health={monsterHealth}
        name="Pokemon 1"
        imageName="dragon"
        moves={monsterMoveList}
        onMoveClick={() => {}}
        gameStatus={gameStatus}
      />
      <CentralBlock
        gameStatus={gameStatus}
        onDifficultClick={handleDifficultyClick}
      />
      <Character
        maxHealth={heroMaxHealth}
        health={heroHealth}
        name="Pokemon 2"
        imageName="wizard"
        moves={heroMoveList}
        onMoveClick={makeHeroMove}
        gameStatus={gameStatus}
      />
    </div>
  );
}

export default Fight;
