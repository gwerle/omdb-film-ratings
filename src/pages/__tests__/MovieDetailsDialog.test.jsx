import React from 'react';
import MovieDetailsDialog from '../../components/Dialog/MovieDetailsDialog';
import { shallow } from 'enzyme';
import { getByOrderOfThePhoenix } from '../__mocks__/GetByImdbIDMock';

describe('<MovieDetailsDialog />', () => {
  it('renders all the required data', () => {
    const component = shallow(<MovieDetailsDialog filmDetails={getByOrderOfThePhoenix} isOpen={true} closeDialog={() => {}} />);
    expect(component.find('div')).toHaveLength(2);
  });
})
;
