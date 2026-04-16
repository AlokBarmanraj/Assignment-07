import Banner from "@/components/Banner";
import CountCard from "@/components/CountCard";
import FriendsData from "@/app/friend/FriendsData";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <CountCard></CountCard>
      <FriendsData></FriendsData>
    </div>
  );
}
