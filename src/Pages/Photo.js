import React from "react";
import { Segment, Image, Header, Icon, Menu } from "semantic-ui-react";

const Photo = props => (
  <React.Fragment>
        <Header as="h2" id="photo-header"textAlign="center">
          {props.photo.title}
          {props.favorites.includes(props.photo) ? (
            <Icon
              name="heart"
              color="purple"
              onClick={() => props.removeFromFavorites(props.photo)}
            />
          ) : (
            <Icon
              name="heart outline"
              color="grey"
              // floated="right"
              onClick={() => props.addtoFavorites(props.photo)}
            />
          )}
        </Header>
      <Image alt={props.photo.title} src={props.photo.hdurl} centered />
    <p id="explaination-photo">{props.photo.explanation}</p>
  </React.Fragment>
);

export default Photo;
