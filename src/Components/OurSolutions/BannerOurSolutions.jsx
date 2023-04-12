import React from "react";
import bannerBackgroundImage from "../../Assets/Images/banner-image-our-solutions-page.webp";

const BannerOurSolutions = () => {
  return(
    // <div id={"banner-our-solutions"} className={"w-full h-[400px] bg-cover bg-center brightness-50"}>
    //   <div>
    //     <p className={"text-white"}>
    //       End-to-end digital solutions
    //     </p>
    //   </div>
    // </div>
    <div className={"relative w-full h-[380px]  overflow-hidden md:h-[520px]"}>
      <img className={"object-cover w-full h-full brightness-50"} src={bannerBackgroundImage} alt="" />
      
      <div className={"absolute w-full py-2.5 text-slate-50 font-bold text-4xl top-1/3 left-[10px] ml-3 sm:text-5xl md:top-[35%] md:left-[4%] lg:text-6xl 2xl:left-[15%]"}>
        <p className={"w-[380px] sm:w-[430px] md:w-[550px] lg:w-[730px] xl:w-[740px] 2xl:w-[740px] tracking-tight"}>
          End-to-end digital solutions
        </p>
      </div>
    </div>
  );
};

export default BannerOurSolutions;