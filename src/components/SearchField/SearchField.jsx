import React from 'react'
import { SearchInput } from './styles'

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
  )
}
