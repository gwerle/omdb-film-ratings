import React, { useState } from 'react';
import { useAsyncEffect } from 'use-async-effect';
import { getFilmsByText } from '../services/restApi';
import Card from '../components/Card/Card';
import SearchField from '../components/SearchField/SearchField';
import useDebounce from '../util/useDebounce';
import { FlexDiv, SmallTextCopyright, WithMargin, TitleWithPadding } from './styles';
import SvgPopcorn from './svg/Popcorn';
import HeartFullSvg from './svg/HeartFull';
import { StyledButtonDiv } from '../components/Card/styles';
import FavoriteMoviesDialog from '../components/Dialog/FavoriteMoviesDialog';

export default function FilmsList () {
  const [isFieldVisited, setFieldVisited] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [listFilms, setListFilms] = useState();
  const [isDialogFavoriteFilmsOpen, toggleDialogFavoriteFilms] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 400);

  useAsyncEffect(async () => {
    if (debouncedSearchTerm.length > 0 || isFieldVisited) {
      try {
        const response = await getFilmsByText(debouncedSearchTerm);
        setListFilms(response);
      } catch (error) {
        alert(error);
      }
    }
  }, [debouncedSearchTerm]);

  const handleChangeInput = (event) => {
    setSearchTerm(event.target.value);
    setFieldVisited(true);
  };

  return (
    <div>
      <StyledButtonDiv style={{ textAlign: 'right' }}>
        <button onClick={() => toggleDialogFavoriteFilms(true)}><HeartFullSvg /> <span>Ver Favoritos</span></button>
        <FavoriteMoviesDialog isOpen={isDialogFavoriteFilmsOpen} closeDialog={() => toggleDialogFavoriteFilms(false)} />
      </StyledButtonDiv>
      <div style={{ textAlign: 'center' }}>
        <WithMargin>
          <TitleWithPadding>Encontre seus filmes favoritos!</TitleWithPadding>
          <div>
            <SvgPopcorn />
          </div>
          <SmallTextCopyright>
            Icon made by Freepik from www.flaticon.com
          </SmallTextCopyright>
          <h3>API by OMDb</h3>
        </WithMargin>
        <SearchField
          searchTerm={searchTerm}
          handleChangeInput={handleChangeInput}
        />
      </div>
      <FlexDiv>
        {listFilms?.Search?.length > 0 &&
          listFilms.Search.map((film) => (
            <div key={film.imdbID} >
              <Card film={film} />
            </div>
          ))}
      </FlexDiv>
    </div>
  );
}
