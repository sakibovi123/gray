import React from "react";
import Banner from "../Components/HomeComponents/Banner";
import Header from "../Components/Header";
import DigitalWebSolution from "../Components/HomeComponents/DigitalWebSolution";
import OurSolutionsHome from "../Components/HomeComponents/OurSolutionsHome";
import FinancialBenefits from "../Components/HomeComponents/FinancialBenefits";
import WhyGray from "../Components/HomeComponents/WhyGray";
import TechnologiesWeUse from "../Components/HomeComponents/TechnologiesWeUse";
import OurClients from "../Components/HomeComponents/OurClients";
const Home = () => {
    return (
        <div className="">
            <Banner />
            <DigitalWebSolution />
            <OurSolutionsHome />
            <FinancialBenefits/>
            <WhyGray />
            <TechnologiesWeUse />
            <OurClients />
        </div>
    )
}

export default Home