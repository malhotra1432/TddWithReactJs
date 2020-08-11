import React from 'react';
import App from '../App';
import {shallow} from "enzyme";

describe("App", () => {
    it('should render APP component', function () {
        let mountedApp = shallow(<App />);
    });
});
