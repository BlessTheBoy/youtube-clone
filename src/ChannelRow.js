import { Avatar } from "@material-ui/core";
import React from "react";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutline";
import "./ChannelRow.css";

function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" src={image}>
        {channel[0]}
      </Avatar>
      <div className="channelRow__text">
        <h4>
          {channel + "   "} {verified && <VerifiedIcon className="verified" />}
        </h4>
        <p>
          {subs} subscribers . {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
