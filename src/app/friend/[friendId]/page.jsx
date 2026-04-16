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
    <div className="w-full px-5 lg:w-9/12 mx-auto mt-10 lg:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:grid-rows-7 gap-5">
        <div className="lg:row-span-4 lg:col-span-2 bg-white border border-gray-200 shadow-2xl rounded-lg p-6 text-center flex flex-col items-center justify-center space-y-3">
          <Image
            src={picture}
            alt="friend image"
            width={100}
            height={100}
            className="rounded-full mx-auto block"
          />
          <h1 className="text-xl md:text-2xl font-bold">{name}</h1>

          <p
            className={`px-3 py-1 rounded-full text-sm ${getStatusBgColor(status)}`}
          >
            {status}
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {tags.map((tag, index) => (
              <p
                key={index}
                className="bg-[#CBFADB] px-2 rounded-full text-sm font-bold"
              >
                {tag}
              </p>
            ))}
          </div>

          <p className="text-sm md:text-base font-bold text-[#64748B] italic">
            {`"${bio}"`}
          </p>

          <p className="text-sm text-[#64748B] font-bold">Email: {email}</p>
        </div>

        <div className="lg:row-span-2 bg-white border border-gray-200 shadow-2xl rounded-lg flex flex-col justify-center items-center p-5">
          <h2 className="text-3xl md:text-4xl font-bold text-[#244D3F]">
            {days_since_contact}
          </h2>
          <p className="text-sm md:text-lg font-bold text-[#64748B] text-center">
            Days Since Contact
          </p>
        </div>

        <div className="lg:row-span-2 bg-white border border-gray-200 shadow-2xl rounded-lg flex flex-col justify-center items-center p-5">
          <h2 className="text-3xl md:text-4xl font-bold text-[#244D3F]">
            {goal}
          </h2>
          <p className="text-sm md:text-lg font-bold text-[#64748B]">
            Goal (Days)
          </p>
        </div>

        <div className="lg:row-span-2 bg-white border border-gray-200 shadow-2xl rounded-lg flex flex-col justify-center items-center p-5">
          <h2 className="text-2xl md:text-3xl font-bold text-[#244D3F] text-center">
            {next_due_date}
          </h2>
          <p className="text-sm md:text-lg font-bold text-[#64748B]">
            Next Due
          </p>
        </div>

        <div className="lg:row-span-2 lg:col-span-3 bg-white border border-gray-200 shadow-2xl rounded-lg p-6 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xl md:text-3xl font-bold text-[#244D3F]">
              Relationship Goal
            </p>
            <button className="btn btn-sm">Edit</button>
          </div>

          <p className="text-center md:text-left text-lg md:text-2xl text-[#64748B]">
            Connect every{" "}
            <span className="font-bold text-black">{goal} days</span>
          </p>
        </div>

        <div className="lg:col-span-2 bg-white border border-gray-200 shadow-2xl rounded-lg p-5 text-center">
          <h2 className="text-lg md:text-2xl font-bold flex items-center justify-center gap-2 cursor-pointer">
            <HiMiniBellSnooze />
            Snooze 2 weeks
          </h2>
        </div>

        <div className="lg:col-span-2 bg-white border border-gray-200 shadow-2xl rounded-lg p-5 text-center order-7">
          <h2 className="text-lg md:text-2xl font-bold flex items-center justify-center gap-2 cursor-pointer">
            <FaArchive />
            Archive
          </h2>
        </div>

        <div className="lg:col-span-2 bg-white border border-gray-200 shadow-2xl rounded-lg p-5 text-center order-8">
          <h2 className="text-lg md:text-2xl font-bold text-red-500 flex items-center justify-center gap-2 cursor-pointer">
            <RiDeleteBin5Line />
            Delete
          </h2>
        </div>

        <div className="lg:row-span-3 lg:col-span-3 bg-white border border-gray-200 shadow-2xl rounded-lg p-6">
          <h2 className="text-xl md:text-2xl text-[#244D3F] mb-6">
            Quick Check-In
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <h2 className="font-bold text-xl flex flex-col items-center gap-2">
                <IoCall />
                Call
              </h2>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <h2 className="font-bold text-xl flex flex-col items-center gap-2">
                <IoMdText />
                Text
              </h2>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <h2 className="font-bold text-xl flex flex-col items-center gap-2">
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
