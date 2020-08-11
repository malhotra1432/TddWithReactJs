import React from 'react';
import {render} from '@testing-library/react';
import MapChooser from '../mapChooser/MapChooser';
import ReactDOM from "react-dom";
import App from "../../containers/App";

describe("MapChooser", () => {

    describe("MapChooser", () => {
        it('should render MapChooser component', function () {
            const div = document.createElement("div");
            ReactDOM.render(<MapChooser/>, div);
        });
    });

    it('should return an image file based on input given', () => {
        let expected = "portland.png";
        let actual = MapChooser("portland");
        expect(actual).toEqual(expected);
    });

    it('should return a default image file when no input given', () => {
        let expected = "default.png";
        let actual = MapChooser("default");
        expect(actual).toEqual(expected);
    });

});
