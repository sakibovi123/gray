import React from "react";
import journeyImageBannerStoryOfGray from "../../Assets/Images/journey-image-BannerStoryOfGray.webp"

const BannerStoryOfGray = () => {
  return(
    <div>
      <div className={"bg-gray-200 w-full h-screen lg:flex lg:h-[565px] lg:items-center lg:justify-between"}>
        <div id={"text"} className={" h-1/2 flex flex-col justify-center items-center lg:h-full lg:w-6/12 "}>
          <p className={"text-3xl font-semibold text-slate-800 mb-16 px-2"}>
            How it all started
          </p>

          <p className="text-center px-2">
            GGLink officially started in 2005 in London as a graphic design company
          </p>
        </div>

        <div id="image" className="w-full h-1/2 lg:h-full lg:w-5/12">
          <img className={"w-full"} src={journeyImageBannerStoryOfGray} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BannerStoryOfGray;