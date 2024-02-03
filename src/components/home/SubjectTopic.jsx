import { useCallback } from "react";
import DomainTopic from "./DomainTopic";

const SubjectTopic = () => {
  const onTitleTextNodeClick = useCallback(() => {
  }, []);

  const onLogoImageShapeClick = useCallback(() => {
  }, []);

  return (
    <section className="max-w-[1216px] m-[20px]  flex flex-row items-start justify-end py-0 px-5 box-border min-h-[594px]  shrink-0 text-center text-17xl text-blueviolet-100 font-inter">
      <div className="w-[807px] flex flex-col items-start justify-start gap-[102px] max-w-full mq450:gap-[102px] mq1050:gap-[102px]">
        <div className="flex flex-col items-center justify-start gap-[15px] max-w-full">
          <div className="flex flex-row items-start justify-start py-0 pr-[34px] pl-5 box-border max-w-full">
            <h1 className="m-0 relative text-inherit tracking-[0.02em] font-bold font-inherit z-[1] mq750:text-10xl mq450:text-3xl">
              Challenge Your-self
            </h1>
          </div>
          <div className="flex flex-row items-start justify-start relative text-13xl text-blueviolet-300">
            <h1 className="m-0 h-[39px] relative text-inherit font-semibold font-inherit inline-block z-[1] mq750:text-7xl mq450:text-lgi">
              ATTEMPT FREE MOCK TEST
            </h1>
            <div className="h-[676px] w-[640px] my-0 mx-[!important] absolute bottom-[-540px] left-[-420px] bg-thistle [backdrop-filter:blur(50px)] flex flex-row items-end justify-start py-[133px] px-[101px] box-border text-black">
              <div className="h-[676px] w-[640px] relative bg-thistle [backdrop-filter:blur(50px)] hidden max-w-full" />
              <DomainTopic
                brick={require("../../assets/images/signup/brick.png")}
                general="General "
                english="English"
                onTitleTextNodeClick={onTitleTextNodeClick}
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end max-w-full text-13xl text-black">
          <div className="w-[703px] flex flex-row items-start justify-between gap-[20px] max-w-full mq750:flex-wrap">
            <DomainTopic
                brick={require("../../assets/images/signup/brick.png")}
                general="Domain "
              english="Subjects"
              propAlignSelf="unset"
              onTitleTextNodeClick={onLogoImageShapeClick}
            />
            <DomainTopic
                brick={require("../../assets/images/signup/brick.png")}
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