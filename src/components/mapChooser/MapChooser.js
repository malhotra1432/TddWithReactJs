import React from "react";
import {render} from "react-dom";

function MapChooser(locationName) {
    if (!locationName) {
        let imageName = "default" + ".png";
        return imageName;
    } else {
        let imageName = locationName + ".png";
        return imageName;
    }
}

export default MapChooser;
