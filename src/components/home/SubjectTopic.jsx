import { useCallback } from "react";
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
const SubjectTopic = () => {
 

  const onLogoImageShapeClick = useCallback(() => {
  }, []);

  return (
    <section className="max-w-[1216px] text-center m-[20px]  flex flex-row items-start justify-end py-0 px-5 box-border min-h-[594px]  shrink-0  text-17xl text-blueviolet-100 font-inter">
      <div className=" flex flex-col items-start justify-start gap-[102px] max-w-full mq450:gap-[102px] mq1050:gap-[102px]">
        <div className="flex flex-col items-center justify-start gap-[15px] max-w-full">
          <div className="flex flex-row items-start justify-start py-0 pr-[34px] pl-5 box-border max-w-full">
            <h1 className="m-0 relative text-inherit tracking-[0.02em] font-bold font-inherit z-[1] mq750:text-10xl mq450:text-3xl">
              Challenge Your-self
            </h1>
          </div>
          <div className="flex flex-row items-start justify-start relative text-13xl text-blueviolet-300">
            <h1 className="m-0 h-[39px] relative text-inherit  inline-block z-[1] mq750:text-7xl mq450:text-lgi">
              ATTEMPT FREE MOCK TEST
            </h1>
            <div className="h-[676px] w-[640px] my-0 mx-[!important] absolute bottom-[-540px] left-[-420px] bg-thistle [backdrop-filter:blur(50px)] flex flex-row items-end justify-start py-[133px] px-[101px] box-border text-black">
              <div className="h-[676px] w-[640px] relative bg-thistle [backdrop-filter:blur(50px)] hidden max-w-full" />
            </div>
          </div>
          <div className="flex my-[70px] flex-row items-start gap-[100px] ">
            <DomainTopic
                brick={require("../../assets/images/signup/brick.png")}
                general="General "
                english="English"
              onTitleTextNodeClick={onLogoImageShapeClick}
            />
             <DomainTopic
                brick={require("../../assets/images/signup/domain.png")}
                general="Domain "
              english="Subjects"
              propAlignSelf="unset"
              onTitleTextNodeClick={onLogoImageShapeClick}
            />
            <DomainTopic
                brick={require("../../assets/images/signup/test.png")}
                general="General "
              english="Test"
              propAlignSelf="unset"
              onTitleTextNodeClick={onLogoImageShapeClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectTopic;