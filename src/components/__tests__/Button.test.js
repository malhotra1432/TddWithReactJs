import React from 'react';
import { shallow } from 'enzyme';
import Button from '../button/Button';

describe('Button', () => {
  let mountedButton;
  beforeEach(() => {
    mountedButton = shallow(<Button />);
  });

  it('should render Store Locator component', () => {
    let mountedButton = shallow(<Button />);
  });

  it('should render a button', () => {
    const button = mountedButton.find('button');
    expect(button.length).toBe(1);
  });
});

describe('When a location is passed to it', () => {
  let mountedButton;
  let props;

  beforeEach(() => {
    props = {
      location: 'location1',
    };
    mountedButton = shallow(<Button {...props} />);
  });
});
