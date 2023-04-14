import React from "react";
import BannerELearningOurSolutions from "../Components/ElearningOurSolutions/BannerElearningOurSolutions";
import ElearningBusinessBoost from "../Components/ElearningOurSolutions/ElearningBusinessBoost";
import { KeyFeaturesElearningOurSolutions } from "../Components/ElearningOurSolutions/KeyFeaturesElearningOurSolutions";
import TechnologiesWeUse from "../Components/HomeComponents/TechnologiesWeUse";
import TechnologiesWeUseElearningOurSolutions from "../Components/ElearningOurSolutions/TechnologiesWeUseElearningOurSolutions";
import BenefitsOfElearning from "../Components/ElearningOurSolutions/BenefitsOfElearning";
import FinancialBenefitsElearningOurSolutions from "../Components/ElearningOurSolutions/FinancialBenefitsElearningOurSolutions";
import ServicesIncludedEleraningOurSolutions from "../Components/ElearningOurSolutions/ServicesIncludedElearningOurSolutions";
import FinancialBenefitsBookingSystem from "../Components/BookingSystemsComponents/FinancialBenefitsBookingSystem";

const ElearningOurSolutions = () => {
  return(
    <div>
      <BannerELearningOurSolutions />
      <ElearningBusinessBoost /> 
      <KeyFeaturesElearningOurSolutions />
      <TechnologiesWeUseElearningOurSolutions />
      <BenefitsOfElearning />
      <FinancialBenefitsElearningOurSolutions />
      <ServicesIncludedEleraningOurSolutions />
    </div>
  );
};

export default ElearningOurSolutions;