import React from "react";
import BannerOurSolutions from "../Components/OurSolutions/BannerOurSolutions";
import RevolutioniseOurSolutions from "../Components/OurSolutions/RevotutioniseOurSolutions";
import TechnologiesWeUseOurSolutionsPage from "../Components/OurSolutions/TechnologiesWeUseOurSolutionsPage";
import HowItWorksOurSolutions from "../Components/OurSolutions/HowItWorksOurSolutions";
import WhyGgLinkOurSolutions from "../Components/OurSolutions/WhyGgLinkOurSolutions";

const OurSolutions = () => {
  return(
    <div>
      <BannerOurSolutions />
      <RevolutioniseOurSolutions />
      <TechnologiesWeUseOurSolutionsPage />
      <HowItWorksOurSolutions />
      <WhyGgLinkOurSolutions />
    </div>
  );
};

export default OurSolutions;