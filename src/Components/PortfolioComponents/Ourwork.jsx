import React from "react"
import elearning from "../../Assets/Icons/elearning.webp"
import ecommerce from "../../Assets/Icons/ecommerce.webp"
import crm from "../../Assets/Icons/crm.webp"
import ebooking from "../../Assets/Icons/booking.webp"
import enetworking from "../../Assets/Icons/networking.webp"
import eHealth from "../../Assets/Icons/health.webp"

const Ourwork = ()=> {
    return (
        <div className={"container mx-auto w-[50%] my-24"}>
            <h1 className={"text-center text-4xl font-bold text-slate-700"}>
                Our Work
            </h1>
            <p className={"text-center my-4 text-lg font-normal text-gray-600"}>
                Here are just a few of our latest projects.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="flex flex-row items-center justify-center mx-3">
                    <img src={elearning} className="h-7 mx-3" alt="" />
                    <p>e-Learning</p>
                </div>
                <div className="flex flex-row items-center justify-center mx-3">
                    <img src={ecommerce} className="h-7 mx-3" alt="" />
                    <p>e-Commerce</p>
                </div>
                <div className="flex flex-row items-center justify-center mx-3">
                    <img src={crm} className="h-7 mx-3" alt="" />
                    <p>CRM</p>
                </div>
                <div className="flex flex-row items-center justify-center mx-3">
                    <img src={ebooking} className="h-7 mx-3" alt="" />
                    <p>e-Booking</p>
                </div>
                <div className="flex flex-row items-center justify-center mx-3">
                    <img src={enetworking} className="h-7 mx-3" alt="" />
                    <p>e-Networking</p>
                </div>
                <div className="flex flex-row items-center justify-center mx-3">
                    <img src={eHealth} className="h-7 mx-3" alt="" />
                    <p>e-Health</p>
                </div>
            </div>
        </div>
    )
}

export default Ourwork