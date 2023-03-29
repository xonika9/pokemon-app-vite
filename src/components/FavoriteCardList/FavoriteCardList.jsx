import { useState } from 'react';

import './FavoriteCardList.css';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import FavoriteCardMin from '../FavoriteCardMin/FavoriteCardMin';

function FavoriteCardList({ favorites, handleRemoveFavorite, setFavorites }) {
  const [minimized, setMinimized] = useState(true);

  return (
    <>
      {minimized && (
        <div className="fixed bottom-16 right-0 p-2 pr-8 shadow-none">
          {favorites.length > 0 && (
            <button
              onClick={() => setFavorites([])}
              className="absolute right-0 top-0 h-7 w-7 cursor-pointer bg-clear-bin bg-contain bg-center bg-no-repeat"
            ></button>
          )}
          <button
            onClick={() => setMinimized(false)}
            className="fixed bottom-16 right-0 h-7 w-7 bg-maximize-button bg-contain bg-center bg-no-repeat"
          ></button>
          <ul className="flex max-h-[70vh] flex-col flex-wrap-reverse content-start items-start gap-2 p-0">
            <FavoriteCardMin
              favorites={favorites}
              handleRemoveFavorite={handleRemoveFavorite}
            />
          </ul>
        </div>
      )}
      {!minimized && (
        <div className="fixed bottom-16 right-0 max-w-[322px] rounded-md border bg-white p-4 shadow-md md:max-w-[464px]">
          {favorites.length > 0 && (
            <button
              onClick={() => setFavorites([])}
              className="bg-centerbg-no-repeat absolute right-0 top-0 h-7 w-7 cursor-pointer bg-clear-bin bg-contain"
            ></button>
          )}
          <button
            onClick={() => setMinimized(true)}
            className="fixed bottom-16 right-0 h-7 w-7 bg-minimize-button bg-contain bg-center bg-no-repeat"
          ></button>
          <ul className="flex flex-wrap justify-center gap-3 p-0 pr-4">
            <FavoriteCard
              favorites={favorites}
              handleRemoveFavorite={handleRemoveFavorite}
            />
          </ul>
        </div>
      )}
    </>
  );
}

export default FavoriteCardList;
