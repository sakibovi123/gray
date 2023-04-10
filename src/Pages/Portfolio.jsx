import React from "react";
import OurPortfolio from "../Components/PortfolioComponents/OurPortfolio";
import Ourwork from "../Components/PortfolioComponents/Ourwork";
import ELearning from "../Components/PortfolioComponents/ELearning";
import Ecommerce from "../Components/PortfolioComponents/Ecommerce";
import CRM from "../Components/PortfolioComponents/CRM";
import Ebooking from "../Components/PortfolioComponents/eBooking";
import Enetworking from "../Components/PortfolioComponents/eNetworking";
import Ehealth from "../Components/PortfolioComponents/eHealth";
import PortfolioFAQ from "../Components/PortfolioComponents/PortfolioFAQ";

const Portfolio = ()=> {
    return (
        <div>
            <OurPortfolio />
            <Ourwork />
            <ELearning />
            <Ecommerce />
            <CRM />
            <Ebooking />
            <Enetworking />
            <Ehealth />
            <PortfolioFAQ />
        </div>
    )
}

export default Portfolio