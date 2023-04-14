import React from "react";
import BannerDevelopment from "../Components/Development/BannerDevelopment";
import AmazingCodes from "../Components/Development/AmazingCodes";
import { KeyFeaturesDevelopment } from "../Components/Development/KeyFeaturesDevelopment";

const Development = () => {
  return(
    <div>
      <BannerDevelopment />
      <AmazingCodes />
      <KeyFeaturesDevelopment />
    </div>
  );
};

export default Development;