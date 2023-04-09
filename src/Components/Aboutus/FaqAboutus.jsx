import React from "react";
import { useEffect, useState } from "react";
import {FaPlus, FaMinus} from 'react-icons/fa'

const FaqAbout = ()=> {

    const [open, isOpen] = useState(false)
    const [open2, isOpen2] = useState(false)


    const getStarted = [
        {
            qustion: "What are the minimum criteria?",
            answer: "There are no minimum criteria if you are looking for a software solution from scratch or Redesign and develop an existing one. Our planning and consultation team will collect and review the requirement and then guide you."
        },

        {
            qustion: "How do I provide requirements?",
            answer: "When you work with us, we will supply you with a questionnaire outlining the requirements to help us create your website."
        },
+
        {
            qustion: "Is the platform bespoke?",
            answer: "Yes, all of our websites involve our team understanding the client's business and the types of products and services they will offer. Then, we get to work on the website and tailor it to their requirements with the relevant details."
        },
        {
            qustion: "Can you add additional functions to my existing platform?",
            answer: "No. This is because many systems are restricted depending on how and with which software they are built. So it may end up costing you a lot more than creating it from scratch with us"
        }
        

    ]


    return (
        <div className="my-24">
            <div className="container mx-auto flex flex-col">
                <h1 className="text-left font-semibold text-2xl p-2">Getting Started</h1>

                {
                    getStarted.map((item, index) => (
                        <div key={index} className="w-full bg-white rounded-xl shadow-xl hover:shadow-2xl cursor-pointer duration-300 p-5 my-3">
                        <div className="flex flex-row justify-between">
                            <p className="font-semibold text-md p-3">
                                {item.qustion}
                            </p>
    
                            {!open ? <FaPlus onClick={()=> isOpen(true)}
                            className="transition delay-300"
                            /> : <FaMinus onClick={()=>isOpen(false)} />}
                            
    
                        </div>
                        
    
                        <p className={`w-full ${open ? "block" : "hidden"} text-sm my-5 border-b-2 p-3`}>
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