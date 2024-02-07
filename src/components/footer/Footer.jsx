import React from "react";
import { Link } from "react-router-dom";
import { IoMdCall, IoMdMail, IoMdPin } from "react-icons/io";
import { Container, Row, Col } from 'react-bootstrap';
import Logo from "../../assets/images/logo_final.png";

const Footer = () => {
  return (
    <footer className="bg-[#0D0756] text-white overflow-hidden w-full">
      <Container fluid>
        <Row className="md:flex justify-between font-medium grid mx-[30px] grid-cols-1 mt-9 gap-8">
          <Col xs={12} md={6}>
            <div className="grid justify-center">
              <div className="flex justify-center lg:justify-start gap-6 text-[#063970]">
                <Link to="/" className="no-underline">
                  <div className="flex items-center">
                    <div className="mr-4 mb-[-12px]">
                      <img
                        src={Logo}
                        alt="Logo"
                        className="max-h-[60px] max-w-[60px] px-4 pb-2"
                      />
                    </div>
                    <div className="text-white font-sans font-bold text-[100%] ml-[-8%]">
                      <h2>
                        <span>CUET-TESTKNOCK</span>
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
              <p className="mt-6 lg:text-start md:text-[100%] text-[80%] font-medium hover:text-white text-center leading-5 text-white w-[400px] ml-[20px] mr-[20px]">
                At TestKnock, we are dedicated to more than just academic success.
                Our unwavering commitment extends to providing you with the
                essential tools and expert guidance. So join us on this
                transformative expedition and discover where educational
                excellence is not just an aspiration but an inspiring and
                achievable pursuit.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} className="flex flex-col md:flex-row md:justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <ul className="space-y-2 text-[80%] md:text-[100%] list-none no-underline">
                <p className="md:text-[120%] mb-[40px] text-center text-[90%] text-white hover:text-white ">
                  Company
                </p>
                <li>
                  <Link
                    className="text-white transition no-underline hover:text-white"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition no-underline hover:text-white"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition no-underline hover:text-white"
                    to="/syllabus"
                  >
                    Syllabus
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition no-underline hover:text-white"
                    to="/courses"
                  >
                    Courses
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left mb-6 md:mb-0">
              <ul className="text-[80%] space-y-[-3px] md:text-[100%] list-none">
                <p className="md:text-[120%] mb-[40px] text-[90%] hover:text-white text-white whitespace-nowrap">
                  Whom We Serve
                </p>
                <li>
                  <p className="text-white transition hover:text-white whitespace-nowrap">
                    School Students
                  </p>
                </li>
                <li>
                  <p className="text-white transition hover:text-white whitespace-nowrap">
                    College Students
                  </p>
                </li>
                <li>
                  <p className="text-white transition hover:text-white whitespace-nowrap">
                    Educational Institutions
                  </p>
                </li>
                <li>
                  <p className="text-white transition hover:text-white whitespace-nowrap">
                    Private Schools
                  </p>
                </li>
                <li>
                  <p className="text-white transition hover:text-white whitespace-nowrap">
                    Private Colleges
                  </p>
                </li>
              </ul>
            </div>
            <div className="text-center max-sm:hidden sm:text-left">
              <ul className="space-y-5 text-[80%] md:text-[100%]">
                <p className="md:text-[120%] left-[30px] relative items-center mb-[40px] text-[90%] hover:text-white font-medium text-white">
                  Contact Us
                </p>
                <li className="flex items-center hover:text-white text-white gap-1.5 justify-start">
                  <Link
                    href="mailto:info@testknock.com"
                    className="gap-1.5 flex no-underline text-white "
                  >
                    <IoMdMail className="relative top-[5px]" />
                    <h>info@testknock.com</h>
                  </Link>
                </li>
                <li className="flex items-center hover:text-white text-white gap-1.5 justify-start">
                  <Link href="tel:9953617456" className="gap-1.5 flex no-underline text-white ">
                    <IoMdCall className="relative top-[5px]" />
                    <h>9953617456</h>
                  </Link>
                </li>
                <li className="flex items-start hover:text-white text-white justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <IoMdPin />
                  <h className="-mt-0.5 flex-1 not-italic">
                    Office No. - 42, Durga Vihar, <br />
                    Near Amrapali Saphhire, <br />
                    Sec-45, Noida, 201301
                  </h>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="mx-auto my-[50px] flex flex-col items-start justify-start py-0 px-px box-border gap-[15px] max-w-full ">
          <div className="self-stretch mx-[40px] relative box-border z-[1] border-t-[1px] border-solid border-white" />
          <div className="w-[1050px] mx-auto flex flex-row items-start justify-start py-0 px-[34px] box-border max-w-full">
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
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
