import type { NextPage } from "next";
import {
  SiAmazonaws,
  SiGo,
  SiGraphql,
  SiJava,
  SiKotlin,
  SiKubernetes,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRust,
  SiSolidity,
  SiTailwindcss,
  SiWeb3Dotjs,
} from "react-icons/si";
import StackIcon from "./StackIcon";

const Stacks: NextPage = () => {
  return (
    <div>
      <div className="text-xl font-bold">Favorite Stack</div>
      <div className="flex flex-wrap">
        <StackIcon icon={<SiReact size={20} />} name="React" />
        <StackIcon icon={<SiNextdotjs size={20} />} name="Nextjs" />
        <StackIcon icon={<SiNodedotjs size={20} />} name="Nodejs" />
        <StackIcon icon={<SiRust size={20} />} name="Rust" />
        <StackIcon icon={<SiPostgresql size={20} />} name="Sql" />
        <StackIcon icon={<SiGo size={20} />} name="Go" />
        <StackIcon icon={<SiAmazonaws size={20} />} name="AWS" />
        <StackIcon icon={<SiKubernetes size={20} />} name="k8s" />
        <StackIcon icon={<SiTailwindcss size={20} />} name="Tailwind" />
        <StackIcon icon={<SiGraphql size={20} />} name="Graphql" />
        <StackIcon icon={<SiKotlin size={20} />} name="Kotlin" />
        <StackIcon icon={<SiJava size={20} />} name="Java" />
        <StackIcon icon={<SiPython size={20} />} name="Python" />
        <StackIcon icon={<SiWeb3Dotjs size={20} />} name="Web3" />
        <StackIcon icon={<SiSolidity size={20} />} name="Solidity" />
      </div>
    </div>
  );
};

export default Stacks;
