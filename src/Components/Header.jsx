import React, {useState} from "react";
import Logo from '../Assets/Logos/gg-logo.png'
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";



const Header = () => {

    const [open, setOpen] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)

    return (
        <nav className="p-1 bg-white w-full top-0 md:sticky">
            <div className="container mx-auto flex items-center font-medium justify-between w-full 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full">
                <div className={"z-50 p-3 md:w-auto w-full flex justify-between"}>
                    <a href="/">
                        <img src={Logo} alt="logo" className="md:cursor-pointer h-[70px]" />
                    </a>

                    <div className={"md:hidden lg:hidden"} onClick={()=> setOpen(!open)}>
                        {
                        open ? <IoClose className={"text-2xl my-5 md:hidden"} /> : <AiOutlineMenu className={"text-2xl my-5 md:hidden"} />
                        }

                    </div>
                </div>
                <div className="hidden md:hidden lg:flex items-center justify-center font-normal">
                    <ul className="hover:bg-gray-100 p-3">
                        <li href="" className="flex flex-row items-center justify-between text-md">
                            <span className="iconify mx-2 text-xl" data-icon="material-symbols:work-outline-sharp"></span>
                            <a href="/about-us" className="pointer-cursor">About us</a>
                        </li>
                    </ul>

                    <ul className="hover:bg-gray-100 p-3">
                        <li href="" className="flex flex-row items-center justify-between text-md" onMouseOver={()=>setIsOpen(true)}
                            onMouseOut={()=>setIsOpen(false)}
                        >
                            <span className="iconify mx-2 text-xl" data-icon="tabler:award"></span>
                            <a href="" className="pointer-cursor">Our Solutions</a>


                        </li>


                            <ul className={`shadow-xl text-left text-lg p-7 cursor-pointer flex flex-col absolute bg-white ${isOpen ? "block" : "hidden"} group-hover:block`} onMouseOver={()=>setIsOpen(true)} onMouseOut={()=>setIsOpen(false)}>
                                <li className={"hover:bg-gray-50 p-3"}>E-Ecommerce</li>
                                <li className={"hover:bg-gray-50 p-3"}>E-Learning</li>
                                <li className={"hover:bg-gray-50 p-3"}>Customer Relationship Management</li>
                                <li className={"hover:bg-gray-50 p-3"}>Booking Systems</li>
                                <li className={"hover:bg-gray-50 p-3"}>HealthCare Systems</li>
                                <li className={"hover:bg-gray-50 p-3"}>Network Platforms</li>
                            </ul>



                    </ul>

                    <ul className="hover:bg-gray-100 p-3">
                        <li href="" className="flex flex-row items-center justify-between text-md"
                            onMouseOver={()=>setIsOpen2(true)}
                            onMouseOut={()=>setIsOpen2(false)}
                        >

                            <span className="iconify mx-2 text-xl" data-icon="material-symbols:handshake-outline"></span>
                            <a href="/our-portfolio" className="pointer-cursor">Our Services</a>
                        </li>

                        <ul className={`shadow-xl text-left text-lg p-7 cursor-pointer flex flex-col absolute bg-white ${isOpen2 ? "block" : "hidden"} group-hover:block`} onMouseOver={()=>setIsOpen2(true)} onMouseOut={()=>setIsOpen2(false)}>
                            <li className={"hover:bg-gray-50 p-3"}>Project Consultancy</li>
                            <li className={"hover:bg-gray-50 p-3"}>Project Management</li>
                            <li className={"hover:bg-gray-50 p-3"}>Design & Branding</li>
                            <li className={"hover:bg-gray-50 p-3"}>Development</li>
                            <li className={"hover:bg-gray-50 p-3"}>Testing & Debugging</li>
                            <li className={"hover:bg-gray-50 p-3"}>Hosting & Maintenance</li>
                        </ul>
                    </ul>

                    <ul className="hover:bg-gray-100 p-3">
                        <li href="" className="flex flex-row items-center justify-between text-md"
                            onMouseOver={()=>setIsOpen3(true)}
                            onMouseOut={()=>setIsOpen3(false)}
                        >
                            <span className="iconify mx-2 text-xl" data-icon="mdi:book-open-outline"></span>
                            <a href="/our-portfolio" className="pointer-cursor">Digital Marketing</a>
                        </li>
                        <ul className={`shadow-xl text-left text-lg p-7 cursor-pointer flex flex-col absolute bg-white ${isOpen3 ? "block" : "hidden"} group-hover:block`} onMouseOver={()=>setIsOpen3(true)} onMouseOut={()=>setIsOpen3(false)}>
                            <li className={"hover:bg-gray-50 p-3"}>Project Consultancy</li>
                            <li className={"hover:bg-gray-50 p-3"}>Project Management</li>
                            <li className={"hover:bg-gray-50 p-3"}>Design & Branding</li>
                            <li className={"hover:bg-gray-50 p-3"}>Development</li>
                            <li className={"hover:bg-gray-50 p-3"}>Testing & Debugging</li>
                            <li className={"hover:bg-gray-50 p-3"}>Hosting & Maintenance</li>
                        </ul>
                    </ul>

                    <ul className="hover:bg-gray-100 p-3">
                        <li href="" className="flex flex-row items-center justify-between text-md">
                            <span className="iconify mx-2 text-xl" data-icon="mdi:book-open-outline"></span>
                            <a href="/our-portfolio" className="pointer-cursor">Portfolio</a>
                        </li>
                    </ul>
                    <ul className="hover:bg-gray-100 p-3">
                        <li href="" className="flex flex-row items-center justify-between text-md">
                            <span className="iconify mx-2 text-xl" data-icon="fa-solid:laptop-code"></span>
                            <a href="/career" className="pointer-cursor">Career</a>
                        </li>
                    </ul>
                    <ul className="hover:bg-gray-100 p-3">
                        <li href="" className="flex flex-row items-center justify-between text-md">
                            <span className="iconify mx-2 text-xl" data-icon="mdi:blog-outline"></span>
                            <a href="/blogs" className="pointer-cursor">Blog</a>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <a href="/contact-us" className="duration-500 delay-200 hidden lg:flex md:hidden items-center justify-between font-normal border-2 border-gray-600 p-3 rounded-full hover:bg-gray-600 hover:text-white">
                        <span className="iconify text-2xl" data-icon="material-symbols:phone-enabled-outline"></span>
                        Talk To An Expert
                    </a>
                </div>

            </div>

            {/*mobile navbar*/}
            <ul className={`md:hidden lg:hidden bg-white absolute overflow-auto w-full h-full bottom-0 py-24 pl-4 duration-500 ${ open ? 'left-0' : 'left-[-100%]' }`}>
                <li href="/about-us" className="flex flex-row items-center justify-center text-md py-7">
                    <span className="iconify mx-2 text-xl" data-icon="material-symbols:work-outline-sharp"></span>
                    <a href="" className="pointer-cursor">About us</a>
                </li>
                <li href="" className="flex flex-row items-center justify-center text-md py-7">
                    <span className="iconify mx-2 text-xl" data-icon="tabler:award"></span>
                    <a href="" className="pointer-cursor">Our Solutions</a>
                </li>
                <li href="" className="flex flex-row items-center justify-center text-md py-7">
                    <span className="iconify mx-2 text-xl" data-icon="material-symbols:handshake-outline"></span>
                    <a href="" className="pointer-cursor">Our Services</a>
                </li>
                <li href="" className="flex flex-row items-center justify-center text-md py-7">
                    <span className="iconify mx-2 text-xl" data-icon="mdi:book-open-outline"></span>
                    <a href="/our-portfolio" className="pointer-cursor">Portfolio</a>
                </li>
                <li href="" className="flex flex-row items-center justify-center text-md py-7">
                    <span className="iconify mx-2 text-xl" data-icon="fa-solid:laptop-code"></span>
                    <a href="/career" className="pointer-cursor">Career</a>
                </li>
                <li href="" className="flex flex-row items-center justify-center text-md py-7">
                    <span className="iconify mx-2 text-xl" data-icon="mdi:blog-outline"></span>
                    <a href="/blogs" className="pointer-cursor">Blog</a>
                </li>
            </ul>

        </nav>
    )
}

export default Header