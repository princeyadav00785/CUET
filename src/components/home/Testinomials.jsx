import { useMemo } from "react";

const Testinomials = ({
  ellipseFrame,
  mohanSingh,
  propWidth,
  propBoxShadow,
  propLeft,
  propColor,
  propColor1,
}) => {
  const frameGroupStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const rectangleTextFrameStyle = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
    };
  }, [propBoxShadow]);

  const ellipseFrameIconStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const enrollingInTheContainerStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const mohanSinghStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div
      className="w-[416px] flex flex-col items-start justify-start pt-1 pb-0 pr-8 pl-0 box-border max-w-full text-center text-xs-2 text-white font-inter"
      style={frameGroupStyle}
    >
      <div className="self-stretch flex flex-col items-center justify-end py-[49px] pr-3 pl-[7px] box-border relative min-h-[266px]">
        <div
          className="w-full h-[238px] absolute my-0 mx-[!important] right-[0px] bottom-[0px] left-[0px] rounded-[16.02px] bg-gray-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(50px)]"
          style={rectangleTextFrameStyle}
        />
        <img
          className="w-[56.1px] h-[56.1px] absolute my-0 mx-[!important] top-[0px] left-[calc(50%_-_28.1px)] rounded-[50%] object-cover z-[1]"
          loading="eager"
          alt=""
          src={ellipseFrame}
          style={ellipseFrameIconStyle}
        />
        <div className="self-stretch flex flex-col items-center justify-start gap-[21px]">
          <div
            className="self-stretch relative  z-[1]"
            style={enrollingInTheContainerStyle}
          >
            <p className="m-0">{`"Enrolling in the online CUET course was a game-changer for me. `}</p>
            <p className="m-0">{`The comprehensive material, interactive lessons, and personalized `}</p>
            <p className="m-0">{`support elevated my preparation. I not only gained confidence but `}</p>
            <p className="m-0">{`also achieved remarkable results. Thank you for paving the way to `}</p>
            <p className="m-0">my success!"</p>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start py-0 px-2.5 gap-[13px] text-lgi-2">
            <div className="self-stretch h-[0.8px] relative box-border z-[1] border-t-[0.8px] border-solid border-white" />
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[5px]">
              <div
                className="relative font-semibold z-[1]"
                style={mohanSinghStyle}
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

export default Testinomials;