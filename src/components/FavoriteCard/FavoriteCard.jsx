import './FavoriteCard.css';

function FavoriteCard({ favorites, handleRemoveFavorite }) {
  return (
    <>
      {favorites.map((pokemon, index) => (
        <li
          className="flex w-32 flex-col rounded bg-white p-2 shadow-md"
          key={index}
        >
          <div className="flex justify-center overflow-hidden">
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="h-16 object-contain"
            />
          </div>
          <div className="flex items-baseline justify-center gap-1">
            <button
              className="bg-like-red hover:bg-clear-button h-3 w-3 cursor-pointer border-none bg-transparent bg-contain bg-no-repeat text-center transition-all duration-300"
              onClick={() => handleRemoveFavorite(pokemon)}
            ></button>
            <h2 className="text-center text-base font-bold capitalize text-black">
              {pokemon.name}
            </h2>
          </div>
        </li>
      ))}
    </>
  );
}

export default FavoriteCard;
