import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { CardContainer, StyledTitleText, StyledButtonDiv } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getFilmByIMDBId } from '../../services/restApi';
import MovieDetailsDialog from '../Dialog/MovieDetailsDialog';
import { addFavorite, removeFavorite } from '../../store/actions';
import HeartFullSvg from '../../pages/svg/HeartFull';
import HeartEmptySvg from '../../pages/svg/HeartEmpty';

function Card ({ film }) {
  const [isDialogOpen, toggleDialog] = useState(false);
  const [filmDetails, setFilmDetails] = useState({});
  const dispatch = useDispatch();

  const favoriteMovies = useSelector(state =>
    state.favoriteMovies
  );

  const getFilmDetails = async (imdbID) => {
    if (filmDetails?.imdbID !== imdbID) {
      const response = await getFilmByIMDBId(imdbID);
      setFilmDetails(response);
    }
    toggleDialog(true);
  };

  const onAddFavorite = (film) => {
    dispatch(addFavorite(film));
  };

  const onRemoveFavorite = (imdbID) => {
    dispatch(removeFavorite(imdbID));
  };

  const isMovieFavorited = (imdbID) => {
    if (favoriteMovies?.length > 0) {
      return favoriteMovies.find(favorited => favorited.imdbID === imdbID);
    } else {
      return false;
    }
  };

  return (
    <>
      <CardContainer>
        {film.Poster !== 'N/A' ? (
          <img width='300' height='450' src={film.Poster} alt='' />
        ) : (
          <img width='300' height='450' src='https://www2.kanazawa-it.ac.jp/moriken/Student/Noimg.jpg' alt='' />
        )}
        <StyledTitleText>{film.Title}</StyledTitleText>
        <StyledButtonDiv>
          <button id='verMais' onClick={() => getFilmDetails(film.imdbID)}><span>Ver mais!</span></button>
          {isMovieFavorited(film.imdbID) ? (
            <button onClick={() => onRemoveFavorite(film.imdbID)} style={{ float: 'right' }}><HeartFullSvg /></button>
          ) : (
            <button onClick={() => onAddFavorite(film)} style={{ float: 'right' }}><HeartEmptySvg /></button>
          )}
        </StyledButtonDiv>
      </CardContainer>
      <MovieDetailsDialog isOpen={isDialogOpen} closeDialog={() => toggleDialog(false)} filmDetails={filmDetails} />
    </>
  );
}

Card.propTypes = {
  film: PropTypes.shape({
    Title: PropTypes.string,
    Year: PropTypes.string,
    imdbID: PropTypes.string,
    Poster: PropTypes.string
  }).isRequired
};

export default memo(Card);
