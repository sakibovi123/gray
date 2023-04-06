import React from "react"


const MissionVision = ()=> {
    return (
        <div>
            <div className={"container mx-auto flex flex-col md:flex-row items-center justify-center md:w-full sm:w-[70%] p-0 md:p-24 lg-p- my-24"}>
                <div className={"flex flex-col items-center mx-7"}>
                    <h1 className={"text-3xl font-semibold text-slate-800"}>
                        Our Mission
                    </h1>
                    <p className={"text-lg my-5 text-left w-full"}>
                        Our mission is to solve human problems with our software. We help businesses to lighten the workload and automate the process. Our software is more than just lines of codes. It makes companies run faster and more efficiently.
                    </p>
                </div>
                <div className={"bg-gray-300 h-[170px] md:w-1"}>

                </div>
                <div className={"flex flex-col items-center mx-7 my-[-100px] md:my-0"}>
                    <h1 className={"text-3xl font-semibold text-slate-800"}>
                        Our Vision
                    </h1>
                    <p className={"text-lg text-left my-5"}>
                        Our vision is to automate the process for businesses across all platforms. We are focused on high-quality solutions in making life easier and enhancing productivity with cutting edge technology.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MissionVision