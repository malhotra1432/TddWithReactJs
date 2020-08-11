import React from 'react';
import {render} from '@testing-library/react';
import Header from '../header/Header';
import ReactDOM from "react-dom";
import App from "../../containers/App";

describe("Header", () => {
    it('should render Header component', function () {
        const div = document.createElement("div");
        ReactDOM.render(<Header/>, div);
    });
});
