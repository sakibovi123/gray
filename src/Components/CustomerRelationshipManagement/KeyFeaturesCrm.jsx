import React from 'react'
import {FaArrowRight} from "react-icons/fa"


export const KeyFeaturesCrm = () => {
  return (
    <div className="bg-gray-200 md:h-[400px] p-5">
        <div className="container mx-auto w-full md:w-[60%] lg:w-full">
            <h1 className="py-9 text-xl text-gray-700 font-normal text-center">
                We are always hiring new and talented individuals
            </h1>

            <h1 className="text-5xl font-bold text-center text-slate-700">
                Why Should you join GGLink
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-3 gap-y-3 my-16">
                <div className="col-1 flex items-center">
                    <span className=""><FaArrowRight /></span><p className="mx-3">Lovely offices</p>
                </div>
                <div className="col-1 flex items-center  text-left">
                    <span className=""><FaArrowRight /></span><p className="mx-3">Team building events</p>
                </div>
                <div className="col-1 flex items-center ">
                    <span className=""><FaArrowRight /></span><p className="mx-3">Positive environment</p>
                </div>
                <div className="col-1 flex items-center ">
                    <span className=""><FaArrowRight /></span><p className="mx-3">Career development</p>
                </div>
                <div className="col-1 flex items-center ">
                    <span className=""><FaArrowRight /></span><p className="mx-3">Team building events</p>
                </div>
                <div className="col-1 flex items-center ">
                    <span className=""><FaArrowRight /></span><p className="mx-3">Can-do attitude</p>
                </div>
                <div className="col-1 flex items-center ">
                    <span className=""><FaArrowRight /></span><p className="mx-3">No dress code</p>
                </div>
                <div className="col-1 flex items-center ">
                    <span className=""><FaArrowRight /></span><p className="mx-3">Positive environment</p>
                </div>
                <div className="col-1 flex items-center ">
                    <span className=""><FaArrowRight /></span><p className="mx-3">Snack sharing</p>
                </div>
                <div className="col-1 flex items-center ">
                    <span className=""><FaArrowRight /></span><p className="mx-3">Remote work</p>
                </div>
                <div className="col-1 flex items-center ">
                    <span className=""><FaArrowRight /></span><p className="mx-3">Unlimited coffee</p>
                </div>
                <div className="col-1 flex items-center ">
                    <span className=""><FaArrowRight /></span><p className="mx-3">Lovely offices</p>
                </div>

            </div>
        </div>
    </div>
  )
}
