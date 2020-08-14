import React from 'react';
import { shallow } from 'enzyme';
import Map from '../Map/Map';

describe('Map', () => {
  let mountedMap;
  let props;
  beforeEach(() => {
    props = {
      location: undefined,
      imageName: 'testmap.jpg',
    };
    mountedMap = shallow(<Map {...props} />);
  });

  it('should render Map component', () => {
    let mountedMap = shallow(<Map />);
  });

  it('should contain an image', () => {
    const img = mountedMap.find('img');
    expect(img.length).toBe(1);
  });

  it('should display default image if no parameter passed', () => {
    let defaultMap = shallow(<Map />);
    const defaultImg = defaultMap.find('img');
    expect(defaultImg.length).toBe(1);
  });

  it('should display map image name passed to it', function () {
    const testImg = mountedMap.find('img');
    expect(testImg.getElement(0).props.src).toEqual('images/testmap.jpg');
  });
});
