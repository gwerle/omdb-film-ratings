import React, { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getFilmsByText } from '../services/restApi'

import useDebounce from '../util/useDebounce'
import SearchField from '../components/SearchField/SearchField'
import SvgPopcorn from './svg/Popcorn'

export default function FilmsList () {
  const [isFieldVisited, setFieldVisited] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [listFilms, setListFilms] = useState()

  const debouncedSearchTerm = useDebounce(searchTerm, 400)

  useAsyncEffect(async () => {
    if (debouncedSearchTerm.length > 0 || isFieldVisited) {
      try {
        const response = await getFilmsByText(debouncedSearchTerm)
        setListFilms(response)
      } catch (error) {
        console.log(error)
      }
    }
  }, [debouncedSearchTerm])

  const handleChangeInput = (event) => {
    setSearchTerm(event.target.value)
    setFieldVisited(true)
  }

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginTop: '80px', marginBottom: '50px' }}>
          <h2>Encontre seus filmes favoritos!</h2>
          <div>
            <SvgPopcorn />
          </div>
          <span style={{ fontSize: '9px' }}>
            Icon made by Freepik from www.flaticon.com
          </span>
          <h3>API by OMDb</h3>
        </div>
        <SearchField
          searchTerm={searchTerm}
          handleChangeInput={handleChangeInput}
        />
      </div>
      <ul>
        {listFilms?.Search?.length > 0 &&
          listFilms.Search.map((film) => (
            <li key={film.Title}>
              <img src={film.Poster} alt='deu ruim' />
              <span>{film.Title}</span>
            </li>
          ))}
      </ul>
    </div>
  )
}
