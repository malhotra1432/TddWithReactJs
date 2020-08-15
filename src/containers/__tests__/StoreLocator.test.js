import React from 'react';
import { shallow } from 'enzyme';
import StoreLocator from '../storeLocator/StoreLocator';

describe('storeLocator', () => {
  let mountedStoreLocator;
  beforeEach(() => {
    mountedStoreLocator = shallow(<StoreLocator />);
  });

  it('should render Store Locator component', () => {
    shallow(<StoreLocator />);
  });

  it('should render Header component', () => {
    const headers = mountedStoreLocator.find('Header');
    expect(headers.length).toBe(1);
  });

  it('should render Button component', () => {
    const buttons = mountedStoreLocator.find('Button');
    expect(buttons.length).toBe(3);
  });

  it('should render Map component', () => {
    const maps = mountedStoreLocator.find('Map');
    expect(maps.length).toBe(1);
  });
});

describe('chooseMap', () => {
  it('should update this.state.currentLocation passed to it', () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
    let mockEvent = { target: { value: 'testland' } };
    mountedStoreLocator.instance().chooseMap(mockEvent);
    expect(mountedStoreLocator.instance().state.currentMap).toBe(
      'testland.png'
    );
  });
});
