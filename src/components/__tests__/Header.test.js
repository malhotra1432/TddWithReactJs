import React from 'react';
import Header from '../header/Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  let mountedHeader;
  beforeEach(() => {
    mountedHeader = shallow(<Header />);
  });

  it('should render Header component', () => {
    shallow(<Header />);
  });

  it('should set logo image src correctly', () => {
    const logoImg = mountedHeader.find('img');
    expect(logoImg.getElement(0).props.src).toEqual(
      'images/wired_brain_coffee.png'
    );
  });
});
