import { Avatar } from "@material-ui/core";
import React from "react";
import "./VideoCard.css";

function VideoCard({ image, title, channeImage, views, timestamp, channel }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt="" />
      <div className="videoCard__info">
        <Avatar className="videoCard__avatar" src={channeImage}></Avatar>
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
