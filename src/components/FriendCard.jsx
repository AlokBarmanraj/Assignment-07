import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendCard = ({ friend }) => {
  const { id, picture, name, days_since_contact, tags, status } = friend;

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
    <Link href={`/friend/${id}`}>
      <div className="bg-white border border-gray-200 p-8 rounded-xl text-center space-y-1">
        <div>
          <Image
            src={picture}
            alt="friend image"
            width={80}
            height={80}
            className="rounded-full items-center mx-auto"
          ></Image>
        </div>
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-[#64748B]">{days_since_contact}</p>
        <div className="flex justify-center gap-2">
          {tags.map((tag, index) => (
            <p key={index} className="bg-[#CBFADB] px-2 rounded-full font-bold">
              {tag}
            </p>
          ))}
        </div>
        <p
          className={`mt-2 inline-block px-3 py-1 rounded-full text-sm ${getStatusBgColor(status)}`}
        >
          {status}
        </p>
      </div>
    </Link>
  );
};

export default FriendCard;
