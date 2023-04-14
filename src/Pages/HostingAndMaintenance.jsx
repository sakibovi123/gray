import React from "react";
import BannerMaintenance from "../Components/HostingAndMaintenance/BannerMaintenance";
import ImprovedPerformance from "../Components/HostingAndMaintenance/ImprovedPerformance";
import { KeyFeaturesMaintenance } from "../Components/HostingAndMaintenance/KeyFeaturesMaintenance";


const HostingAndMaintenance = () => {
  return(
    <div>
      <BannerMaintenance />
      <ImprovedPerformance />
      <KeyFeaturesMaintenance />
    </div>
  );
};

export default HostingAndMaintenance;