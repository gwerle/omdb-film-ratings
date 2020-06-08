import React from 'react';
import { PropTypes } from 'prop-types';
import Dialog from './Dialog';

export default function MovieDetailsDialog ({ filmDetails, isOpen, closeDialog }) {
  return (
    <Dialog isOpen={isOpen} closeDialog={closeDialog}>
      <div style={{ textAlign: 'center' }}>
        <img src={filmDetails.Poster} width='250' height='400' alt='' />
      </div>
      <div>
        <h2>{filmDetails.Title} - {filmDetails.Year}</h2>
        <h3>IMDb rating: {filmDetails.imdbRating}</h3>
        <p style={{ textAlign: 'justify' }}>{filmDetails.Plot}</p>
      </div>
    </Dialog>
  );
}

MovieDetailsDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  filmDetails: PropTypes.shape({
    Title: PropTypes.string,
    Year: PropTypes.string,
    Rated: PropTypes.string,
    Released: PropTypes.string,
    Runtime: PropTypes.string,
    Genre: PropTypes.string,
    Director: PropTypes.string,
    Writer: PropTypes.string,
    Actors: PropTypes.string,
    Plot: PropTypes.string,
    Language: PropTypes.string,
    Country: PropTypes.string,
    Awards: PropTypes.string,
    Poster: PropTypes.string,
    Metascore: PropTypes.string,
    imdbRating: PropTypes.string,
    imdbVoting: PropTypes.string,
    imdbID: PropTypes.string,
    Type: PropTypes.string,
    DVD: PropTypes.string,
    BoxOffice: PropTypes.string,
    Production: PropTypes.string,
    Website: PropTypes.string,
    Response: PropTypes.string
  }).isRequired
};
