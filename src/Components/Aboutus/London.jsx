import React from "react";
import ukTeam from "../../Assets/Images/uk-team.webp"

const London = () => {
    return (
        <div className="my-32 bg-white md:p-[3rem]">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="p-5">
                    <h1 className="text-4xl text-slate-700 text-center">
                        Meet Our London Team
                    </h1>
                    <p className="font-medium my-7 text-md text-center">
                        We have a positive can-do attitude toward our projects and believe we have the experience to help businesses grow fluidly. Our London team include creative and technical individuals with many skills and talents.
                    </p>
                </div>

                <div className={"h-full w-full"}>
                    <img src={ukTeam} className={"h-full w-full"} alt="" />
                </div>
            </div>
        </div>
    )
}

export default London