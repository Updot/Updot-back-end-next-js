import React from "react";

interface Props {
  mastHeadTitle: string;
  mastHeadSubtitle: string;
}
const MastHead: React.FC = (props: Props) => {
  const { mastHeadTitle, mastHeadSubtitle } = props;
  return (
    <div className="h-screen text-black dark:text-white relative">
      <div className="px-14 md:px-0 flex items-center justify-center h-full  w-full">
        <h1 className="mh-tle text-6xl md:text-5xl font-bold">
          {mastHeadTitle}
        </h1>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
        <span className="sw_sc text-sm font-medium hidden md:block">
          Scroll
        </span>
        <span className="sw_sc text-sm font-medium block md:hidden">Swipe</span>
      </div>
    </div>
  );
};

export default MastHead;
