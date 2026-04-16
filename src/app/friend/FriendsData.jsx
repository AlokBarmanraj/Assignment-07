import React from "react";
import FriendCard from "../../components/FriendCard";

const FriendsData = async () => {
  const res = await fetch("https://gist.githubusercontent.com/AlokBarmanraj/34f69c6eebc425dadf6fc914f9a67acc/raw/67b9259f5906a667e5a41a05c2347dd7855cffea/friends.json");
  const friends = await res.json();
  return (
    <div className="w-full px-3.5 lg:px-0 lg:w-9/12 mx-auto pt-10">
      <hr className="border border-gray-300" />
      <h1 className="text-4xl text-center lg:text-left lg:text-5xl font-bold pt-10">
        Your Friends
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-8">
        {/* <div className="w-full px-3.5 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-8"> */}
        {friends.map((friend) => (
          <FriendCard friend={friend} key={friend.id}></FriendCard>
        ))}
      </div>
    </div>
  );
};

export default FriendsData;
