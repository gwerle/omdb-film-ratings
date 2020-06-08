const ADD_FAVORITE = '@FILMS/ADD_FAVORITE';
const REMOVE_FAVORITE = '@FILMS/REMOVE_FAVORITE';

export function addFavorite (favoriteFilm) {
  return {
    type: ADD_FAVORITE,
    payload: { favoriteFilm }
  };
}

export function removeFavorite (imdbID) {
  return {
    type: REMOVE_FAVORITE,
    payload: { imdbID }
  };
}
