import React from 'react'
import customer from "../../Assets/Icons/elearning.webp"
import believe from "../../Assets/Icons/ecommerce.webp"
import love from "../../Assets/Icons/crm.webp"
import healthcare from "../../Assets/Icons/health.webp"
import booking from "../../Assets/Icons/booking.webp"
import network from "../../Assets/Icons/networking.webp"


export const PartnerSolution = () => {
  return (
    <div className="my-24">
        <h1 className="text-5xl text-center font-semibold text-slate-800">
            Our Solutions
        </h1>
        <p className="text-center py-7">
            Our solutions are planned, designed, coded and configured to increase productivity, save you time and money and allow you to focus on growing your business.
        </p>
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center py-5">
        <div id="cardBody" className="transition hover:scale-125 cursor-pointer flex flex-col items-center justify-center h-[250px] rounded md:w-[25%] bg-white p-5 shadow-2xl my-4 md:my-0 mx-4">
            <div id="iconSection" className="py-5">
                <img src={customer} alt={customer} />
            </div>
            <div id="titleSection">
                <h1 className="text-xl font-semibold">
                    e-Learning
                </h1>
            </div>
            <div id="description" className="text-center">
                <p className="py-2 font-normal">
                    With our e-Learning platform, you can manage every aspect of education in one place
                </p>
            </div>
        </div>

        <div id="cardBody" className="transition hover:scale-125 cursor-pointer flex flex-col items-center justify-center h-[250px] rounded md:w-[25%] bg-white p-5 shadow-2xl my-4 md:my-0 mx-4">
            <div id="iconSection" className="py-5">
                <img src={believe} alt={customer} />
            </div>
            <div id="titleSection">
                <h1 className="text-xl font-semibold">
                    e-Commerce
                </h1>
            </div>
            <div id="description" className="text-center">
                <p className="py-2 font-normal">
                    Provide a faster buying process to your customers with our robust eCommerce software
                </p>
            </div>
        </div>

        <div id="cardBody" className="transition hover:scale-125 cursor-pointer flex flex-col items-center justify-center h-[250px] rounded md:w-[25%] bg-white p-5 shadow-2xl my-4 md:my-0 mx-4">
            <div id="iconSection" className="py-5">
                <img src={love} alt={customer} />
            </div>
            <div id="titleSection">
                <h1 className="text-xl font-semibold">
                    CRM
                </h1>
            </div>
            <div id="description" className="text-center">
                <p className="py-2 font-normal">
                    Our CRM software is designed to help you manage your day to day business operating smoothly and efficiently
                </p>
            </div>
        </div>
    </div>

    {/* row number 2 */}

    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center py-5">
        <div id="cardBody" className="transition hover:scale-125 cursor-pointer flex flex-col items-center justify-center h-[250px] rounded md:w-[25%] bg-white p-5 shadow-2xl my-4 md:my-0 mx-4">
            <div id="iconSection" className="py-5">
                <img src={healthcare} alt={customer} />
            </div>
            <div id="titleSection">
                <h1 className="text-xl font-semibold">
                Healthcare Systems
                </h1>
            </div>
            <div id="description" className="text-center">
                <p className="py-2 font-normal">
                    Modernise your healthcare business operations with our advanced e-Health management software
                </p>
            </div>
        </div>

        <div id="cardBody" className="transition hover:scale-125 cursor-pointer flex flex-col items-center justify-center h-[250px] rounded md:w-[25%] bg-white p-5 shadow-2xl my-4 md:my-0 mx-4">
            <div id="iconSection" className="py-5">
                <img src={booking} alt={customer} />
            </div>
            <div id="titleSection">
                <h1 className="text-xl font-semibold">
                Booking Systems
                </h1>
            </div>
            <div id="description" className="text-center">
                <p className="py-2 font-normal">
                    Offer your customers an online booking system that is always open, accessible and super easy to use
                </p>
            </div>
        </div>

        <div id="cardBody" className="transition hover:scale-125 cursor-pointer flex flex-col items-center justify-center h-[250px] rounded md:w-[25%] bg-white p-5 shadow-2xl my-4 md:my-0 mx-4">
            <div id="iconSection" className="py-5">
                <img src={network} alt={customer} />
            </div>
            <div id="titleSection">
                <h1 className="text-xl font-semibold">
                    Network Platforms
                </h1>
            </div>
            <div id="description" className="text-center">
                <p className="py-2 font-normal">
                    Our e-Networking software is designed to increase interaction between your brand and customers
                </p>
            </div>
        </div>
    </div>
</div>
  )
}
