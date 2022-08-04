import { ReactElement } from "react";

type ItemProps = {
  name: string;
  icon: ReactElement;
};

const StackIcon = (props: ItemProps) => {
  return (
    <div className="flex items-center m-2 ml-0">
      {props.icon}
      <div className="ml-2">{props.name}</div>
    </div>
  );
};

export default StackIcon;
