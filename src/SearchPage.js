import React from "react";
import TuneIcon from "@material-ui/icons/Tune";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AAUvwnghXj_FjRZ9OHRbE2hRm236dQeXjJqr0dqb_WOnd7s=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Vevo"
        verified
        subs="19.8M"
        noOfVideos="1,436"
        description="Vevo on Youtube - Official Music Videos, Live Performances, Interviews and more..."
      />
      <hr />

      <VideoRow
        views="205K"
        timestamp="1 week ago"
        title="Vevo - Hot This Week: November 20, 2020 (The Biggest New Music Videos)"
        channel="Vevo"
        description="Hottest music videos of the week. Find out about all the latest stuff, including new vids by Ariana Grande, Shawn Mendes & Justin..."
        channelImage="https://yt3.ggpht.com/a-/AOh14GjeWD-qT80y8imEj2qCXkQTPxd-2FswO8TA5Q=s68-c-k-c0x00ffffff-no-rj-mo"
        image="https://img.youtube.com/vi/7Qyrojw9Kpc/maxresdefault.jpg"
      />
    </div>
  );
}

export default SearchPage;
