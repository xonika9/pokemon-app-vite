import { useState, useEffect } from 'react';
import axios from 'redaxios';

function usePokemonMoves({ pokemonName }) {
  const [pokemonMoves, setPokemonMoves] = useState([]);

  useEffect(() => {
    const fetchPokemonMoves = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
      );
      const moves = response.data.moves.slice(0, 10);

      const moveDetails = await Promise.all(
        moves.map(async (move) => {
          const moveResponse = await axios.get(move.move.url);
          const power =
            moveResponse.data.power === null ? 0 : moveResponse.data.power;
          return { name: moveResponse.data.name, power: power };
        }),
      );

      const filteredMoves = moveDetails
        .filter((move) => move.power > 0)
        .sort((a, b) => a.power - b.power)
        .slice(0, 4)
        .map((move, index) => ({ ...move, cooldown: index }));

      setPokemonMoves(filteredMoves);
    };

    fetchPokemonMoves();
  }, []);

  return { pokemonMoves };

  // return (
  //   <div>
  //     <h1>{pokemonName}'s Moves:</h1>
  //     <ul>
  //       {pokemonMoves.map((move, index) => (
  //         <li key={index}>
  //           {move.name}: Damage - {move.power}, Cooldown - {move.cooldown}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}

export default usePokemonMoves;
