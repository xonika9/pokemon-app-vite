import { Link } from 'react-router-dom';
import './Header.css';

function Header({
  sortOrder,
  handleSortChange,
  handleSearchChange,
  searchTerm,
  handleClearSearch,
  comparisonList,
}) {
  return (
    <header className="flex flex-col items-center justify-between gap-5 bg-white p-4 text-gray-900 shadow-md md:flex-row">
      <Link
        to="/"
        className="h-10 w-24 bg-pokemon-logo bg-contain bg-center bg-no-repeat"
      ></Link>

      {/* <h1 className="text-2xl font-bold">x9Pokémon</h1> */}
      <Link to="/compare">
        <button className="btn-warning btn w-52 text-gray-900 hover:bg-white">
          Compare {comparisonList.length} pokemons
        </button>
      </Link>
      <div className="relative flex w-52  items-center">
        <input
          type="text"
          placeholder="Search"
          className="input-bordered input-warning input w-full max-w-xs appearance-none bg-white placeholder-gray-900"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {searchTerm && (
          <button
            className="absolute right-2 h-4 w-4 cursor-pointer bg-clear-button bg-contain bg-center bg-no-repeat"
            onClick={handleClearSearch}
          ></button>
        )}
      </div>
      <div className="flex w-52 items-center">
        <label htmlFor="sort-by-select" className="mr-2 text-center">
          Sort:
        </label>
        <select
          // className=" w-full cursor-pointer appearance-none rounded-md bg-white py-2 pl-2 pr-8 text-gray-900 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          className="select-warning select appearance-none bg-white text-base font-normal"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="">Initial</option>
          <option value="hp">HP</option>
          <option value="attack">Attack</option>
          <option value="defense">Defense</option>
          <option value="special-attack">Special Attack</option>
          <option value="special-defense">Special Defense</option>
          <option value="speed">Speed</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
