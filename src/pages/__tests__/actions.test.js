import * as actions from '../../store/actions';

describe('test actions', () => {
  it('should create an action and add a favorite movie', () => {
    const payload = { favoriteFilm: { Title: 'Harry Potter and the Sorcerer\'s Stone', Year: '2001', imdbID: 'tt0241527', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg' } };
    const expectedAction = {
      type: '@FILMS/ADD_FAVORITE',
      payload: payload
    };
    expect(actions.addFavorite(payload.favoriteFilm)).toEqual(expectedAction);
  });
})
;
