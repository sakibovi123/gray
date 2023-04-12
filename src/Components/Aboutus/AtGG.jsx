import React from 'react'
import customer from "../../Assets/Icons/customer-focus.png"
import believe from "../../Assets/Icons/team-work.png"
import love from "../../Assets/Icons/love-we-do.png"


export const AtGG = () => {
  return (
    <div>
        <h1 className="text-2xl text-center font-semibold my-14">
            At GGLink, We Are
        </h1>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
            <div id="cardBody" className="flex flex-col items-center justify-center h-[250px] rounded md:w-[25%] bg-white p-5 shadow-2xl my-4 md:my-0 mx-4">
                <div id="iconSection" className="py-5">
                    <img src={customer} alt={customer} />
                </div>
                <div id="titleSection">
                    <h1 className="text-xl font-semibold">
                        Customer Focused
                    </h1>
                </div>
                <div id="description" className="text-center">
                    <p className="py-2 font-normal">
                        All our work is focused on our customers' requirements and helping clients with the best services.
                    </p>
                </div>
            </div>

            <div id="cardBody" className="flex flex-col items-center justify-center h-[250px] rounded md:w-[25%] bg-white p-5 shadow-2xl my-4 md:my-0 mx-4">
                <div id="iconSection" className="py-5">
                    <img src={believe} alt={customer} />
                </div>
                <div id="titleSection">
                    <h1 className="text-xl font-semibold">
                        Customer Focused
                    </h1>
                </div>
                <div id="description" className="text-center">
                    <p className="py-2 font-normal">
                        All our work is focused on our customers' requirements and helping clients with the best services.
                    </p>
                </div>
            </div>

            <div id="cardBody" className="flex flex-col items-center justify-center h-[250px] rounded md:w-[25%] bg-white p-5 shadow-2xl my-4 md:my-0 mx-4">
                <div id="iconSection" className="py-5">
                    <img src={love} alt={customer} />
                </div>
                <div id="titleSection">
                    <h1 className="text-xl font-semibold">
                        Customer Focused
                    </h1>
                </div>
                <div id="description" className="text-center">
                    <p className="py-2 font-normal">
                        All our work is focused on our customers' requirements and helping clients with the best services.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
