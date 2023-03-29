import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PokemonCardList from '../PokemonCardList/PokemonCardList';
import FavoriteCardList from '../FavoriteCardList/FavoriteCardList';
import MoreButton from '../MoreButton/MoreButton';
import Comparison from '../Comparison/Comparison';

import usePokemonData from '../../hooks/usePokemonData';
import useFavorites from '../../hooks/useFavorites';
import useComparisonList from '../../hooks/useComparisonList';

function App() {
  const {
    loading,
    sortOrder,
    numCards,
    searchTerm,
    handleSortChange,
    handleSearchChange,
    handleClearSearch,
    addCards,
    filteredPokemon,
    visiblePokemon,
  } = usePokemonData();

  const { favorites, setFavorites, handleAddFavorite, handleRemoveFavorite } =
    useFavorites();

  const { comparisonList, setComparisonList, handleToggleCompare } =
    useComparisonList();

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-center font-sans text-gray-900">
        <Header
          sortOrder={sortOrder}
          handleSortChange={handleSortChange}
          handleSearchChange={handleSearchChange}
          searchTerm={searchTerm}
          handleClearSearch={handleClearSearch}
          comparisonList={comparisonList}
        />
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <FavoriteCardList
                  favorites={favorites}
                  handleRemoveFavorite={handleRemoveFavorite}
                  setFavorites={setFavorites}
                />
                <PokemonCardList
                  loading={loading}
                  visiblePokemon={visiblePokemon}
                  favorites={favorites}
                  handleAddFavorite={handleAddFavorite}
                  handleRemoveFavorite={handleRemoveFavorite}
                  handleToggleCompare={handleToggleCompare}
                  comparisonList={comparisonList}
                />
                <MoreButton
                  numCards={numCards}
                  filteredPokemon={filteredPokemon}
                  addCards={addCards}
                />
              </React.Fragment>
            }
          />
          <Route
            path="/compare"
            element={
              <Comparison
                comparisonList={comparisonList}
                handleToggleCompare={handleToggleCompare}
                setComparisonList={setComparisonList}
              />
            }
          />
        </Routes>
        <Footer
          sortOrder={sortOrder}
          handleSortChange={handleSortChange}
          handleSearchChange={handleSearchChange}
          searchTerm={searchTerm}
          handleClearSearch={handleClearSearch}
          comparisonList={comparisonList}
        />
      </div>
    </Router>
  );
}

export default App;
