import './FavoriteCardMin.css';

function FavoriteCardMin({ favorites, handleRemoveFavorite }) {
  return (
    <>
      {favorites.map((pokemon, index) => (
        <li
          className="relative flex w-16 flex-col justify-between rounded bg-white shadow-md"
          key={index}
        >
          <div className="flex justify-center overflow-hidden">
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="h-16 object-contain"
            />
          </div>
          <button
            className="bg-like-red hover:bg-clear-button absolute top-0 right-0 m-1 h-3 w-3 bg-contain bg-no-repeat transition-all duration-300"
            onClick={() => handleRemoveFavorite(pokemon)}
          ></button>
        </li>
      ))}
    </>
  );
}

export default FavoriteCardMin;
