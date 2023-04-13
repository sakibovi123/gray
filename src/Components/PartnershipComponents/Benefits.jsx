import React from 'react'
import grow from "../../Assets/Images/grow.webp"
import referral from "../../Assets/Images/referral.webp"
import earn from "../../Assets/Images/earn-anywhere.webp"


export const Benefits = () => {
  return (
    <div className="">
        <div className="cotainer mx-auto my-24">
            <h1 className="text-center text-lg py-5">
                HASSLE FREE, WORK FROM ANYWHERE, UNLIMITED EARNING POTENTIAL
            </h1>
            <h1 className="text-5xl font-bold text-center text-slate-800 py-7">
            The benefits of being a GGLink software reseller
            </h1>
            
            <div id={"process-automation-text-left"} className={"flex flex-col-reverse md:flex-column md:items-center justify-between mb-20 lg:flex-row xl:justify-evenly 2xl:justify-center"}>
                <div id={"text-part"} className={"w-full px-4 py-2 md:w-10/12 lg:w-6/12 md:pr-10 xl:ml-6 xl:w-6/12 2xl:w-4/12"}>
                    <div id={"title"} className={"capitalize mb-4 text-xl lg:mb-3.5 lg:text-2xl font-semibold"}>
                    <p>
                        Process automation to maximise profit
                    </p>
                    </div>

                    <div className={"text-base text-gray-600 leading-7 mb-3"}>
                    <p>
                        Process automation enhances the overall performance of a workplace. Using our advanced software, you spend less time on routine tasks and allow the software to handle many parts of your business while focusing on business growth and expansion. Not only does the automation process help businesses work more effectively, but it also decreases human input errors, including increasing the system's speed and simplifying the business process.
                    </p>
                    </div>

                    <div className={"text-base text-gray-600 leading-7 mb-3"}>
                    <p>
                        In addition will translate to increased revenue and profits because you can scale up your processes, increase your output, market or sell to a larger market.
                    </p>
                    </div>
                </div>

                <div id={"image-part"} className={"w-full mb-2 md:w-10/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12"}>
                    <img src={earn} alt="" className={"rounded-xl mx-auto md:ml-0 md:mr-auto lg:mx-auto xl:mx-auto 2xl:py-3"} />
                </div>
            </div>


            <div id={"process-automation-text-left"} className={"flex flex-col md:flex-column md:items-center justify-between mb-20 lg:flex-row xl:justify-between"}>
                <div id={"image-part"} className={"w-full mb-2 md:w-10/12 lg:w-6/12 xl:w-5/12 2xl:w-5/12 2xl:ml-auto"}>
                    <img src={referral} alt="" className={"rounded-xl mx-auto md:ml-0 md:mr-auto lg:mx-auto xl:mx-auto 2xl:py-3"} />
                </div>

                <div id={"text-part"} className={"w-full  bg-gray-200 md:w-10/12 lg:w-6/12 md:pr-10 lg:p-10"}>
                    <div className={"px-4 py-4 xl:w-11/12 2xl:w-10/12 2xl:p-10"}>
                    <div id={"title"} className={"capitalize mb-4 text-xl lg:mb-3.5 lg:text-2xl font-semibold"}>
                        <p>
                        Optimised business operation
                        </p>
                    </div>

                    <div className={"text-base text-gray-600 leading-7 mb-3"}>
                        <p>
                        We have had the invaluable experience of working with many businesses for the last seventeen years. Ensuring they practice the best ways to optimise their business efficiently and effectively.
                        </p>
                    </div>

                    <div className={"text-base text-gray-600 leading-7 mb-3"}>
                        <p>
                        Working very closely to understand the problems in the business processing and establishing an end goal where we help the clients reduce waste of time /costs. Implementing the complete automation of your business and getting rid of the unnecessary elements. Fine tuning the process and supporting clients through the lifecycle
                        </p>
                    </div>
                    </div>
                </div>
            </div>

            <div id={"process-automation-text-left"} className={"flex flex-col-reverse md:flex-column md:items-center justify-between mb-20 lg:flex-row xl:justify-evenly 2xl:justify-center"}>
                <div id={"text-part"} className={"w-full px-4 py-2 md:w-10/12 lg:w-6/12 md:pr-10 xl:ml-6 xl:w-6/12 2xl:w-4/12"}>
                    <div id={"title"} className={"capitalize mb-4 text-xl lg:mb-3.5 lg:text-2xl font-semibold"}>
                    <p>
                        Process automation to maximise profit
                    </p>
                    </div>

                    <div className={"text-base text-gray-600 leading-7 mb-3"}>
                    <p>
                        Process automation enhances the overall performance of a workplace. Using our advanced software, you spend less time on routine tasks and allow the software to handle many parts of your business while focusing on business growth and expansion. Not only does the automation process help businesses work more effectively, but it also decreases human input errors, including increasing the system's speed and simplifying the business process.
                    </p>
                    </div>

                    <div className={"text-base text-gray-600 leading-7 mb-3"}>
                    <p>
                        In addition will translate to increased revenue and profits because you can scale up your processes, increase your output, market or sell to a larger market.
                    </p>
                    </div>
                </div>

                <div id={"image-part"} className={"w-full mb-2 md:w-10/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12"}>
                    <img src={grow} alt="" className={"rounded-xl mx-auto md:ml-0 md:mr-auto lg:mx-auto xl:mx-auto 2xl:py-3"} />
                </div>
            </div>

        </div>
    </div>
  )
}
