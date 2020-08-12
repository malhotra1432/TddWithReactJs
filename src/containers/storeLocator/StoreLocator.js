import React, {Component} from "react";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import Map from "../../components/Map/Map";

class StoreLocator extends Component {
    render() {
        return (
            <div className="storeLocator">
                <Header/>
                <div>
                    <Button/>
                    <Button/>
                </div>
                <Map/>
            </div>
        )
    }
}

export default StoreLocator;
