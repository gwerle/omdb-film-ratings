const initialState = {
  favoriteMovies: []
};

export default function favoriteMoviesReducer (
  state = initialState,
  action
) {
  const { type, payload } = action;

  switch (type) {
    case '@FILMS/ADD_FAVORITE':
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.concat(payload.favoriteFilm)
      };
    case '@FILMS/REMOVE_FAVORITE':
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter(movie => movie.imdbID !== payload.imdbID)
      };
    default:
      return state;
  }
}
