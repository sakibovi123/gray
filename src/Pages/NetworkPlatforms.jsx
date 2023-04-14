import React from "react";
import BannerNetwork from "../Components/NetworkPlatforms/BannerNetwork";
import BusinessConnectionNetwork from "../Components/NetworkPlatforms/BusinessConnectionsNetwork";
import { KeyFeaturesNetwork } from "../Components/NetworkPlatforms/KeyFeaturesNetwork";
import TechnologiesWeUseNetwork from "../Components/NetworkPlatforms/TechnologiesWeUseNetwork";
import UnlockFinancialPotentialNetwork from "../Components/NetworkPlatforms/UnlockFinancialPotentialNetwork";
import FinancialBenefitsTableNetwork from "../Components/NetworkPlatforms/FinancialBenefitsTableNetwork";
import ServicesIncludedNetwork from "../Components/NetworkPlatforms/ServicesIncludedNetwork";

const NetworkPlatforms = () => {
    return(
        <div>
            <BannerNetwork /> 
            <BusinessConnectionNetwork />
            <KeyFeaturesNetwork />
            <TechnologiesWeUseNetwork />
            <UnlockFinancialPotentialNetwork />
            <FinancialBenefitsTableNetwork />
            <ServicesIncludedNetwork />
            
        </div>
    );
};

export default NetworkPlatforms;