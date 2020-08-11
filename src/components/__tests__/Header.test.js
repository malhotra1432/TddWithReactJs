import React from 'react';
import Header from '../header/Header';
import {shallow} from "enzyme";

describe("Header", () => {
    it('should render Header component', function () {
        let mountedHeader = shallow(<Header />);
    });
});
