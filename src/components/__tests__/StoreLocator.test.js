import React from 'react';
import ReactDOM from 'react-dom'
import {render} from '@testing-library/react';
import StoreLocator from '../storeLocator/StoreLocator';

describe("storeLocator", () => {
    it('should render Store Locator component', function () {
        const div = document.createElement("div");
        ReactDOM.render(<StoreLocator/>, div);
    });
});
