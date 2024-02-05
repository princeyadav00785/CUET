import React, { useEffect, useState } from 'react';
import { config } from "react-spring";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";

const Testinomials2 = ({
  image,
  name,
  text,
}) => {
  return (
    <div
      className="w-[416px] flex flex-col items-start justify-start pt-1 pb-0 pr-8 pl-0 box-border max-w-full text-center text-xs-2 text-white font-inter"
    >
      <div className="self-stretch flex flex-col items-center justify-end py-[49px] pr-3 pl-[7px] box-border relative min-h-[266px]">
        <div
          className="w-full h-[238px] absolute my-0 mx-[!important] right-[0px] bottom-[0px] left-[0px] rounded-[16.02px] bg-gray-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(50px)]"
        />
        <img
          className="w-[56.1px] h-[56.1px] absolute my-0 mx-[!important] top-[0px] left-[calc(50%_-_28.1px)] rounded-[50%] object-cover z-[1]"
          loading="eager"
          alt=""
          src={image}
        />
        <div className="self-stretch flex flex-col items-center justify-start gap-[21px]">
          <div
            className="self-stretch relative  z-[1]"
          >
            {text}
          </div>
          <div className="self-stretch flex flex-col items-center justify-start py-0 px-2.5 gap-[13px] text-lgi-2">
            <div className="self-stretch h-[0.8px] relative box-border z-[1] border-t-[0.8px] border-solid border-white" />
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[5px]">
              <div
                className="relative font-semibold z-[1]"
              >
                {name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
function Carroussel(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });
  const [offsetRadius, setOffsetRadius] = useState(4);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
const slides = [
  {
    key: uuidv4(),
    content: (
      <Testinomials2
        image={require("../../assets/images/signup/test1.png")}
        name="Mohan Singh"
        text="Enrolling in the online CUET course was a game-changer for me.
          The comprehensive material, interactive lessons, and personalized
          support elevated my preparation. I not only gained confidence but
          also achieved remarkable results. Thank you for paving the way to
          my success!"
      />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Testinomials2
        image={require("../../assets/images/signup/test1.png")}
        name="Priya Singh"
        text="Enrolling in the online CUET course was a game-changer for me.
          The comprehensive material, interactive lessons, and personalized
          support elevated my preparation. I not only gained confidence but
          also achieved remarkable results. Thank you for paving the way to
          my success!"
      />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Testinomials2
        image={require("../../assets/images/signup/test1.png")}
        name="Priya Singh"
        text="Enrolling in the online CUET course was a game-changer for me.
          The comprehensive material, interactive lessons, and personalized
          support elevated my preparation. I not only gained confidence but
          also achieved remarkable results. Thank you for paving the way to
          my success!"
      />
    )
  }
];
const Testinomials = () => {
  return (
    <div>
      <div className='mb-[-35px]'>
        <h1 className="m-0 relative text-blueviolet-400  text-13xl font-semibold font-inherit text-center mq750:text-7xl mq450:text-lgi">
          Testimonials
        </h1>
        <h1 className="m-0 relative text-blueviolet-400  text-[25px] font-semibold font-inherit text-center mq750:text-7xl mq450:text-lgi">
          Information
        </h1>
      </div>

      <div className="relative mb-[-50px]  w-[1280px] overflow-hidden flex flex-row items-center justify-start gap-[94px] max-w-full z-[1] text-center text-xs-2 text-white mq1225:flex-wrap">

        <Carroussel
          cards={slides}
          height="500px"
          width="80%"
          margin="0 auto"
          offset={200}
          showArrows={false}
        />        </div>
    </div>
  );
};

export default Testinomials;