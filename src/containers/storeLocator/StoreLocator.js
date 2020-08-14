import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import Map from '../../components/Map/Map';

class StoreLocator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMap: 'none.jpg',
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
  }
  render() {
    let storButtons = this.shops.map((shop, id) => {
      return <Button key={id} location={shop.location} />;
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
