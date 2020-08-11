import React from 'react';
import {shallow} from "enzyme";
import StoreLocator from '../storeLocator/StoreLocator';

describe("storeLocator", () => {
    it('should render Store Locator component',  () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
    });
});
