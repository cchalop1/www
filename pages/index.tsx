import type { NextPage } from "next";
import Contact from "../components/Contact";
import Description from "../components/Description";
import Links from "../components/Links";
import Profile from "../components/Profile";
import Stacks from "../components/Stacks";

const Home: NextPage = () => {
  return (
    <div className="md:w-2/5 m-0 md:m-auto p-2">
      <Profile />
      <Links />
      <Description />
      <Stacks />
      <Contact />
    </div>
  );
};

export default Home;
