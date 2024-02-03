// import Testinomials from "./Testinomials";
import StepGuide from "./StepGuide";

const HomeContact = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-end py-0 px-0 box-border max-w-full shrink-0 text-left text-5xl text-blueviolet-100 font-inter">
      <div className="w-[1748px] flex flex-row items-start justify-start py-0 px-0 box-border max-w-[136%] shrink-0">
        <div className="w-[1815px] flex flex-col items-end justify-start gap-[217px] max-w-[104%] shrink-0 mq750:gap-[217px] mq450:gap-[217px] mq1225:gap-[217px]">
          <div className="self-stretch h-[1281px] relative max-w-full mq1225:h-auto mq1225:min-h-[1281]">
            <h1 className="m-0 absolute top-[0px] left-[1009px] text-13xl font-bold font-inherit mq750:text-7xl mq450:text-lgi">
              May We Help You
            </h1>
            {/* <h1 className="m-0 absolute top-[643px] left-[1009px] text-13xl font-semibold font-inherit text-center mq750:text-7xl mq450:text-lgi">
              Testimonials
            </h1>
            <h3 className="m-0 absolute top-[682px] left-[1040px] text-inherit font-semibold font-inherit text-blueviolet-400 text-center z-[1] mq450:text-lgi">
              Information
            </h3> */}
            {/* <div className="absolute top-[752px] left-[467px] w-[1280px] overflow-hidden flex flex-row items-center justify-start gap-[94px] max-w-full z-[1] text-center text-xs-2 text-white mq1225:flex-wrap">
              <Testinomials
                ellipseFrame="/ellipse-14@2x.png"
                mohanSingh="Mohan Singh"
              />
              <div className="w-[478px] flex flex-col items-center justify-end py-[60px] pr-[15px] pl-2 box-border relative min-h-[332px] max-w-full text-sm">
                <textarea
                  className="[border:none] bg-gray-300 h-[297px] w-full [outline:none] absolute my-0 mx-[!important] right-[0px] bottom-[0px] left-[0px] rounded-xl [backdrop-filter:blur(50px)]"
                  rows={15}
                  cols={24}
                />
                <img
                  className="w-[70px] h-[70px] absolute my-0 mx-[!important] top-[0px] left-[calc(50%_-_35px)] rounded-[50%] object-cover z-[1]"
                  alt=""
                  src="/ellipse-14-1@2x.png"
                />
                <div className="self-stretch flex flex-col items-center justify-start gap-[28px]">
                  <div className="h-[85px] relative font-semibold inline-block z-[1]">
                    <p className="m-0">{`"Enrolling in the online CUET course was a game-changer for me. `}</p>
                    <p className="m-0">{`The comprehensive material, interactive lessons, and personalized `}</p>
                    <p className="m-0">{`support elevated my preparation. I not only gained confidence but `}</p>
                    <p className="m-0">{`also achieved remarkable results. Thank you for paving the way to `}</p>
                    <p className="m-0">my success!"</p>
                  </div>
                  <div className="self-stretch h-[46px] flex flex-col items-center justify-start py-0 px-3 box-border gap-[17px] text-5xl">
                    <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-gainsboro-100" />
                    <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[5px]">
                      <h3 className="m-0 h-[29px] relative text-inherit font-semibold font-inherit inline-block z-[1] mq450:text-lgi">
                        Jhon Lawrence
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <Testinomials
                ellipseFrame="/ellipse-14-2@2x.png"
                mohanSingh="Priya Singh"
                propWidth="383px"
                propBoxShadow="4px 4px 4px rgba(0, 0, 0, 0.25)"
                propLeft="163.4px"
                propColor="#d9d9d9"
                propColor1="#d9d9d9"
              />
            </div> */}
            <h3 className="m-0 absolute top-[51px] left-[1010px] text-inherit font-semibold font-inherit text-gray-100 z-[3] mq450:text-lgi">
              3 Simple steps for Assured Success at CUET
            </h3>
            <div className="absolute h-[calc(100%_-_3px)] top-[3px] bottom-[0px] left-[0px] w-[975px]">
              <img
                className="absolute top-[389.1px] left-[-0.5px] w-[788px] h-[888.8px] object-contain"
                alt=""
                src="/vector-1.svg"
              />
              <img
                className="absolute top-[0px] left-[524px] w-[450px] h-[450px] object-cover z-[1]"
                loading="eager"
                alt=""
                src="/httpslottiefilescomanimationsonlinelibraryux6btezsra@2x.png"
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
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[140px] pl-5 box-border max-w-full mq450:pr-5 mq450:box-border mq1050:pr-[70px] mq1050:box-border">
            <form className="m-0 w-[669px] rounded-[18.31px] bg-gainsboro-100 flex flex-col items-start justify-start pt-[45px] pb-[22px] pr-[74px] pl-[52px] box-border gap-[24px] max-w-full mq750:pl-[26px] mq750:pr-[37px] mq750:box-border">
              <div className="w-[668.5px] h-[315px] relative rounded-[18.31px] bg-gainsboro-100 hidden max-w-full" />
              <h3 className="m-0 relative text-3xl font-bold font-inter text-blueviolet-100 text-left z-[1] mq450:text-lg">
                Request a call back
              </h3>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[52px] mq750:flex-wrap mq750:gap-[52px]">
                <input
                  className="w-full [border:none] [outline:none] bg-white h-14 flex-[0.8986] rounded-[9.16px] flex flex-row items-center justify-start pt-[17px] px-[25px] pb-4 box-border font-inter font-bold text-lg-3 text-gray-300 min-w-[159px] z-[1] mq750:flex-1"
                  placeholder="Full Name"
                  type="text"
                />
                <input
                  className="w-full [border:none] [outline:none] bg-white h-14 flex-1 rounded-[9.16px] flex flex-row items-center justify-start pt-[17px] px-3.5 pb-4 box-border font-inter font-bold text-lg-3 text-gray-300 min-w-[159px] z-[1] mq750:flex-1"
                  placeholder="Email Address"
                  type="text"
                />
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-px pl-0 gap-[51px] mq750:gap-[51px]">
                <div className="flex-1 flex flex-col items-end justify-start py-0 pr-0 pl-px box-border gap-[25px] min-w-[160px]">
                  <input
                    className="w-full [border:none] [outline:none] bg-white self-stretch h-14 rounded-[9.16px] flex flex-row items-center justify-start pt-[18px] px-[25px] pb-[15px] box-border font-inter font-bold text-lg-3 text-gray-300 min-w-[147px] z-[1]"
                    placeholder="Phone Number"
                    type="text"
                  />
                  <button className="cursor-pointer [border:none] py-2 pr-[47px] pl-[45px] bg-tomato-200 h-[39px] rounded-[18.31px] flex flex-row items-center justify-center box-border z-[1] hover:bg-tomato-100">
                    <div className="h-[38.5px] w-[153.8px] relative rounded-[18.31px] bg-tomato-200 hidden" />
                    <b className="relative text-lg-3 font-inter text-white text-left z-[2]">
                      Submit
                    </b>
                  </button>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[25px] min-w-[160px]">
                  <input
                    className="w-full [border:none] [outline:none] bg-white self-stretch h-14 rounded-[9.16px] flex flex-row items-center justify-start pt-[18px] px-3.5 pb-[15px] box-border font-inter font-bold text-lg-3 text-gray-300 min-w-[147px] z-[1]"
                    placeholder="Reason"
                    type="text"
                  />
                  <button className="cursor-pointer [border:none] py-2 px-[30px] bg-[transparent] flex flex-row items-center justify-center relative z-[1]">
                    <div className="h-full w-[calc(100%_-_4px)] absolute my-0 mx-[!important] top-[0px] right-[4px] bottom-[0px] left-[0px] rounded-[18.31px] bg-tomato-200" />
                    <b className="relative text-lg-3 font-inter text-white text-left z-[1]">
                      Need Help
                    </b>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;