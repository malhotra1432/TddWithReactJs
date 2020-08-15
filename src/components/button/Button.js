import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  render() {
    return (
      <button
        className="location-button"
        value={this.props.location}
        onClick={this.props.handleClick}
      >
        {this.props.location ? this.props.location : 'All locations'}
      </button>
    );
  }
}
export default Button;
