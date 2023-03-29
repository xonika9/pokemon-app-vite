import { useState, useEffect } from 'react';

const useFavorites = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || [],
  );

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleAddFavorite = (pokemon) => {
    setFavorites([...favorites, { name: pokemon.name, image: pokemon.image }]);
  };

  const handleRemoveFavorite = (pokemon) => {
    setFavorites(
      favorites.filter((favorite) => favorite.name !== pokemon.name),
    );
  };

  return { favorites, setFavorites, handleAddFavorite, handleRemoveFavorite };
};

export default useFavorites;
