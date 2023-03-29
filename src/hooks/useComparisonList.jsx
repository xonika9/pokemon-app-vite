import { useState, useEffect } from 'react';

const useComparisonList = () => {
  const [comparisonList, setComparisonList] = useState(
    JSON.parse(localStorage.getItem('comparisonList')) || [],
  );

  useEffect(() => {
    localStorage.setItem('comparisonList', JSON.stringify(comparisonList));
  }, [comparisonList]);

  const handleToggleCompare = (pokemon) => {
    if (comparisonList.some((p) => p.name === pokemon.name)) {
      setComparisonList(comparisonList.filter((p) => p.name !== pokemon.name));
    } else {
      setComparisonList([...comparisonList, pokemon]);
    }
  };

  return { comparisonList, setComparisonList, handleToggleCompare };
};

export default useComparisonList;
