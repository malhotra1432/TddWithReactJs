import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('App', () => {
  let mountedApp;
  beforeEach(() => {
    mountedApp = shallow(<App />);
  });

  it('should render APP component', () => {
    shallow(<App />);
  });

  it('should render APP component', () => {
    const locators = mountedApp.find('StoreLocator');
    expect(locators.length).toBe(1);
  });
});
