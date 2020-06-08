import { apiConstant } from '../contstants/apiConstant';

export function getFilmsByText (text) {
  return fetch(`${apiConstant}&s=${text}`).then((resp) => resp.json());
}

export function getFilmByIMDBId (id) {
  return fetch(`${apiConstant}&i=${id}`).then((resp) => resp.json());
}
