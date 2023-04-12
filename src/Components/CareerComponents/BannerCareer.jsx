import React from 'react'
import portfolio from "../../Assets/Images/portfolio.png"

export default function BannerCareer() {
  return (
    <div>
        <div className={"bg-gray-100 md:w-full py-24"}>
            <div className={"flex flex-col md:flex-row items-center justify-center"}>
                <div className={"w-full mx-32"}>
                    <h1 className={"text-3xl md:text-5xl"}>
                    Explore life at GGLink

                    </h1>
                    <p className={"text-md font-normal my-4"}>
                    We have worked across a wide range of sectors over the years. As a result, our team have earned a lot as we grow.
                    </p>
                </div>
                <img src={portfolio} className={"w-full bg-center bg-cover"} alt=""/>
            </div>
        </div>
    </div>
  )
}
