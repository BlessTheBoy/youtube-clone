import React from "react";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutline";
import "./VideoRow.css";

function VideoRow({
  views,
  description,
  timestamp,
  channel,
  channelImage,
  title,
  image,
}) {
  return (
    <div className="videoRow">
      <img className="videoRow__image" src={image} alt="" />
      <div className="videoRow__text">
        <div className="top">
          <h3>{title}</h3>
          <p>
            {views} views . {timestamp}
          </p>
        </div>
        <div className="middle">
          <Avatar className="videoRow__logo" src={channelImage}>
            {channel[0]}
          </Avatar>
          <p>
            {channel + "\t\t"} <VerifiedIcon className="verified" />
          </p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
