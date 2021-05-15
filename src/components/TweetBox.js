import React, { useState } from "react";
import {
  ImageIcon,
  GIFIcon,
  PollIcon,
  EmojiIcon,
  ScheduleIcon,
} from "../icons/Icon";
import db from "../Firebase";
import firebase from "firebase";
const TweetBox = () => {
  const [content, setContent] = useState("");
  const sendTweet = () => {
    if (content !== "") {
      db.collection("feed").add({
        displayName: "muhammet yavuz",
        username: "@Muhammet34_Yvz",
        content,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        avatar:
          "https://pbs.twimg.com/profile_images/1356722137264971784/gaaLAMPD_400x400.jpg",
        image:
          "https://pbs.twimg.com/profile_images/1356722137264971784/gaaLAMPD_400x400.jpg",
      });
      setContent();
    }
  };
  return (
    <div className="flex flex-col flex-1 mt-2 px-2">
      <textarea
        className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden bg-transparent"
        placeholder="What's happening"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <div className="flex justify-between items-center">
        <div className="flex -ml-3">
          <div className="flex items-center justify-center space-x-5 cursor-pointer rounded-full hover:text-primary-dark">
            <ImageIcon className="w-6 h-6 text-primary-base hover:bg-gray-200 rounded-full" />
            <GIFIcon className="w-6 h-6 text-primary-base" />
            <PollIcon className="w-6 h-6 text-primary-base" />
            <PollIcon className="w-6 h-6 text-primary-base" />
            <EmojiIcon className="w-6 h-6 text-primary-base" />
            <ScheduleIcon className="w-6 h-6 text-primary-base" />
          </div>
        </div>

        <button
          className="flex items-center justify-center bg-primary-base text-white rounded-full px-4 py-4 w-24 h-12 outline-none"
          onClick={sendTweet}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetBox;
