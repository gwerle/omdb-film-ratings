import { getFilmsByText, getFilmByIMDBId } from '../../services/restApi';
import { getByHarryPotter } from '../__mocks__/GetByTextMock';
import { getByOrderOfThePhoenix } from '../__mocks__/GetByImdbIDMock';

describe('fetch data', () => {
  it('calls fetch by text and compare with mock', async () => {
    const fetchResponse = await getFilmsByText('Harry Potter');
    expect(fetchResponse).toEqual(getByHarryPotter);
  });

  it('calls fetch by id and compare with mock', async () => {
    const fetchResponse = await getFilmByIMDBId('tt0373889');
    expect(fetchResponse).toEqual(getByOrderOfThePhoenix);
  });
});
