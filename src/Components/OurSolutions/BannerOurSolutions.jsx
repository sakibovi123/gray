import React from "react";
import bannerBackgroundImage from "../../Assets/Images/banner-image-our-solutions-page.webp";

const BannerOurSolutions = () => {
  return(
    <div id={"banner-our-solutions"} className={"bg-cover brightness-80 bg-center h-[570px] w-full"}>
    <div id={"text"} className={"container mx-auto md:w-[60%] text-left font-bold text-5xl md:text-7xl flex flex-col justify-center "}>
        <p className={"text-white md:w-[620px] my-32 md:my-32"}>
            End-to-end digital solutions
        </p>
    </div>
</div>
  );
};

export default BannerOurSolutions;