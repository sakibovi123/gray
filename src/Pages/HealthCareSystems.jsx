import React from "react";
import BannerHealthCare from "../Components/HealthCare/BannerHealthCare";
import EqualHealthcare from "../Components/HealthCare/EqualHealthcare";
import { KeyFeaturesHealthCare } from "../Components/HealthCare/KeyFeaturesHealthCare";
import TechnologiesWeUseHealthCare from "../Components/HealthCare/TechnologiesWeUseHealthCare";
import TelehealthApps from "../Components/HealthCare/TelehealthApps";
import HealthCareBenefitsTable from "../Components/HealthCare/HealthCareBenefitsTable";
import ServicesIncludedHealthCare from "../Components/HealthCare/ServicesIncludedHealthCare";

const HealthCareSystems = () => {
    return(
        <div>
            <BannerHealthCare />
            <EqualHealthcare />
            <KeyFeaturesHealthCare />
            <TechnologiesWeUseHealthCare />
            <TelehealthApps />
            <HealthCareBenefitsTable />
            <ServicesIncludedHealthCare />
        </div>
    );
};

export default HealthCareSystems;