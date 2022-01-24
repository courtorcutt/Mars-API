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
        <div className="two-button">
        <Button id="change-button"
          onClick={() => props.viewPhoto(props.photo)}
        >
          View Photo
        </Button>
        <Button id="change-button"
          onClick={() => props.removeFromFavorites(props.photo)}
        >
          Remove
        </Button>
      </div>
      </Card.Content>
  </Card>
);

export default FavoriteCard;
