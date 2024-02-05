import React, { useState } from 'react';
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Contact from '../components/home/Contact';
import HomeSteps from "../components/home/HomeSteps";
import SubjectTopic from "../components/home/SubjectTopic";
import Testinomials from '../components/home/Testinomials';


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
const Homepage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleBellIconClick = () => {
    setIsPopupOpen(!isPopupOpen);
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
        className="w-[608.7px] h-[542.2px]  mx-auto absolute my-0  top-[1155px] right-[-321.7px] object-contain z-[2]"
        loading="eager"
        alt=""
        src={require("../assets/images/signup/Vector.png")}
      />

      <HomeSteps />
      <section className="w-[927px] h-[822px] absolute my-0 mx-[!important] right-[-378px] bottom-[621px]">
        <img
          className="absolute top-[0px] left-[193px] w-[734.2px] h-[641.2px] object-contain"
          alt=""
          src={require("../assets/images/signup/Vector.png")}
        />
      </section>
      <Testinomials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;