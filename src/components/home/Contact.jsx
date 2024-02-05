import React, { useState } from 'react';
import { IoMdCall } from "react-icons/io";

const Needhelppopup = () => {
    return (
      <div className='  bg-[#FFFBEE]  rounded-xl '>
        <div className=''>
          <h1 className='py-3 px-4 text-[15px] '>Need Guidance or Help in Filling Form?</h1>
          <h1 className='mx-8 pb-4'>
            <p className='text-sm flex justify-between ' ><span>Sachin Rana</span>   <span> <IoMdCall /> 91+ 9560443520</span> </p>
            <p className=' flex text-sm justify-between   '><span>Virendra Pratap</span>  <span> <IoMdCall />  91+ 8279662680</span> </p>
          </h1>
        </div>
      </div>
    )
  }

  const Contact = () => {
    const [isPopupOpen1, setIsPopupOpen1] = useState(false);
    const handleBellIconClick2 = () => {
        setIsPopupOpen1(!isPopupOpen1);
      };
    return (
        <div className="flex items-center flex-row justify-start gap-[27px] shrink-0 ">
        <form className="m-0 max-w-[669px] rounded-[18.31px] bg-gainsboro-100 flex flex-col items-start justify-start pt-[45px] pb-[22px] pr-[74px] pl-[52px] box-border gap-[24px]  mq750:pl-[26px] mq750:pr-[37px] mq750:box-border">
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
              <div className="cursor-pointer [border:none] py-2 px-[30px] bg-[transparent] flex flex-row items-center justify-center relative z-[1]">
                {isPopupOpen1 && (
                  <div onClick={handleBellIconClick2} className=" w-[350px]  top-[30px]    absolute inset-0 flex z-50  bg-opacity-50"
                  >
                    <div>
                      <Needhelppopup />

                    </div>
                  </div>
                )}
                <div className="h-full w-[calc(100%_-_4px)] absolute my-0 mx-[!important] top-[0px] right-[4px] bottom-[0px] left-[0px] rounded-[18.31px] bg-tomato-200" />
                <b onClick={handleBellIconClick2} className="relative text-lg-3 font-inter text-white text-left z-[1]">
                  Need Help
                </b>

              </div>

            </div>
          </div>
        </form>
        <img className="w-[400px] h-[400px]" src={require("../../assets/images/signup/first1.png")} alt="" />
      </div>
    )
  }

export default Contact