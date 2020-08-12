import React from 'react';
import {shallow} from "enzyme";
import Map from '../Map/Map';

describe("Map", () => {
    let mountedMap;
    beforeEach(() => {
       mountedMap = shallow(<Map/>)
    });

    it('should render Map component',  () => {
        let mountedMap = shallow(<Map />);
    });

    it('should contain an image',  () => {
        const img = mountedMap.find('img');
        expect(img.length).toBe(1);
    });

    it('should contain default image if no parameter passed',  () => {
        const defaultImg = mountedMap.find('img');
        expect(defaultImg.getElement(0).props.src).toEqual('images/none.jpg')
    });
});
