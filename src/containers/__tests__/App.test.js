import React from 'react';
import App from '../App';
import {shallow} from "enzyme";
import StoreLocator from "../storeLocator/StoreLocator";

describe("App", () => {
    let mountedApp;
    beforeEach(() => {
        mountedApp = shallow(<App />);
    })

    it('should render APP component',  () => {
        let mountedApp = shallow(<App />);
    });

    it('should render APP component',  () => {
        let mountedApp = shallow(<App />);
        const locators = mountedApp.find('StoreLocator');
        expect(locators.length).toBe(1);
    });
});
