import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import Map from '../../components/Map/Map';
import MapChooser from '../../components/mapChooser/MapChooser';

class StoreLocator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMap: 'none.png',
    };
    this.shops = [
      {
        location: 'Portland',
        address: '123 Portland Drive',
      },
      {
        location: 'Astoria',
        address: '123 Astoria Drive',
      },
      {
        location: '',
        address: '',
      },
    ];
    this.chooseMap = this.chooseMap.bind(this);
  }
  chooseMap(e) {
    this.setState({ currentMap: MapChooser(e.target.value) });
  }
  render() {
    let storButtons = this.shops.map((shop, id) => {
      return (
        <Button
          key={id}
          location={shop.location}
          handleClick={this.chooseMap}
        />
      );
    });
    return (
      <div className="storeLocator">
        <Header />
        <div>{storButtons}</div>
        <Map imageName={this.state.currentMap} location={this.props.location} />
      </div>
    );
  }
}

export default StoreLocator;
