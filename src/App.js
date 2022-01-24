import React, { Component } from "react";
import './App.css';
// import all the different pages 
import Navbar from "./pages/navbar.js";
import PhotoContainer from "./pages/photocontain.js";
import FavoritesContainer from "./pages/favouritescontain.js";

// DatePicker requires moment.js
// used in NavBar below date={this.state.date}
import moment from "moment";

// In order to choose a random photo to display a surprise date
import momentRandom from "moment-random";

// in order to fetch (this would normally be hidden)
// but for purposes of transparency in application it is shown
const API_KEY = 'iKliHzd4DwjCdUJlf9CipcrQTIHlYgGJAsyHwLBE';

class App extends Component {
  state = {
    // depending on the date chosen, the photos can change, 
    // and the favourites can change
    date: moment(), // will grab current photo moment()
    photo: "",
    favorites: [], // will be stored in an array list
    viewingFavorites: false
  };

  // fetch the nasa photo, explaination, date, title, etc.
  // set it to the current state
  // this is a lifecycle method which will automatically render API
  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
  } // use photo={this.state.photo} in PhotoContainer to render API

  // also want to set setPhoto based on the date chosen so that the
  // API is fetched for a given date in the date picker (call this.setPhoto)
  setPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`)
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
  };

  // also want the user to be able to like a photo and view it
  // later as if it was archived.
  addtoFavorites = photo => {
    this.setState({ favorites: [...this.state.favorites, photo] });
  };

  viewFavorites = () => {
    this.setState({ viewingFavorites: true });
  };

  viewPhoto = photo => {
    this.setState({
      viewingFavorites: false,
      photo: photo,
      date: moment(photo.date, "YYYY-MM-DD")
    });
  };

  // from FavouriteCard.js will appear red
  removeFromFavorites = photo => {
    let newFavorites = this.state.favorites.filter(
      favorite => favorite !== photo
    );
    this.setState({ favorites: newFavorites });
  };

  // format into a string
  formatDate = date => {
    if (date) {
      let month = date.month() + 1;
      let day = date.date();
      let year = date.year();
      return `${year}-${month}-${day}`;
    }
  };

  // from dateInput
  handleChange = date => {
    this.setState({ date: date, viewingFavorites: false });
    this.setPhoto(this.formatDate(date));
  };

  // from dateInput when the button is clicked, the 
  handleClick = () => {
    let randomDate = momentRandom(moment(), moment().year(2000));
    this.setState({ date: randomDate, viewingFavorites: false });
    // formateDate by turning into string and passing into setPhoto function
    // for API
    this.setPhoto(this.formatDate(randomDate));
  };

  render() {
    return (
      <div style={{ backgroundImage: "url(/telescope.jpg)" }}>
        <Navbar
          viewFavorites={this.viewFavorites}
          viewingFavorites={this.state.viewingFavorites}
          setPhoto={this.setPhoto}
          photo={this.state.photo}
          date={this.state.date}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
        {this.state.viewingFavorites ? (
          <FavoritesContainer
            favorites={this.state.favorites}
            viewPhoto={this.viewPhoto}
            removeFromFavorites={this.removeFromFavorites}
          />
        ) : (
          <PhotoContainer
            favorites={this.state.favorites}
            setPhoto={this.setPhoto}
            photo={this.state.photo}
            addtoFavorites={this.addtoFavorites}
            removeFromFavorites={this.removeFromFavorites}
          />
        )}
      </div>
    );
  }
}

export default App;
