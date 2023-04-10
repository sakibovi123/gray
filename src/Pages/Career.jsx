import React from "react";
import BannerCareer from "../Components/CareerComponents/BannerCareer";
import { Benefits } from "../Components/CareerComponents/Benefits";
import Howto from "../Components/CareerComponents/Howto";
import { WhyJoinGG } from "../Components/CareerComponents/WhyJoinGG";


const Career = ()=> {
    return (
        <div>
            <BannerCareer />
            <Benefits />
            <WhyJoinGG />
            <Howto/>
        </div>
    )
}

export default Career