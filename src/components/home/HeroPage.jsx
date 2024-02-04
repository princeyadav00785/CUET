import React, { useState } from 'react';
import ExamInfo from './Examinfo';

// const Needhelp = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

const HeroPage = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleBellIconClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <div className="flex flex-row gap-[100px] items-start justify-between mx-auto box-border  text-left text-13xl text-blueviolet-100 font-inter">
      <div className="flex flex-col items-start gap-[42px] max-w-full">
        <div className="flex flex-col items-start box-border gap-[17px] max-w-full">
          <b className="h-[89px] relative inline-block max-w-full mq750:text-7xl mq450:text-lgi">
            <p className="m-0">One Stop Solution for your</p>
            <p className="m-0">
              <span>all </span>
              <span className="text-21xl text-salmon">CUET</span>
              <span className="text-13xl text-blueviolet-100"> needs</span>
            </p>
          </b>
          <div className="flex flex-col items-start justify-start gap-[9px] max-w-full text-xl">
            <b className="h-12 relative inline-block max-w-full mq450:text-base">
              <p className="m-0">Avail Complete Support from India’s</p>
              <p className="m-0">best trainers</p>
            </b>
            <h3 className="m-0 h-[58px] relative text-5xl font-bold font-inherit text-blueviolet-200 inline-block mq450:text-lgi">
              <p className="m-0">Trusted by maximum Students & Teachers</p>
              <p className="m-0">across the INDIA</p>
            </h3>
          </div>
          <div className="flex flex-row items-start justify-start gap-[22px] max-w-full mq450:flex-wrap">
            <button className="cursor-pointer [border:none] py-[7px] pr-[41px] pl-[39px] bg-salmon rounded-xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-firebrick">
              <div className="h-[38px] w-[155px] relative rounded-xl bg-salmon hidden" />
              <div className="relative text-xl font-medium font-inter text-white text-left z-[1]">
                Join Us
              </div>
            </button>
            <button className="cursor-pointer pt-[9px] pb-2.5 pr-[47px] pl-[37px] bg-[transparent] rounded-xl flex flex-row items-center justify-start whitespace-nowrap border-[1px] border-solid border-blueviolet-100 hover:bg-mediumslateblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-mediumslateblue-100">
              <div className="h-[38px] w-[211px] relative rounded-xl box-border hidden border-[1px] border-solid border-blueviolet-100" />
              <b className="relative text-base font-inter text-blueviolet-100 text-left z-[1]">
                Take a Free Test
              </b>
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center gap-[7px] text-base cursor-pointer" >
          <img
          onClick={handleBellIconClick} 
            className="h-[54px] w-[52px] relative object-cover"
            loading="eager"
            alt=""
            src={require("../../assets/images/signup/bellicon.gif")}
          />
          <div className="relative font-semibold">Live Notification</div>
          {isPopupOpen && (
                <div className=" top-[50vh] absolute inset-0 flex z-50  bg-opacity-50"
         >
          <div  onClick={handleBellIconClick}>
          <ExamInfo />

          </div>
        </div>
      )}
        </div>
      </div>
      <img
        className="w-[392px] "
        loading="eager"
        alt=""  
        src={require('../../assets/images/signup/homefirst.png')}
      />
    </div>
  );
};

export default HeroPage;
