import { useMemo } from "react";

const DomainTopic = ({
  brick,
  general,
  english,
  propAlignSelf,
  onTitleTextNodeClick,
}) => {
  const generalEnglishStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className=" flex flex-col items-center justify-start pt-10 pb-[33px] pr-[76px] pl-[75px] box-border relative gap-[28px] text-center text-13xl text-black font-inter">
      <div
        className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-white shadow-[10px_4px_4px_rgba(0,_0,_0,_0.25)] cursor-pointer z-[1]"
        onClick={onTitleTextNodeClick}
      />
      <img
        className="w-[126px] h-[126px] relative object-cover z-[2]"
        loading="eager"
        alt=""
        src={(brick)}
      />
      <h1
        className="m-0 self-stretch h-[78px] relative text-inherit font-semibold font-inherit inline-block z-[2] mq750:text-7xl mq450:text-lgi"
        style={generalEnglishStyle}
      >
        <p className="m-0">{general}</p>
        <p className="m-0">{english}</p>
      </h1>
    </div>
  );
};

export default DomainTopic;