import React from "react"
import ecommerce from '../../Assets/Images/e-Commerce-3-new.jpg'

const BannerAbout = () => {
    return (
        <div id={"about-us-banner"} className={"bg-cover bg-center h-[570px] w-full"}>
            <div id={"text"} className={"container mx-auto md:w-[60%] text-left font-bold text-5xl md:text-7xl flex flex-col justify-center"}>
                <p className={"text-white md:w-[620px] my-32 md:my-32"}>
                    Serving local and international clients since 2005
                </p>
            </div>
        </div>
    )
}

export default BannerAbout