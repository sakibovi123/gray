import React from "react";
import { PartnetshipBanner } from "../Components/PartnershipComponents/PartnetshipBanner";
import { Benefits } from "../Components/PartnershipComponents/Benefits";
import { Financial } from "../Components/PartnershipComponents/Financial";
import { PartnerSolution } from "../Components/PartnershipComponents/PartnerSolution";
import { PartnerBenefits } from "../Components/PartnershipComponents/keybenefits";
import { Howitworks } from "../Components/PartnershipComponents/Howitworks";



const Partnership = ()=> {
    return (
        <div>
            <PartnetshipBanner />
            <Benefits />
            <Financial />
            <PartnerSolution />
            <PartnerBenefits />
            <Howitworks />
        </div>
    )
}

export default Partnership