import React from "react";
import BannerCrm from "../Components/CustomerRelationshipManagement/BannerCrm";
import CentralisedSystemBoost from "../Components/CustomerRelationshipManagement/CentralisedSystemBoost";
import { KeyFeaturesCrm } from "../Components/CustomerRelationshipManagement/KeyFeaturesCrm";
import TechnologiesWeUseCrm from "../Components/CustomerRelationshipManagement/TechnologiesWeUseCrm";
import FinancialBenefits from "../Components/HomeComponents/FinancialBenefits";
import FinancialBenefitsCrm from "../Components/CustomerRelationshipManagement/FinancialBenefitsCrm";
import BenefitsSummaryTableCrm from "../Components/CustomerRelationshipManagement/BenefitsSummaryTableCrm";
import ServicesIncludedCrm from "../Components/CustomerRelationshipManagement/ServicesIncludedCrm";

const CustomerRelationshipManagement = () => {
    return(
        <div>
            <BannerCrm />
            <CentralisedSystemBoost />
            <KeyFeaturesCrm />
            <TechnologiesWeUseCrm />
            <FinancialBenefitsCrm />
            <BenefitsSummaryTableCrm />
            <ServicesIncludedCrm />
        </div>
    );
}

export default CustomerRelationshipManagement;