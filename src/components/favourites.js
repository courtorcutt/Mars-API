import React from "react";
import { Card, Image, Button } from "semantic-ui-react";

const FavoriteCard = props => (
  <Card id="card-style">
    <Card.Content>
        <div className="card-size">
            <Image id="card-size" src={props.photo.hdurl} />
            <div id="card-white-style">
              <Card.Header>{props.photo.title}</Card.Header>
              <Card.Header>{props.photo.date}</Card.Header>
            </div>
        </div>
      </Card.Content>
    <Card.Content extra>
      <div className="two-button">
        <Button
          basic
          color="green"
          onClick={() => props.viewPhoto(props.photo)}
        >
          View Photo
        </Button>
        <Button
          basic
          color="red"
          onClick={() => props.removeFromFavorites(props.photo)}
        >
          Remove
        </Button>
      </div>
    </Card.Content>
  </Card>
);

export default FavoriteCard;
