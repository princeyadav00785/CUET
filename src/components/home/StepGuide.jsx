import { useMemo } from "react";

const StepGuide = ({
  step01,
  aPPEARFORMOCKTEST,
  atTestKNOCKWeStronglyBeli,
  theyStandInTodaysCompetit,
  propTop,
  propLeft,
  propWidth,
  propPaddingRight,
  propWidth1,
  propPaddingRight1,
}) => {
  const component8Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const step01Style = useMemo(() => {
    return {
      width: propWidth,
      paddingRight: propPaddingRight,
    };
  }, [propWidth, propPaddingRight]);

  const aPPEARFORMOCKStyle = useMemo(() => {
    return {
      width: propWidth1,
      paddingRight: propPaddingRight1,
    };
  }, [propWidth1, propPaddingRight1]);

  return (
    <div
      className="absolute top-[101px] left-[1009px] flex flex-col items-start justify-start pt-0 pb-[7px] pr-[22px] pl-0.5 gap-[13px] z-[3] text-left text-5xl text-gray-200 font-inter"
      style={component8Style}
    >
      <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gainsboro-200" />
      <div
        className="relative font-semibold z-[1] mq450:text-lgi"
        style={step01Style}
      >
        {step01}
      </div>
      <b
        className="relative text-base text-black z-[1]"
        style={aPPEARFORMOCKStyle}
      >
        {aPPEARFORMOCKTEST}
      </b>
      <div className="flex flex-row items-start justify-start py-0 px-[5px] text-smi">
        <b className="relative z-[1]">
          <p className="m-0">{atTestKNOCKWeStronglyBeli}</p>
          <p className="m-0">{theyStandInTodaysCompetit}</p>
        </b>
      </div>
    </div>
  );
};

export default StepGuide;