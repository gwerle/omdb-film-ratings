import React from 'react';
import PropTypes from 'prop-types';
import { SearchInput } from './styles';

export default function SearchField ({
  searchTerm,
  handleChangeInput
}) {
  return (
    <form>
      <SearchInput
        id="searchFilms"
        type="search"
        placeholder="Pesquise um filme..."
        value={searchTerm}
        onChange={(event) => handleChangeInput(event)}
      />
    </form>
  );
}

SearchField.defaultProps = {
  searchTerm: '',
  handleChangeInput: () => {}
};

SearchField.propTypes = {
  searchTerm: PropTypes.string,
  handleChangeInput: PropTypes.func
};
