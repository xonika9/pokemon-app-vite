import './MoreButton.css';

function MoreButton({ numCards, filteredPokemon, addCards }) {
  return (
    <>
      {numCards < filteredPokemon.length && (
        <div className="flex justify-center py-3 px-0">
          <button
            className="cursor-pointer rounded border-none bg-green-500 py-2 px-20 text-base text-white hover:bg-green-600 md:px-36"
            onClick={addCards}
          >
            More
          </button>
        </div>
      )}
    </>
  );
}

export default MoreButton;
