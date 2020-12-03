import React from "react";
import TuneIcon from "@material-ui/icons/Tune";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";

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
    </div>
  );
}

export default SearchPage;
