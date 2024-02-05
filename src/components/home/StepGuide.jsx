import { useMemo } from "react";

const StepGuide = ({
    step,
    stepHeading,
    description1,
    description2,
    propTop,
    propLeft,
  }) => {
    const componentStyle = useMemo(() => {
      return {
        top: propTop,
        left: propLeft,
        transition: "transform 0.3s ease-out",
        transformOrigin: "left top",
  
      };
    }, [propTop, propLeft]);
  

  
    return (
      <div
        className="absolute h-[20px] top-[101px] hover:scale-110 left-[1009px] flex flex-col items-start justify-start pt-0 pb-[7px] pr-[22px] pl-0.5 gap-[13px] z-[3] text-left text-5xl text-gray-200 font-inter"
        style={componentStyle}
      >
        <div className="w-full h-full relative my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gainsboro-200" />
        <div
          className="relative font-semibold z-[1] mq450:text-lgi"
        >
          {step}
        </div>
        <b
          className="relative text-base text-black z-[1]"
        >
          {stepHeading}
        </b>
        <div className="flex flex-row items-start justify-start py-0 px-[5px] text-smi">
          <b className="relative z-[1]">
            <p className="m-0">{description1}</p>
            <p className="m-0">{description2}</p>
          </b>
        </div>
      </div>
    );
  };
export default StepGuide