import './PokemonCard.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function PokemonCard({
  visiblePokemon,
  favorites,
  handleAddFavorite,
  handleRemoveFavorite,
  handleToggleCompare,
  comparisonList,
}) {
  return (
    <>
      {visiblePokemon.map((pokemon, index) => (
        <li
          className="flex flex-col justify-between rounded-xl bg-white p-2 shadow-md md:p-4"
          key={index}
        >
          <div className="flex justify-center overflow-hidden rounded-lg">
            <LazyLoadImage
              src={pokemon.image}
              alt={pokemon.name}
              className={'h-36 max-w-full object-contain md:h-52'}
            />
          </div>
          <div className="mt-4 text-center">
            <div className="flex items-baseline justify-center gap-2">
              {favorites.some((favorite) => favorite.name === pokemon.name) ? (
                <button
                  className="h-4 w-4 cursor-pointer border-none bg-transparent bg-like-red bg-contain bg-no-repeat p-0 text-center transition-all duration-300 hover:bg-clear-button"
                  onClick={() => handleRemoveFavorite(pokemon)}
                ></button>
              ) : (
                <button
                  className="h-4 w-4 cursor-pointer border-none bg-like-transp bg-contain bg-no-repeat p-0 text-center transition-all duration-300"
                  onClick={() => handleAddFavorite(pokemon)}
                ></button>
              )}
              <h2 className="m-0 text-lg font-bold capitalize text-gray-900 md:text-2xl">
                {pokemon.name}
              </h2>
              {comparisonList.some((p) => p.name === pokemon.name) ? (
                <button
                  className="h-5 w-5 cursor-pointer border-none bg-compare-checked bg-contain bg-no-repeat p-0 text-center transition-all duration-300"
                  onClick={() => handleToggleCompare(pokemon)}
                ></button>
              ) : (
                <button
                  className="h-5 w-5 cursor-pointer border-none bg-compare-unchecked bg-contain bg-no-repeat p-0 text-center transition-all duration-300"
                  onClick={() => handleToggleCompare(pokemon)}
                ></button>
              )}
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-x-2 gap-y-1">
              <li className="text-lg">HP: {pokemon.stats[0].base_stat}</li>
              <li className="text-lg">Attack: {pokemon.stats[1].base_stat}</li>
              <li className="text-lg">Defense: {pokemon.stats[2].base_stat}</li>
              <li className="text-lg">Sp. Atk: {pokemon.stats[3].base_stat}</li>
              <li className="text-lg">Sp. Def: {pokemon.stats[4].base_stat}</li>
              <li className="text-lg">Speed: {pokemon.stats[5].base_stat}</li>
            </ul>
          </div>
        </li>
      ))}
    </>
  );
}

export default PokemonCard;
