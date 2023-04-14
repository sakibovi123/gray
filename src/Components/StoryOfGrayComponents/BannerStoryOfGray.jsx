import React from 'react'
import portfolio from "../../Assets/Images/portfolio.png"
import journeyImageBannerStoryOfGray from "../../Assets/Images/journey-image-BannerStoryOfGray.webp"

export default function BannerStoryOfGray() {
  return (
    <div>
        <div className={"bg-gray-100 md:w-full py-24"}>
            <div className={"flex flex-col md:flex-row items-center justify-center"}>
                <div className={"w-full mx-32"}>
                    <h1 className={"text-3xl md:text-5xl"}>
                      How it all started

                    </h1>
                    <p className={"text-md font-normal my-4"}>
                     GGLink officially started in 2005 in London as a graphic design company
                    </p>
                </div>
                <img src={journeyImageBannerStoryOfGray} className={"w-full bg-center bg-cover"} alt=""/>
            </div>
        </div>
    </div>
  )
}