import React from 'react'
import customer from "../../Assets/Icons/customer-focus.png"
import believe from "../../Assets/Icons/team-work.png"
import love from "../../Assets/Icons/love-we-do.png"


const OutsourceTopSoftwareDevelopers = () => {
  return (
    <div className="mt-32 bg-gray-200 py-16">
        <h1 className="text-lg px-2 text-center font-semibold mb-10 lg:text-2xl">
          Outsource Top Software Developers within 48 Hours
        </h1>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:items-end">
            <div id="cardBody" className="w-11/12 flex flex-col items-center justify-end h-[250px] md:w-[25%] bg-white p-5 my-4 md:my-0 ">
                <div id="titleSection" className="md:mb-4">
                    <h1 className="text-lg font-semibold text-center mb-3 md:text-2xl">
                    <span>&#8364;</span>25

                    </h1>
                    <h1 className="text-lg font-semibold text-center md:text-2xl">
                        Hourly Rate
                    </h1>
                </div>
                <div id="description" className="text-center">
                    <p className="py-2 font-normal">
                    Hire a software engineer for as little as a €25 an hour
                    </p>
                </div>
            </div>

            <div id="cardBody" className="bg-orange-500 w-11/12 flex flex-col items-center justify-end h-[250px] md:w-[25%] bg-white p-5 my-4 md:my-0 md:h-[350px]">
                <div id="titleSection" className="text-slate-50 md:mb-16">
                    <h1 className="text-lg font-semibold text-center mb-3 md:text-2xl">
                    <span>&#8364;</span>25

                    </h1>
                    <h1 className="text-lg font-semibold text-center md:text-2xl">
                        Monthly Rate
                    </h1>
                </div>
                <div id="description" className="text-center text-slate-50">
                    <p className="py-2 font-normal">
                        160 hours a week
                    </p>
                </div>
            </div>

            <div id="cardBody" className="w-11/12 flex flex-col items-center justify-end h-[250px] md:w-[25%] bg-white p-5 my-4 md:my-0">
                <div id="titleSection" className="md:mb-4">
                    <h1 className="text-lg font-semibold text-center mb-3 md:text-2xl">
                    <span>&#8364;</span>25

                    </h1>
                    <h1 className="text-lg font-semibold text-center md:text-2xl">
                        Monthly Rate
                    </h1>
                </div>
                <div id="description" className="text-center">
                    <p className="py-2 font-normal">
                      Hire a team of 5 scrum developers
                    </p>
                </div>
            </div>
        </div>

        <div id="button" className='mt-16 flex items-center justify-center'>
          <button className="border border-solid border-2 border-slate-800 py-2 px-8 hover:opacity-80 duration-300">
            Build a scrum developers
          </button>
        </div>
    </div>
  );
};

export default OutsourceTopSoftwareDevelopers;