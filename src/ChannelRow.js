import { Avatar } from "@material-ui/core";
import React from "react";
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
      <Avatar src={image}>{channel[0]}</Avatar>
      <h2>ChannelRow</h2>
    </div>
  );
}

export default ChannelRow;
