import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Dialog from './Dialog';

export default function FavoriteMoviesDialog ({ isOpen, closeDialog }) {
  const favoriteMovies = useSelector(state => state.favoriteMovies);
  return (
    <Dialog isOpen={isOpen} closeDialog={closeDialog}>
      <div>
        {favoriteMovies?.length > 0 ? (
          favoriteMovies.map(movie => {
            return (
              <div key={movie.imdbID} style={{ textAlign: 'center', margin: '20px 0' }}>
                <img src={movie.Poster} width='200' height='300' alt='' />
                <div>{movie.Title}</div>
              </div>
            );
          })) : (
          <h3 style={{ textAlign: 'center' }}>Você ainda não favoritou nada!</h3>
        )}
      </div>
    </Dialog>
  );
}

FavoriteMoviesDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired
};
