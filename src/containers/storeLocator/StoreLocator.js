import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import Map from '../../components/Map/Map';
import MapChooser from '../../components/mapChooser/MapChooser';
import axios from 'axios';
import adapter from 'axios/lib/adapters/http';

class StoreLocator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMap: 'none.png',
      shops: [],
    };
    this.chooseMap = this.chooseMap.bind(this);
  }

  async componentDidMount() {
    let response = await axios.get('http://localhost:3000/data/shops.json', {
      adapter,
    });
    this.setState({
      shops: response.data.shops,
    });
  }

  chooseMap(e) {
    this.setState({ currentMap: MapChooser(e.target.value) });
  }
  render() {
    let storeButtons = this.state.shops.map((shop, id) => {
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
        <div>{storeButtons}</div>
        <Map imageName={this.state.currentMap} location={this.props.location} />
      </div>
    );
  }
}

export default StoreLocator;
