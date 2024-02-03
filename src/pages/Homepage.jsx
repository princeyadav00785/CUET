import HeroPage from "../components/home/HeroPage";
import HomeContact from "../components/home/HomeContact";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import SubjectTopic from "../components/home/SubjectTopic";

const Homepage = () => {
  return (
    <div className="w-full  relative bg-white overflow-hidden flex flex-col items-center justify-start pt-5 px-0 pb-0 box-border gap-[141px] tracking-[normal] mq750:gap-[141px] mq450:gap-[141px] mq1050:h-auto">
      <section className="w-[1204px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[38px] max-w-full shrink-0 mq750:gap-[38px]">
        <Header />
        <HeroPage />
      </section>
      <SubjectTopic/>
      <img
        className="w-[608.7px] h-[542.2px] absolute my-0 mx-[!important] top-[1155px] right-[-321.7px] object-contain z-[2]"
        loading="eager"
        alt=""
        src="/vector.svg"
      />
      <HomeContact />
      <section className="w-[927px] h-[822px] absolute my-0 mx-[!important] right-[-378px] bottom-[621px]">
        <img
          className="absolute top-[0px] left-[193px] w-[734.2px] h-[641.2px] object-contain"
          alt=""
          src="/vector-2.svg"
        />
        <img
          className="absolute top-[515px] left-[0px] w-[500px] h-[307px] object-cover z-[1]"
          alt=""
          src="/httpslottiefilescomanimationssupportlk5ffcoejh@2x.png"
        />
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;