import React from 'react';
import Dialog from '../../components/Dialog/Dialog';
import { shallow } from 'enzyme';

describe('<Dialog />', () => {
  it('renders all the required div to show a dialog', () => {
    const component = shallow(<Dialog isOpen={true} closeDialog={() => {}}><div>isso é um teste</div></Dialog>);
    expect(component.find('div')).toHaveLength(3);
  });
})
;
