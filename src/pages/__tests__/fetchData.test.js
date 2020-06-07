import { getFilmsByText } from '../../services/restApi'
import { getByHarryPotter } from '../__mocks__/GetByTextMock'

describe('fetch data', () => {
  it('calls fetch and compare with mock', async () => {
    const fetchResponse = await getFilmsByText('Harry Potter')
    expect(fetchResponse).toEqual(getByHarryPotter)
  })
})
