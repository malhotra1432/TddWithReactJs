import React, { Component } from 'react';
import './map.css';

class Map extends Component {
  render() {
    let imagePath;
    if (this.props.imageName) {
      imagePath = 'images/' + this.props.imageName;
    } else {
      imagePath = 'none.png';
    }
    return (
      <div className="mapClass">
        <img src={imagePath} alt={this.props.location} />
      </div>
    );
  }
}

export default Map;
