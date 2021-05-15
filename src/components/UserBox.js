import React from "react";

const UserBox = () => {
  return (
    <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-2 transition-colors duration-200 space-x-1">
      <img
        src="https://pbs.twimg.com/profile_images/1356722137264971784/gaaLAMPD_400x400.jpg"
        alt="alt"
        className="w-11 h-11 rounded-full"
      />
      <div className="flex flex-col">
        <span className="font-bold text-md text-black">Muhammet Yavuz...</span>
        <span className=" text-sm text-gray-dark">
          Muhametyavuz@hotmail.com
        </span>
      </div>
      <div className="flex space-x-1 ">
        <div className="w-1 h-1 bg-gray-500 rounded-full" />
        <div className="w-1 h-1 bg-gray-500 rounded-full" />
        <div className="w-1 h-1 bg-gray-500 rounded-full" />
      </div>
    </div>
  );
};
export default UserBox;
