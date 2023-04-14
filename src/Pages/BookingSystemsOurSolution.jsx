import React from "react";
import BannerBooking from "../Components/BookingSystemsComponents/BannerBooking";
import WhatDoYouGet from "../Components/BookingSystemsComponents/WhatDoYouGet";
import { KeyFeaturesBookingSystem } from "../Components/BookingSystemsComponents/KeyFeaturesBookingSystem";
import TechnologiesWeUseCrm from "../Components/CustomerRelationshipManagement/TechnologiesWeUseCrm";
import TechnologiesWeUse from "../Components/HomeComponents/TechnologiesWeUse";
import TechnologiesWeUseBookingSystem from "../Components/BookingSystemsComponents/TechnologiesWeUseBookingSystem";
import BenefitsOfBookingSystem from "../Components/BookingSystemsComponents/BenefitsOfBookingSystem";
import BenefitsSummaryTableBookingSystem from "../Components/BookingSystemsComponents/BenefitsSummaryTableBookingSystem";
import ServicesIncludedBookingSystem from "../Components/BookingSystemsComponents/ServicesIncludeBookingSystem";

const BookingSystemsOurSolutions = () => {
    return(
        <div>
            <BannerBooking />
            <WhatDoYouGet />
            <KeyFeaturesBookingSystem />
            <TechnologiesWeUseBookingSystem />
            <BenefitsOfBookingSystem />
            <BenefitsSummaryTableBookingSystem />
            <ServicesIncludedBookingSystem />
        </div>
    );
};

export default BookingSystemsOurSolutions;