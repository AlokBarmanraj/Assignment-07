import React from "react";

const FriendDetails = async ({ params }) => {
  const { friendId } = await params;
  const res = await fetch(
    "https://gist.githubusercontent.com/AlokBarmanraj/34f69c6eebc425dadf6fc914f9a67acc/raw/67b9259f5906a667e5a41a05c2347dd7855cffea/friends.json",
  );
  const data = await res.json();
  const friend = data.find((item) => item.id == friendId);
  const { name } = friend;
  return (
    <div>
      <h1>hello {name}</h1>
    </div>
  );
};

export default FriendDetails;
