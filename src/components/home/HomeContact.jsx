import StepGuide from "./StepGuide";

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
              step01="Step 01"
              aPPEARFORMOCKTEST="APPEAR FOR MOCK TEST"
              atTestKNOCKWeStronglyBeli="At TestKNOCK we strongly believe that students need to take tests regularly to know where "
              theyStandInTodaysCompetit="they stand in today’s competitive environment."
            />
            <StepGuide
              step01="Step 02"
              aPPEARFORMOCKTEST="PRACTICE QUESTION FROM PREPARATORY MODULES"
              atTestKNOCKWeStronglyBeli="The content team at TestKNOCK has executed thousands interactive Multiple Choice Questions "
              theyStandInTodaysCompetit="with detailed explanation to help you improve tremendously."
              propTop="242px"
              propLeft="1011px"
              propWidth="111px"
              propPaddingRight="20px"
              propWidth1="451px"
              propPaddingRight1="20px"
            />
            <StepGuide
              step01="Step 03"
              aPPEARFORMOCKTEST="PLAN, REVIEW AND EXECUTE"
              atTestKNOCKWeStronglyBeli="We strongly recommend that students spend 4-5 hrs every week for extensive practice and "
              theyStandInTodaysCompetit="observe considerable growth over a period of time. "
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