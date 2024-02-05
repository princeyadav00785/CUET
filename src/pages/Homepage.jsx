import React, { useEffect, useState } from 'react';
import { IoMdCall } from "react-icons/io";
import { config } from "react-spring";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import HomeContact from "../components/home/HomeContact";
import SubjectTopic from "../components/home/SubjectTopic";


const ExamInfo = () => {
  const [activeTab, setActiveTab] = useState('cuetNotifications');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const cuetNotificationsNotices = [
    { id: 1, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
    { id: 2, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
    { id: 3, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
    { id: 4, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
    { id: 5, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
    { id: 6, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
    { id: 7, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
    { id: 8, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
    { id: 9, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
    { id: 10, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
    { id: 11, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
    { id: 12, title: 'CUET Notifications 2', date: '02/01/2023', link: 'https://example.com/cuet-notifications2' },
  ];

  const otherExamsNotificationsNotices = [

    { id: 1, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
    { id: 2, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
    { id: 3, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
    { id: 4, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
    { id: 5, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
    { id: 6, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
    { id: 7, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
    { id: 8, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
    { id: 9, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
    { id: 10, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
    { id: 11, title: 'CUET Notifications 1', date: '01/01/2023', link: 'https://example.com/cuet-notifications1' },
    { id: 12, title: 'CUET Notifications 2', date: '02/01/2023', link: 'https://example.com/cuet-notifications2' },
  ];

  const getNoticesForTab = () => {
    switch (activeTab) {
      case 'cuetNotifications':
        return cuetNotificationsNotices.map((notice) => (
          <React.Fragment key={notice.id}>
            <a href={notice.link} target="_blank" rel="noreferrer" className=' no-underline text-white '>
              <li className={`my-[8px]  ${activeTab === 'cuetNotifications' ? '' : ''}`}>
                <p className='text-black '>{notice.title}</p>
              </li>
              <div className="text-slate-600 mb-8">Published on {notice.date}</div>
            </a>
          </React.Fragment>
        ));
      case 'otherExamsNotifications':
        return otherExamsNotificationsNotices.map((notice, index) => (
          <React.Fragment key={notice.id}>
            <a href={notice.link} target="_blank" rel="noreferrer" className=' no-underline text-black'>
              <li className={`my-[8px]  ${activeTab === 'cuetNotifications' ? '' : ''}`}>
                {notice.title}
              </li>
              <div className="text-slate-600 mb-8">Published on {notice.date}</div>
            </a>
          </React.Fragment>
        ));
      default:
        return [];

    }
  };

  const notices = getNoticesForTab();

  return (
    <div className=" mx-auto max-w-[1500px] justify-center mb-[40px]">
      <div className="grid lg:grid-cols-2 grid-cols-1  mt-[40px] mb-[80px] mx-[5vw] gap-10 ">
        <div className='max-w-[600px] max-md:mx-auto   '>
          <div className="bg-[#ffffff00] backdrop-filter backdrop-blur-[30px] shadow-xl  rounded-xl"
          >
            <div className="pb-8 px-8 text-center mb-[-30px]">
              <ul className="flex flex-wrap justify-center gap-[20px]">
                {['cuetNotifications', 'otherExamsNotifications'].map((tab) => (
                  <h key={tab}  >
                    <p
                      className={` font-bold  hover:text-blue-500 text-black   ${activeTab === tab ? 'text-blue-500' : ''}`}
                      onClick={() => handleTabClick(tab)}
                    >
                      {tab === 'cuetNotifications' ? 'CUET Notifications' : 'Other Exams Notifications'}
                    </p>
                    <hr className={`my-2 ${activeTab === tab ? 'border-b border-blue-500' : ''}`} />
                  </h>
                ))}
              </ul>
            </div>
            <div
              className="pt-0 h-[20rem] overflow-y-scroll"
            >
              <div >
                <div className={`tab-pane fade ${activeTab === 'cuetNotifications' ? 'active show' : ''}`} id="cuetNotifications">
                  <ul className="my-6 mx-6 ps-4 ">{notices}</ul>
                </div>
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

const Testinomials = ({
  ellipseFrame,
  mohanSingh,
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
          src={ellipseFrame}
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
                {mohanSingh}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const slides = [
  {
    key: uuidv4(),
    content: (
      <Testinomials
        ellipseFrame={require("../assets/images/signup/test1.png")}
        mohanSingh="Mohan Singh"
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
      <Testinomials
        ellipseFrame={require("../assets/images/signup/test1.png")}
        mohanSingh="Priya Singh"
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
      <Testinomials
        ellipseFrame={require("../assets/images/signup/test1.png")}
        mohanSingh="Priya Singh"
        text="Enrolling in the online CUET course was a game-changer for me.
        The comprehensive material, interactive lessons, and personalized
        support elevated my preparation. I not only gained confidence but
        also achieved remarkable results. Thank you for paving the way to
        my success!"
      />
    )
  }
];
const Needhelp = () => {
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

const Homepage = () => {
  const [isPopupOpen1, setIsPopupOpen1] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleBellIconClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const handleBellIconClick2 = () => {
    setIsPopupOpen1(!isPopupOpen1);
  };
  return (
    <div className="w-full  relative bg-white overflow-hidden flex flex-col items-center  pt-5 px-0 pb-0 box-border gap-[81px] tracking-[normal]">
      <Header />
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
          <div onClick={handleBellIconClick}
            className="flex z-50 relative  flex-row items-center gap-[7px] text-base cursor-pointer" >
            <img
              className="h-[54px] w-[52px] relative object-cover"
              loading="eager"
              alt=""
              src={require("../assets/images/signup/bellicon.gif")}
            />
            <div className="relative font-semibold">Live Notification</div>

          </div>
          <div className='flex flex-row items-center gap-[7px] text-base cursor-pointer'>
            {isPopupOpen && (
              <div className=" top-[82vh] absolute inset-0 flex z-40  bg-opacity-50"
              >
                <div  >

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
          src={require('../assets/images/signup/homefirst.png')}
        />
      </div>
      <SubjectTopic />
      <img
        className="w-[608.7px] h-[542.2px] absolute my-0 mx-[!important] top-[1155px] right-[-321.7px] object-contain z-[2]"
        loading="eager"
        alt=""
        src={require("../assets/images/signup/Vector.png")}
      />
      <div className="max-w-[1280px] mx-[20px]">
        <HomeContact />

      </div>
      <section className="w-[927px] h-[822px] absolute my-0 mx-[!important] right-[-378px] bottom-[621px]">
        <img
          className="absolute top-[0px] left-[193px] w-[734.2px] h-[641.2px] object-contain"
          alt=""
          src={require("../assets/images/signup/Vector.png")}
        />
      </section>
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
                      <Needhelp />

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
        <img className="w-[400px] h-[400px]" src={require("../assets/images/signup/first1.png")} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;