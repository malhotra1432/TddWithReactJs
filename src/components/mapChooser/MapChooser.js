import React from 'react';

function MapChooser(locationName) {
  if (!locationName) {
    return 'default' + '.png';
  } else {
    return locationName + '.png';
  }
}

export default MapChooser;
