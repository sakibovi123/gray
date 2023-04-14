import React from "react";
import BannerTesting from "../Components/TestingAndDebugging/BannerTesting";
import ResolvingTechnicalFlaws from "../Components/TestingAndDebugging/ResolvingTechnicalFlaws";
import { KeyFeaturesTesting } from "../Components/TestingAndDebugging/KeyFeaturesTesting";


const TestingAndDebugging = () => {
  return(
    <div>
      <BannerTesting />
      <ResolvingTechnicalFlaws />
      <KeyFeaturesTesting />
    </div>
  );
};

export default TestingAndDebugging;