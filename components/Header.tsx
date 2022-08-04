import type { NextPage } from "next";

const Header: NextPage = () => {
  return <div className="flex border-b h-12 justify-between items-center">
    <div className="text-xl font-bold">Hello !</div>
    <button>Contact me</button>
  </div>;
};

export default Header;
