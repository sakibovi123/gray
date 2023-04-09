import React from "react";
import Banner from "../Components/HomeComponents/Banner";
import Header from "../Components/Header";
import DigitalWebSolution from "../Components/HomeComponents/DigitalWebSolution";
import OurSolutions from "../Components/HomeComponents/OurSolutions";
import FinancialBenefits from "../Components/HomeComponents/FinancialBenefits";
import WhyGray from "../Components/HomeComponents/WhyGray";
import TechnologiesWeUse from "../Components/HomeComponents/TechnologiesWeUse";
import OurClients from "../Components/HomeComponents/OurClients";
const Home = () => {
    return (
        <div className="">
            <Banner />
            <DigitalWebSolution />
            <OurSolutions />
            <FinancialBenefits/>
            <WhyGray />
            <TechnologiesWeUse />
            <OurClients />
        </div>
    )
}

export default Home