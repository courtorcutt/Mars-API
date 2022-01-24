import React, { Component } from "react";
import { Header, Button } from "semantic-ui-react";

// DatePicker requires moment.js
import moment from "moment";

// the NavBar will import the date button and datepicker components
import DateInput from "./DateInput.js";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className = "navbar">
              <Header as="h1" id="start-title" onClick={() => 
                this.props.handleChange(moment())}>
                HOME
              </Header>
              <DateInput
                photo={this.props.photo}
                setPhoto={this.props.setPhoto}
                date={this.props.date}
                handleClick={this.props.handleClick}
                handleChange={this.props.handleChange}
              />
              {this.props.viewingFavorites ? (
                <Button id="favourite-button">Sort Favorites by Date</Button>
              ) : (
                <Button id="favourite-button" onClick={this.props.viewFavorites}>View Favorites</Button>
              )}
        </div>
      </React.Fragment>
    );
  }
}