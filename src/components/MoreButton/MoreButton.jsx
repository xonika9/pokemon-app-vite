import './MoreButton.css';

function MoreButton({ numCards, filteredPokemon, addCards }) {
  return (
    <>
      {numCards < filteredPokemon.length && (
        <div className="flex justify-center px-0 py-3 pb-10">
          <button
            className="btn-warning btn w-52 text-gray-900 hover:bg-white"
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
