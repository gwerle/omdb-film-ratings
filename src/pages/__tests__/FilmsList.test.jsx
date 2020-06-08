import React from 'react';
import { shallow, mount } from 'enzyme';
import FilmsList from '../FilmsList';
import SearchField from '../../components/SearchField/SearchField';

describe('<FilmsList />', () => {
  it('renders field to search a film', () => {
    const component = shallow(<FilmsList />);
    expect(component.find('SearchField')).toHaveLength(1);
  });

  it('renders the input text by prop SearchTerm', () => {
    const wrapper = mount(<SearchField searchTerm={'Harry Potter'} />);
    const inputText = wrapper.find('input').instance().value;

    expect(inputText).toBe('Harry Potter');
  });
});
