import React from 'react';
import {render} from '@testing-library/react';
import App from '../App';
import ReactDOM from "react-dom";
import StoreLocator from "../../components/storeLocator/StoreLocator";

describe("App", () => {
    it('should render APP component', function () {
        const div = document.createElement("div");
        ReactDOM.render(<App/>, div);
    });
});
