import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';


export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // add missing code
    this.props.addRestaurant(this.state)
  };



  render() {
      return(
        <form onSubmit={this.handleOnSubmit}>
          <p>
            <input
              type="text"
              onChange={this.handleOnNameChange}
              id="name"
              placeholder="restaurant name"
              value={this.state.name} />
          </p>
          <p>
            <input
              type="text"
              onChange={this.handleOnLocationChange}
              id="location"
              placeholder="location"
              value={this.state.location} />
          </p>
          <input type="submit" />
        </form>
      );
    }
  };


  const mapDispatchToProps = dispatch => ({
    addRestaurant: restaurant => dispatch( addRestaurant(restaurant) )
  })


//connect this component by wrapping RestaurantInput below
export default connect(null, mapDispatchToProps)(RestaurantInput);
