import React from "react";
import BannerOutsource from "../Components/Outsource/BannerOutsource";
import ProjectsWEWorked from "../Components/Outsource/ProjectsWeWorked";
import HireDeliveryTeam from "../Components/Outsource/HireDeliveryTeam";
import WhyOutsourceWithGglink from "../Components/Outsource/WhyOutsourceWithGglink";
import WebDevelopmentOutsource from "../Components/Outsource/WebDevelopmentOutsource"
import BenefitsOfOutsourcing from "../Components/Outsource/BenefitsOfOutsourcing";
import TechnologiesWeUseOutsource from "../Components/Outsource/TechnologiesWeUseOutsource";
import CaseStudiesOutsource from "../Components/Outsource/CaseStudiesOutsiurce";
import OutsourceTopSoftwareDevelopers from "../Components/Outsource/OutsourceTopSoftwareDevelopers";
import OurBlogOutsource from "../Components/Outsource/OurBlogOutsource";
const Outsource = () => {
  return(
    <div>
      <BannerOutsource />
      <ProjectsWEWorked />
      <HireDeliveryTeam />
      <WhyOutsourceWithGglink />
      <WebDevelopmentOutsource />
      <BenefitsOfOutsourcing />
      <TechnologiesWeUseOutsource />
      <CaseStudiesOutsource />
      <OutsourceTopSoftwareDevelopers />
      <OurBlogOutsource />
    </div>
  );
}

export default Outsource;