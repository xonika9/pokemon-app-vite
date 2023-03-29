import { useState, useEffect, useMemo } from 'react';
import axios from 'redaxios';

const usePokemonData = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('');
  const [numCards, setNumCards] = useState(20);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedPokemonData = JSON.parse(localStorage.getItem('pokemonData'));
    if (storedPokemonData) {
      setPokemonData(storedPokemonData);
      setLoading(false);
    } else {
      async function fetchData() {
        try {
          const response = await axios.get(
            'https://pokeapi.co/api/v2/pokemon?limit=1500',
            { cache: true },
          );
          const data = response.data.results;
          const pokemonData = await Promise.all(
            data.map(async (pokemon) => {
              const pokemonResponse = await axios.get(pokemon.url);
              return {
                name: pokemonResponse.data.name,
                image: pokemonResponse.data.sprites.front_default,
                stats: pokemonResponse.data.stats,
              };
            }),
          );
          setPokemonData(pokemonData);
          setLoading(false);
          localStorage.setItem('pokemonData', JSON.stringify(pokemonData));
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    }
  }, []);

  const sortingFunctions = useMemo(
    () => ({
      hp: (a, b) => b.stats[0].base_stat - a.stats[0].base_stat,
      attack: (a, b) => b.stats[1].base_stat - a.stats[1].base_stat,
      defense: (a, b) => b.stats[2].base_stat - a.stats[2].base_stat,
      'special-attack': (a, b) => b.stats[3].base_stat - a.stats[3].base_stat,
      'special-defense': (a, b) => b.stats[4].base_stat - a.stats[4].base_stat,
      speed: (a, b) => b.stats[5].base_stat - a.stats[5].base_stat,
    }),
    [],
  );

  const sortedPokemon = useMemo(() => {
    const sortingFunction = sortingFunctions[sortOrder];
    return sortingFunction
      ? [...pokemonData].sort(sortingFunction)
      : pokemonData;
  }, [pokemonData, sortOrder, sortingFunctions]);

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const addCards = () => {
    setNumCards(numCards + 20);
  };

  const filteredPokemon = sortedPokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const visiblePokemon = useMemo(
    () => filteredPokemon.slice(0, numCards),
    [numCards, filteredPokemon],
  );

  return {
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
  };
};

export default usePokemonData;
