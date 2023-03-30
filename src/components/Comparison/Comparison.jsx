import React from 'react';
import './Comparison.css';

const Comparison = ({
  comparisonList,
  handleToggleCompare,
  setComparisonList,
}) => {
  const statsLabels = [
    'HP',
    'Attack',
    'Defense',
    'Special Attack',
    'Special Defense',
    'Speed',
  ];

  return (
    <div className="flex flex-col items-center overflow-auto pt-4">
      <div className="m-5 flex gap-3">
        <h2 className="text-xl">Comparison</h2>
        {comparisonList.length > 0 && (
          <button
            onClick={() => setComparisonList([])}
            className="h-7 w-7 cursor-pointer border-none bg-clear-bin bg-contain bg-no-repeat text-center"
          ></button>
        )}
      </div>

      <div className="my-4 max-w-full overflow-x-auto bg-white">
        <table className="table-zebra w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-solid border-gray-500 p-2 text-center capitalize">
                Stat
              </th>
              {comparisonList.map((pokemon) => (
                <th
                  key={pokemon.name}
                  className="sticky border border-solid border-gray-500 p-2 text-center capitalize"
                >
                  <button
                    className="absolute right-0 top-0 m-3 mx-2 h-5 w-5 cursor-pointer border-none bg-compare-checked bg-contain bg-no-repeat p-0 text-center transition-all duration-300"
                    onClick={() => handleToggleCompare(pokemon)}
                  ></button>
                  <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className="h-24 w-24 max-w-none object-contain"
                  />
                  {pokemon.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {statsLabels.map((statName, index) => (
              <tr key={statName}>
                <td className="sticky left-0 border border-solid border-gray-500 bg-gray-50 p-2 text-center font-bold">
                  {statName}
                </td>
                {comparisonList.map((pokemon) => (
                  <td
                    key={pokemon.name}
                    className="border border-solid border-gray-500 p-2 text-center"
                  >
                    {pokemon.stats[index].base_stat}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comparison;
