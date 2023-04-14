import React from "react";
import BannerEcommerceOurSolutions from "../Components/EcommerceOurSolutions/BannerEcommerceOurSolutions";
import BoostYourSalesEcommerceOurSolutions from "../Components/EcommerceOurSolutions/BoostYourSalesEcommerceOurSolutions";
import { KeyFeaturesEcommerceOurSolutions } from "../Components/EcommerceOurSolutions/KeyFeaturesEcommerceOurSolutions";
import TechnologiesWeUseElearningOurSolutions from "../Components/ElearningOurSolutions/TechnologiesWeUseElearningOurSolutions";
import TechnologiesWeUseEcommerceOurSolutions from "../Components/EcommerceOurSolutions/TechnologiesWeUseEcommerceOurSolutions";
import BenefitsOfEcommerce from "../Components/EcommerceOurSolutions/BenefitsOfEcommerce";
import FinancialBenefitsEcommerceOurSolutions from "../Components/EcommerceOurSolutions/FinancialBenefitsEcommerceOurSolution";
import ServicesIncludedEcommerceOurSolutions from "../Components/EcommerceOurSolutions/ServicesIncludedEcommerceOurSolutions";

const EcommerceOurSolutions = () => {
    return(
        <div>
            <BannerEcommerceOurSolutions />
            <BoostYourSalesEcommerceOurSolutions />
            <KeyFeaturesEcommerceOurSolutions />
            <TechnologiesWeUseEcommerceOurSolutions />
            <BenefitsOfEcommerce />
            <FinancialBenefitsEcommerceOurSolutions />
            <ServicesIncludedEcommerceOurSolutions />
        </div>
    );
}

export default EcommerceOurSolutions;