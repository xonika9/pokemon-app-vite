import './PokemonCardList.css';
import PokemonCard from '../PokemonCard/PokemonCard';

function PokemonCardList({
  loading,
  visiblePokemon,
  favorites,
  handleAddFavorite,
  handleRemoveFavorite,
  handleToggleCompare,
  comparisonList,
}) {
  return (
    <>
      {loading ? (
        <p className="flex h-full items-center justify-center text-lg text-gray-900">
          Loading...
        </p>
      ) : (
        <ul className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4 p-4 md:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
          <PokemonCard
            visiblePokemon={visiblePokemon}
            favorites={favorites}
            handleAddFavorite={handleAddFavorite}
            handleRemoveFavorite={handleRemoveFavorite}
            handleToggleCompare={handleToggleCompare}
            comparisonList={comparisonList}
          />
        </ul>
      )}
    </>
  );
}

export default PokemonCardList;
