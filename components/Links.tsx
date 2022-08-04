import type { NextPage } from "next";

const links = [
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/cl%C3%A9ment-chalopin-355305178/",
    color: "#0a66c2",
  },
  { title: "Github", url: "https://github.com/cchalop1/", color: "#454545" },
  { title: "Resume", url: "https://drive.google.com/file/d/1X9-fWoXeATwYX1pRTHRg2HrCMqaeuDPf/view?usp=sharing", color: "#700700" },
];

const Links: NextPage = () => {
  return (
    <div className="flex justify-evenly">
      {links.map((l, idx) => (
        <a
          key={idx}
          target="_blank"
          href={l.url}
          rel="noreferrer"
          className="font-bold underline"
          style={{ color: l.color }}
        >
          {l.title}
        </a>
      ))}
    </div>
  );
};

export default Links;
