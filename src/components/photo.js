import React from "react";
import { Image, Header, Icon } from "semantic-ui-react";

const Photo = props => (
  <React.Fragment>
        <Header as="h2" id="photo-header">
          {props.photo.title}
          {props.favorites.includes(props.photo) ? (
           <div className=""
              onClick={() => props.addtoFavorites(props.photo)}
            ><p>Saved &hearts; </p></div>
          ) : (
              <div className=""
              onClick={() => props.addtoFavorites(props.photo)}
            ><p>Click here to &#9825; this photo!</p></div>
          )}
        </Header>
      <Image id="photo-size" alt={props.photo.title} src={props.photo.hdurl} centered />
    <p id="explaination-photo">{props.photo.explanation}</p>
  </React.Fragment>
);

export default Photo;
