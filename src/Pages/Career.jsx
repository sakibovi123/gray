import React from "react";
import BannerCareer from "../Components/CareerComponents/BannerCareer";
import { Benefits } from "../Components/CareerComponents/Benefits";
import Howto from "../Components/CareerComponents/Howto";
import { WhyJoinGG } from "../Components/CareerComponents/WhyJoinGG";
import { AreyouReady } from "../Components/CareerComponents/AreyouReady";


const Career = ()=> {
    return (
        <div>
            <BannerCareer />
            <Benefits />
            <WhyJoinGG />
            <Howto/>
            <AreyouReady />
        </div>
    )
}

export default Career