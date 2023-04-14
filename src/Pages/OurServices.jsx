import React from "react";
import BannerServices from "../Components/OurServicesComponents/BannerServices";
import InsightsToHelp from "../Components/OurServicesComponents/InsightsToHelp";
import { KeyFeaturesServices } from "../Components/OurServicesComponents/KeyFeaturesServices";

const OurServices = () => {
  return(
    <div>
      <BannerServices />
      <InsightsToHelp />
      <KeyFeaturesServices />
    </div>
  );
};

export default OurServices;