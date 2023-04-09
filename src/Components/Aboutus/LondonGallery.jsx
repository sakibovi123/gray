import React from "react"
import team1 from "../../Assets/Images/team-1.webp"
import team2 from "../../Assets/Images/team-2.webp"
import team3 from "../../Assets/Images/team-3.webp"
import team4 from "../../Assets/Images/team-4.webp"
import team5 from "../../Assets/Images/team-5.webp"
import team6 from "../../Assets/Images/team-6.webp"
import team7 from "../../Assets/Images/team-7.webp"
import team8 from "../../Assets/Images/team-8.webp"

const LondonGallery = ()=> {
    return (
        <div className={"container mx-auto"}>
            <div className="grid md:grid-cols-4 gap-y-7 gap-x-2 flex justify-center">
                <img src={team1} className="rounded" alt="" />
                <img src={team2} className="rounded" alt="" />
                <img src={team3} className="rounded" alt="" />
                <img src={team4} className="rounded" alt="" />
                <img src={team5} className="rounded" alt="" />
                <img src={team6} className="rounded" alt="" />
                <img src={team7} className="rounded" alt="" />
                <img src={team8} className="rounded" alt="" />
            </div>
        </div>
    )
}

export default LondonGallery