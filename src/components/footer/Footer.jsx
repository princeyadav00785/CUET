import React from "react";
import { IoMdCall, IoMdMail, IoMdPin } from "react-icons/io";

const Footer = () => {
  return (
    <section className="self-stretch bg-midnightblue flex flex-col items-center justify-start pt-[57px] pb-[116px] pr-[60px] pl-[57px] box-border gap-[46px] max-w-full shrink-0 text-left text-base text-white font-inter mq750:gap-[46px] mq750:pt-[37px] mq750:pb-[75px] mq750:pr-[30px] mq750:pl-7 mq750:box-border">
    <div className="w-[1280px] h-[470px] relative bg-midnightblue hidden max-w-full" />
    <footer className="flex flex-row items-center justify-start py-0 px-[3px] box-border gap-[75px] max-w-full text-left text-base text-white font-inter mq750:gap-[75px] mq1225:flex-wrap mq1225:gap-[75px]">
      <div className="w-[535px] flex flex-col items-start justify-start gap-[36px] max-w-full mq450:gap-[36px]">
        <div className="flex flex-row items-center justify-start gap-[7px]">
          <img
            className="h-[40.5px] w-[30px] relative object-cover z-[1]"
            loading="eager"
            alt=""
            src={require("../../assets/images/logo_final.png")}
            />
          <b className="relative z-[1]">CUET-TestKnock</b>
        </div>
        <b className="w-[445px] h-[141px] relative inline-block whitespace-pre-wrap shrink-0 max-w-full z-[1]">
          At TestKnock, we are dedicated to more than just academic success.
          Our unwavering commitment extends to providing you with the
          essential tools and expert guidance. So join us on this
          transformative expedition and discover where educational excellence
          is not just an aspiration but an inspiring and achievable pursuit.
        </b>
      </div>
      <div className="h-[195px] flex flex-col items-start justify-start">
        <div className="flex flex-col items-center justify-start gap-[27px]">
          <b className="relative z-[1]">Company</b>
          <div className="flex flex-col items-center justify-start py-0 px-1 gap-[10px]">
            <b className="relative z-[1]">Home</b>
            <b className="relative z-[1]">About</b>
            <b className="relative z-[1]">Syllabus</b>
            <b className="relative z-[1]">Courses</b>
          </div>
        </div>
      </div>
      <div className="w-[399px] flex flex-row items-start justify-start gap-[5px] max-w-full mq450:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[26px] min-w-[161px]">
          <div className="flex flex-row items-start justify-start py-0 px-[31px]">
            <b className="relative z-[1]">Whom we serve</b>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[9px] text-center">
            <div className="w-[220px] flex flex-row items-end justify-between gap-[20px] text-left">
              <b className="relative z-[1]">School Students</b>
              <IoMdMail />

            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
              <div className="flex flex-col items-center justify-start gap-[10px]">
                <b className="relative z-[1]">College Students</b>
                <b className="relative z-[1]">Educational Institutions</b>
              </div>
              <div className="flex flex-col items-start justify-start ">
              <IoMdCall />
              </div>
            </div>
            <div className="w-[216px] flex flex-row  justify-between gap-[20px]">
              <b className="relative z-[1]">Private Schools</b>
              <IoMdPin />

            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-7">
              <b className="relative z-[1]">Private Colleges</b>
            </div>
          </div>
        </div>
        <div className="w-[146px] flex flex-col items-start justify-start gap-[27px] min-w-[146px] mq450:flex-1">
          <div className="flex flex-row items-start justify-start py-0 px-[5px]">
            <b className="relative z-[1]">Contact Us</b>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[31px] text-sm">
            <div className="flex flex-col items-start justify-start gap-[25px]">
              <b className="relative whitespace-nowrap z-[1]">
                
                info@testknock.com
              </b>
              <b className="relative z-[1]">9953617456</b>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[3px] pl-0 text-xs">
              <b className="flex-1 relative z-[1]">
                Office No. - 42, Durga Vihar, near Amrapali Saphhire, Sec-45,
                Noida-201301
              </b>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="mx-auto h-[34px] flex flex-col items-start justify-start py-0 px-px box-border gap-[15px] max-w-full mq750:h-auto">
      <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-white" />
      <div className="w-[1050px] flex flex-row items-start justify-start py-0 px-[34px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full mq750:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[76px] max-w-full mq750:flex-wrap mq450:gap-[76px]">
            <div className="flex flex-row items-start justify-start gap-[6px]">
            &copy;
              <b className="relative z-[1]">2024 TestKnock</b>
            </div>
            <b className="relative z-[1]">All rights reserved</b>
          </div>
          <div className="flex flex-row items-start justify-start gap-[30px] text-deepskyblue">
            <b className="relative [text-decoration:underline] z-[1]">{`Terms & Condition`}</b>
            <b className="relative [text-decoration:underline] z-[1]">
              Privacy
            </b>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Footer;
