import React from "react";
import { FeedItem } from "./FeedItem";
export const FeedList = ({ tweets }) => {
  return (
    <div>
      {tweets.map((tweet, index) => (
        <FeedItem {...tweet} key={index} />
      ))}
    </div>
  );
};
