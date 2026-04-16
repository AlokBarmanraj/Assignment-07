import Image from "next/image";
import React from "react";
import { FaArchive } from "react-icons/fa";
import { HiMiniBellSnooze } from "react-icons/hi2";
import { IoMdText } from "react-icons/io";
import { IoCall, IoVideocam } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";

const FriendDetails = async ({ params }) => {
  const { friendId } = await params;
  const res = await fetch(
    "https://gist.githubusercontent.com/AlokBarmanraj/34f69c6eebc425dadf6fc914f9a67acc/raw/67b9259f5906a667e5a41a05c2347dd7855cffea/friends.json",
  );
  const data = await res.json();
  const friend = data.find((item) => item.id == friendId);
  const {
    picture,
    name,
    days_since_contact,
    tags,
    status,
    bio,
    email,
    goal,
    next_due_date,
  } = friend;

  const getStatusBgColor = (status) => {
    if (status === "overdue") {
      return "bg-[#EF4444] text-white";
    } else if (status === "almost due") {
      return "bg-[#EFAD44] text-white";
    } else if (status === "on-track") {
      return "bg-[#244D3F] text-white";
    }
  };
  return (
    <div>
      <div className="grid grid-cols-5 grid-rows-7 gap-5 w-9/12 mx-auto mt-20">
        <div className="row-span-4 col-span-2 bg-white border border-gray-200 shadow-2xl rounded-lg p-8 text-center space-y-3 flex flex-col items-center justify-center">
          <Image
            src={picture}
            alt="friend image"
            width={100}
            height={100}
            className="rounded-full mx-auto block"
          ></Image>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p
            className={`mt-2 inline-block px-3 py-1 rounded-full text-sm ${getStatusBgColor(status)}`}
          >
            {status}
          </p>
          <div className="flex justify-center gap-2">
            {tags.map((tag, index) => (
              <p
                key={index}
                className="bg-[#CBFADB] px-2 rounded-full font-bold"
              >
                {tag}
              </p>
            ))}
          </div>
          <p className="font-bold text-[#64748B] italic">{`"${bio}"`}</p>
          <p className="text-[#64748B] font-bold">Email: {email}</p>
        </div>
        <div className="row-span-2 col-span-1 bg-white border border-gray-200 shadow-2xl rounded-lg flex flex-col justify-center items-center text-center space-y-2">
          <h2 className="text-[#244D3F] font-bold text-4xl">
            {days_since_contact}
          </h2>
          <p className="font-bold text-xl text-[#64748B]">Days Since Contact</p>
        </div>
        <div className="row-span-2 col-span-1 bg-white border border-gray-200 shadow-2xl rounded-lg flex flex-col justify-center items-center text-center space-y-2">
          <h2 className="text-[#244D3F] font-bold text-4xl">{goal}</h2>
          <p className="font-bold text-xl text-[#64748B]">Goal (Days)</p>
        </div>
        <div className="row-span-2 col-span-1 bg-white border border-gray-200 shadow-2xl rounded-lg flex flex-col justify-center items-center text-center space-y-2">
          <h2 className="text-[#244D3F] font-bold text-4xl">{next_due_date}</h2>
          <p className="font-bold text-xl text-[#64748B]">Next Due</p>
        </div>
        <div className="row-span-2 col-span-3 bg-white border border-gray-200 shadow-2xl rounded-lg p-8 text-center space-y-6">
          <div className="flex justify-between">
            <p className="text-[#244D3F] font-bold text-3xl">
              Relationship Goal
            </p>
            <button className="btn">Edit</button>
          </div>
          <p className="flex">
            <span className="text-2xl text-[#64748B]">Connect every</span>
            <span className="font-bold text-2xl">{goal} days</span>
          </p>
        </div>
        <div className="row-span-1 col-span-2 bg-white border border-gray-200 shadow-2xl rounded-lg p-8 text-center space-y-2">
          <h2 className="font-bold text-2xl flex items-center justify-center gap-2">
            <HiMiniBellSnooze />
            Snooze 2 weeks
          </h2>
        </div>
        <div className="row-span-1 col-span-2 bg-white border border-gray-200 shadow-2xl rounded-lg p-8 text-center space-y-2 order-7">
          <h2 className="font-bold text-2xl flex items-center justify-center gap-2">
            <FaArchive />
            Archive
          </h2>
        </div>
        <div className="row-span-1 col-span-2 bg-white border border-gray-200 shadow-2xl rounded-lg p-8 text-center space-y-2 order-8">
          <h2 className="font-bold text-red-500 text-2xl flex items-center justify-center gap-2">
            <RiDeleteBin5Line />
            Delete
          </h2>
        </div>
        <div className="row-span-3 col-span-3 bg-white border border-gray-200 shadow-2xl rounded-lg p-8 text-center space-y-2">
          <h2 className="text-2xl text-left text-[#244D3F]">Quick Check-In</h2>
          <div className="grid grid-cols-3 gap-3 mt-16">
            <div className="bg-gray-100 border border-gray-200 shadow-2xl rounded-lg p-8 text-center ">
              <h2 className="font-bold text-2xl flex flex-col items-center justify-center gap-2">
                <IoCall />
                Call
              </h2>
            </div>
            <div className="bg-gray-100 border border-gray-200 shadow-2xl rounded-lg p-8 text-center ">
              <h2 className="font-bold text-2xl flex flex-col items-center justify-center gap-2">
                <IoMdText />
                Text
              </h2>
            </div>
            <div className="bg-gray-100 border border-gray-200 shadow-2xl rounded-lg p-8 text-center ">
              <h2 className="font-bold text-2xl flex flex-col items-center justify-center gap-2">
                <IoVideocam />
                Video
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;











