import React from "react";
import BannerAbout from "../Components/Aboutus/Banner-about";
import AutomateAbout from "../Components/Aboutus/Automate-about";
import MissionVision from "../Components/Aboutus/MissionVision";
import Ourvalues from "../Components/Aboutus/Ourvalues";
import London from "../Components/Aboutus/London";
import Dhaka from "../Components/Aboutus/Dhaka";
import LondonGallery from "../Components/Aboutus/LondonGallery";
import DhakaGallery from "../Components/Aboutus/DhakaGallery";
import FaqAbout from "../Components/Aboutus/FaqAboutus";
import { AtGG } from "../Components/Aboutus/AtGG";

const Aboutus = () => {
    return (
        <div>
            <BannerAbout />
            <AutomateAbout />
            <MissionVision />
            <Ourvalues />
            <London />
            <LondonGallery />
            <AtGG />
            <Dhaka />
            <DhakaGallery />
            <FaqAbout />
        </div>
    )
}

export default Aboutus