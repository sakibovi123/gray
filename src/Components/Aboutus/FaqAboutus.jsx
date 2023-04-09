import React from "react";
import { useEffect, useState } from "react";
import {FaPlus, FaMinus} from 'react-icons/fa'

const FaqAbout = ()=> {

    const [open, isOpen] = useState(null)
    const [solution, isSolution] = useState(null)
    const [service, isService] = useState(null)

    const toggle = (i)=> {
        if( open === i )
        {
            return isOpen(null)
        }
        isOpen(i)
    }

    const toggleSolution = (j)=> {
        if( solution === j )
        {
            return isSolution(null)
        }
        isSolution(j)
    }

    const toggleService = (k) => {
        if ( service == k ){
            return isService(null)
        }

        isService(k)
    }


    const history = [
        {
            qustion: "When was GGLink established?",
            answer: "GGLink was established in March 2005.\n"
        },

    ]

    const ourSolution = [
        {
            qustion: "What web solutions GGLink offer?",
            answer: ""

        },
        {
            qustion: "How do I get help with a solution?",
            answer: "You can connect with us here and fill in our online form with your requirements.\n"
        }
    ]

    const ourService = [
        {
            qustion: "What services do GGLink offer?",
            answer: "" +
                "GGLink offers two types of services. The first one we call ‘Our solutions’ Is the websites/platform we specialise in for our clients. These include:\n" +
                "1. e-Learning\n" +
                "2. e-Commerce\n" +
                "3. Booking\n" +
                "4. CRM\n" +
                "5. e-Networking\n" +
                "6. e-Health\n" +
                "\n" +
                "The other ones are ‘Our Services’ where we provide bespoke services to our clients for their requirements or ongoing work. These include:\n" +
                "1. Project Consultation\n" +
                "2. Project Management\n" +
                "3. Design & Branding\n" +
                "4. Development\n" +
                "5. Testing & Debugging\n" +
                "6. Maintenance"
        },

        {
            qustion: "How long doest take to build a website?",
            answer: "Depending on the type of website you require, the more functions you add, the longer the design and development process. We also work alongside clients to ensure the process runs smoothly.\n"
        }
    ]


    return (
        <div className="my-24">
            <div className="container mx-auto md:w-[60%] flex flex-col">
                <h1 className="text-left font-semibold text-2xl p-2">History</h1>
                {
                    history.map((item, i) => (
                        <div key={i} className="w-full bg-white rounded-xl shadow-xl hover:shadow-2xl cursor-pointer duration-300 p-5 my-3">
                        <div className="flex flex-row justify-between">
                            <p className="font-semibold text-md p-3">
                                {item.qustion}
                            </p>
                            <button className={"bg-none border-none text-2xl"} onClick={()=>toggle(i)}>
                                {
                                    open===i ? '-' : '+'
                                }
                            </button>

                            
    
                        </div>
                        
    
                        <p className={`w-full ${open===i ? "block" : "hidden"} text-sm my-5 border-b-2 p-3`}>
                          {item.answer}
                        </p>
                    </div>
                    ))
                }
            </div>

            <div className="container mx-auto md:w-[60%] flex flex-col">
                <h1 className="text-left font-semibold text-2xl p-2">Our Solutions</h1>
                {
                    ourSolution.map((item, j) => (
                        <div key={j} className="w-full bg-white rounded-xl shadow-xl hover:shadow-2xl cursor-pointer duration-300 p-5 my-3">
                            <div className="flex flex-row justify-between">
                                <p className="font-semibold text-md p-3">
                                    {item.qustion}
                                </p>
                                <button className={"bg-none border-none text-2xl"} onClick={()=>toggleSolution(j)}>
                                    {
                                        solution===j ? '-' : '+'
                                    }
                                </button>
                            </div>

                            <p className={`w-full ${solution===j ? "block" : "hidden"} text-sm my-5 border-b-2 p-3`}>
                                {item.answer}
                            </p>
                        </div>
                    ))
                }
            </div>

            <div className="container mx-auto md:w-[60%] flex flex-col">
                <h1 className="text-left font-semibold text-2xl p-2">Our Service</h1>
                {
                    ourService.map((item, k) => (
                        <div key={k} className="w-full bg-white rounded-xl shadow-xl hover:shadow-2xl cursor-pointer duration-300 p-5 my-3">
                            <div className="flex flex-row justify-between">
                                <p className="font-semibold text-md p-3">
                                    {item.qustion}
                                </p>
                                <button className={"bg-none border-none text-2xl"} onClick={()=>toggleService(k)}>
                                    {
                                        service===k ? '-' : '+'
                                    }
                                </button>
                            </div>

                            <p className={`w-full ${service===k ? "block" : "hidden"} text-sm my-5 border-b-2 p-3`}>
                                {item.answer}
                            </p>
                        </div>
                    ))
                }
            </div>



        </div>
    )
}

export default FaqAbout