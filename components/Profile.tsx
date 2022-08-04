import type { NextPage } from "next";
import Image from "next/image";

const Profile: NextPage = () => {
  return <div className="mt-3 flex">
    <Image src="/me.jpeg" alt="profilePicture" width="120" height="120" layout="intrinsic" className="rounded-full" />
    <div className="flex flex-col ml-2">
        <div className="text-2xl font-bold">Clément Chalopin</div>
        <div>Software developer</div>
        <div>France 🇫🇷</div>
    </div>
  </div>;
};

export default Profile;

