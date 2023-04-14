import React from 'react'
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";



const Footer = () => {
    return (
        <div>
            <div className={"flex flex-col items-center justify-center container mx-auto w-full md:w-[40%] my-32"}>
                <p className={"text-2xl md:text-5xl text-center font-semibold text-slate-800"}>
                    Looking for a reliable technology partner to grow your business?
                </p>
                <a href="" className="md:my-9 duration-500 delay-200 hidden md:flex items-center justify-between font-normal border-2 border-gray-600 p-3 rounded-2xl hover:bg-gray-600 hover:text-white">
                    <span className="iconify text-2xl" data-icon="material-symbols:phone-enabled-outline"></span>
                    Talk To An Expert
                </a>

            </div>
            <div className={"flex flex-col items-start justify-between -my-[5rem]"}>
                <div className={"w-full bg-gray-200 md:h-[120px] flex flex-col md:flex-row items-center justify-center"}>
                    <a href="/privacy-and-legal" className={"my-7 md:mx-7 bg-white rounded-2xl p-3 text-center hover:bg-gray-600 hover:text-white duration-500 font-semibold"}>
                        Privacy & Legal
                    </a>
                    <a href="/story-of-gray" className={"my-7 md:mx-7 bg-white rounded-2xl p-3 text-center hover:bg-gray-600 hover:text-white duration-500 font-semibold"}>
                        Story of Gray
                    </a>
                    <a href="/outsource" className={"my-7 md:mx-7 bg-white rounded-2xl p-3 text-center hover:bg-gray-600 hover:text-white duration-500 font-semibold"}>
                        Outsource
                    </a>
                    <a href="" className={"my-7 md:mx-7 bg-white rounded-2xl p-3 text-center hover:bg-gray-600 hover:text-white duration-500 font-semibold"}>
                        Partnership
                    </a>
                    <a href="" className={"my-7 md:mx-7 bg-white rounded-2xl p-3 text-center hover:bg-gray-600 hover:text-white duration-500 font-semibold"}>
                        Send an Email
                    </a>
                    <a href="" className={"my-7 md:mx-7 bg-white rounded-2xl p-3 text-center hover:bg-gray-600 hover:text-white duration-500 font-semibold"}>
                        Contact us
                    </a>
                </div>

                <div id={"Socials-copy"} className={"border-t-2 w-full flex flex-row items-center justify-around bg-gray-200 p-5 border-gray-300"}>
                    <p className={"font-normal text-sm md:text-lg"}>
                        © Gray 2023, All right received.
                    </p>

                    <div className={"flex items-center justify-center text-2xl cursor-pointer"}>
                        <IoLogoFacebook className={"text-blue-700 mx-2 transition ease-in-out delay-250 hover:scale-110"} />
                        <IoLogoLinkedin className={"text-blue-600 mx-2 transition ease-in-out delay-250 hover:scale-110"}/>
                        <IoLogoTwitter className={"text-blue-700 mx-2 transition ease-in-out delay-250 hover:scale-110"} />
                        <IoLogoYoutube className={"text-red-700 mx-2 transition ease-in-out delay-250 hover:scale-110"} />
                    </div>

                </div>
            </div>



        </div>

    )
}

export default Footer
