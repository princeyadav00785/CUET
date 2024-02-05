import { useMemo } from "react";

const StepGuide = ({
  step,
  stepHeading,
  description1,
  description2,
  propTop,
  propLeft,
  propWidth,
  propPaddingRight,
  propWidth1,
  propPaddingRight1,
}) => {
  const componentStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      transition: "transform 0.3s ease-out",
      transformOrigin: "left top",

    };
  }, [propTop, propLeft]);

  const stepStyle = useMemo(() => {
    return {
      width: propWidth,
      paddingRight: propPaddingRight,
    };
  }, [propWidth, propPaddingRight]);

  const stepHeadingStyle = useMemo(() => {
    return {
      width: propWidth1,
      paddingRight: propPaddingRight1,
    };
  }, [propWidth1, propPaddingRight1]);

  return (
    <div
      className="absolute h-[20px] top-[101px] hover:scale-110 left-[1009px] flex flex-col items-start justify-start pt-0 pb-[7px] pr-[22px] pl-0.5 gap-[13px] z-[3] text-left text-5xl text-gray-200 font-inter"
      style={componentStyle}
    >
      <div className="w-full h-full relative my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gainsboro-200" />
      <div
        className="relative font-semibold z-[1] mq450:text-lgi"
        style={stepStyle}
      >
        {step}
      </div>
      <b
        className="relative text-base text-black z-[1]"
        style={stepHeadingStyle}
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
const HomeContact = () => {
  return (
    <section className="self-stretch flex flex-row items-start max-auto justify-end py-0 px-0 box-border max-w-full shrink-0 text-left text-5xl  font-inter">
      <div className=" flex flex-row items-start justify-start py-0 px-0 box-border max-w-[136%] shrink-0">
        <div className="w-[1815px] flex flex-col items-end justify-start gap-[217px] max-w-[104%] shrink-0 mq750:gap-[217px] mq450:gap-[217px] mq1225:gap-[217px]">
          <div className="self-stretch  relative max-w-full mq1225:h-auto mq1225:min-h-[1281]">
            <h1 className="m-0 relative text-blueviolet-100 top-[0px] left-[1009px] text-13xl font-bold font-inherit mq750:text-7xl mq450:text-lgi">
              May We Help You
            </h1>
            <h3 className="m-0 relative  left-[1010px] text-inherit font-semibold font-inherit text-slate-600 z-[3] mq450:text-lgi">
              3 Simple steps for Assured Success at CUET
            </h3>
            <div className="relative h-[calc(100%_-_3px)] top-[3px] bottom-[0px] left-[0px] w-[975px]">
              <img
                className=" absolute  left-[-0.5px] w-[788px] h-[888.8px] object-contain"
                alt=""
                src={require("../../assets/images/signup/Vector3.png")}
              />
              <img
                className="relative left-[524px] w-[450px] h-[450px] object-cover z-[1]"
                loading="eager"
                alt=""
                src={require("../../assets/images/signup/first1.png")}
              />
            </div>
            <StepGuide
              step="Step 01"
              stepHeading="APPEAR FOR MOCK TEST"
              description1="At TestKNOCK we strongly believe that students need to take tests regularly to know where "
              description2="they stand in today’s competitive environment."
            />
            <StepGuide
              step="Step 02"
              stepHeading="PRACTICE QUESTION FROM PREPARATORY MODULES"
              description1="The content team at TestKNOCK has executed thousands interactive Multiple Choice Questions "
              description2="with detailed explanation to help you improve tremendously."
              propTop="242px"
              propLeft="1011px"
              propWidth="111px"
              propPaddingRight="10px"
              propWidth1="451px"
              propPaddingRight1="20px"
            />
            <StepGuide
              step="Step 03"
              stepHeading="PLAN, REVIEW AND EXECUTE"
              description1="We strongly recommend that students spend 4-5 hrs every week for extensive practice and "
              description2="observe considerable growth over a period of time. "
              propTop="376px"
              propLeft="1016px"
              propWidth="unset"
              propPaddingRight="unset"
              propWidth1="unset"
              propPaddingRight1="unset"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;