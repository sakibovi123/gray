import React from "react";
import teamdhk1 from "../../Assets/Images/Dhaka/team-1.webp"
import teamdhk2 from "../../Assets/Images/Dhaka/team-2.webp"
import teamdhk3 from "../../Assets/Images/Dhaka/team-3.webp"
import teadhk4 from "../../Assets/Images/Dhaka/team-4.webp"
import teamdhk5 from "../../Assets/Images/Dhaka/team-5.webp"
import teamdhk6 from "../../Assets/Images/Dhaka/team-6.webp"
import teamdhk7 from "../../Assets/Images/Dhaka/team-7.webp"
import teamdhk8 from "../../Assets/Images/Dhaka/team-8.webp"




const DhakaGallery = ()=> {
    return (
        <div>
            <div className="container mx-auto grid grid-cols-4 gap-y-7">
                <img src={teamdhk1} className="rounded" alt="" />
                <img src={teamdhk2} className="rounded" alt="" />
                <img src={teamdhk3} className="rounded" alt="" />
                <img src={teadhk4} className="rounded" alt="" />
                <img src={teamdhk5} className="rounded" alt="" />
                <img src={teamdhk6} className="rounded" alt="" />
                <img src={teamdhk7} className="rounded" alt="" />
                <img src={teamdhk8} className="rounded" alt="" />
            </div>
        </div>
    )
}

export default DhakaGallery