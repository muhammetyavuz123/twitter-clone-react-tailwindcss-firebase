import React from "react";
import { ReplyIcon, ReTweetIcon, LikeIcon, ShareIcon } from "../icons/Icon";

export const FeedItem = ({
  avatar,
  content,
  displayName,
  timestamp,
  username,
  image,
}) => {
  return (
    <article className="flex space-x-3 border-gray-extraLight px-4 py-3 cursor-pointer ">
      <img src={avatar} alt="avatar" className="w-11 h-11 rounded-full" />
      <div className="flex-1">
        <div className="flex items-center text-sm">
          <h4 className="font-bold">{displayName}</h4>
          <span className="text-gray-dark ml-2">{username}</span>
          <div className="mx-2 text-gray-dark w-1 h-1 border rounded-full"></div>
          <span className="text-gray-dark">
            {timestamp?.toDate().toLocaleTimeString("tr-TR")}
          </span>
        </div>
        <p className="mt-2 text-gray-900 text-sm">{content}</p>
        {image && (
          <img src={image} alt="imag" className="my-2 rounded-xl max-h-96" />
        )}
        <ul className=" -ml-1 mt-3 flex justify-between max-w-md">
          <li className=" flex group items-center space-x-2 text-gray-dark text-sm">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
              <ReplyIcon className="w-5 h-5 group-hover:text-gray-base" />
            </div>
            <span className="group-hover:text-primary-base">7</span>
          </li>

          <li className=" flex group items-center space-x-2 text-gray-dark text-sm">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-200">
              <ReTweetIcon className="w-5 h-5 group-hover:text-green-dark" />
            </div>
            <span className="group-hover:text-green-400">7</span>
          </li>

          <li className=" flex group items-center space-x-2 text-gray-dark text-sm">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-pink-200">
              <LikeIcon className="w-5 h-5 group-hover:text-pink-400" />
            </div>
            <span className="group-hover:text-pink-400">7</span>
          </li>

          <li className=" flex group items-center space-x-2 text-gray-dark text-sm">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-pink-200">
              <ShareIcon className="w-5 h-5 group-hover:text-pink-400" />
            </div>
          </li>
        </ul>
      </div>
    </article>
  );
};
