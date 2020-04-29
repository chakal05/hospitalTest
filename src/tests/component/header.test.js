import React from 'react';
import {shallow} from '../../setupTests';
import Header from '../../components/header';

test('should render header component', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('.link')).to.have.lengthOf(1);
});
