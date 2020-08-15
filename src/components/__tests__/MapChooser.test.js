import React from 'react';
import MapChooser from '../mapChooser/MapChooser';
import { shallow } from 'enzyme';

describe('MapChooser', () => {
  it('should render MapChooser component', function () {
    shallow(<MapChooser />);
  });

  it('should return an image file based on input given', () => {
    let expected = 'portland.png';
    let actual = MapChooser('portland');
    expect(actual).toEqual(expected);
  });

  it('should return a default image file when no input given', () => {
    let expected = 'default.png';
    let actual = MapChooser('default');
    expect(actual).toEqual(expected);
  });
});
