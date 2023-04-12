import React from "react";
import portfolio from "../../Assets/Images/portfolio.png"

const OurPortfolio = () => {
    return (
        <div className={"bg-gray-100 w-full"}>
            <div className={"flex flex-col md:flex-row items-center justify-center"}>
                <div className={"w-full mx-32"}>
                    <h1 className={"text-3xl md:text-5xl"}>
                        Our Portfolio
                    </h1>
                    <p className={"text-md font-normal my-4"}>
                        Working with our clients to create web solutions that drive engagement.
                    </p>
                </div>
                <img src={portfolio} className={"w-full bg-center bg-cover"} alt=""/>
            </div>
        </div>
    )
}

export default OurPortfolio