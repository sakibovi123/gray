import React from 'react'
import google from "../Assets/Images/GoogleMapTA.webp"

export const Contact = () => {
  return (
    <div className="">
        <div className="container mx-auto my-14">
            <h1 className="text-center text-3xl text-slate-800">
                Get in touch
            </h1>
            <p className="text-center text-gray-500 text-lg">
                Complete the form below and a member of our team will contact you.
            </p>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center w-full border-t-2 py-24">
            <form action="" className="border p-5 w-full md:w-[40%]">
                <input type="text" className="border p-2 outline-0 rounded-full w-full" placeholder="Full name" />

                <input type="text" className="border p-2 outline-0 rounded-full w-full my-4" placeholder="Full name" />

                <input type="text" className="border p-2 outline-0 rounded-full w-full my-4" placeholder="Full name" />

                <select name="" id="" className="border p-2 outline-0 rounded-full w-full my-4">
                    <option value="">Select a solution</option>
                    <option value="e-Learning">e-Learning</option>
                    <option value="e-Commerce">e-Commerce</option>
                    <option value="CRM">CRM</option>
                    <option value="e-Health">e-Health</option>
                    <option value="e-Booking">e-Booking</option>
                    <option value="e-Networking">e-Networking</option>
                </select>

                <select name="" id="" className="border p-2 outline-0 rounded-full w-full my-4">
                    <option value="">Select a service</option>
                    <option value="e-Learning">Project Consultation</option>
                    <option value="e-Commerce">Project Management</option>
                    <option value="CRM">Design & Branding</option>
                    <option value="e-Health">Development</option>
                    <option value="e-Booking">Testing & Debugging</option>
                    <option value="e-Networking">Maintenance</option>
                </select>

                <select name="" id="" className="border p-2 outline-0 rounded-full w-full my-4">
                    <option value="">Select Budget</option>
                    <option value="e-Learning">€ 9000+</option>
                    <option value="e-Commerce">€ 20,000</option>
                    <option value="CRM">€ 30,000</option>
                    <option value="e-Health">€40,000</option>
                    <option value="e-Booking">€ 50,000</option>
                    <option value="e-Networking">€ 60,000</option>
                    <option value="e-Networking">€ 80,000</option>
                    <option value="e-Networking">€ 90,000</option>
                    <option value="e-Networking">€ 1,00,000</option>
                </select>

                <textarea name="" id="" cols="10" rows="10" className="border p-2 outline-0 rounded w-full my-4">Please type message</textarea>
                <button className="border-2 border-gray-500 p-2 outline-0 rounded-full w-full my-4">
                    Submit
                </button>
            </form>

            <img src={google} className="w-full md:w-[50%] h-full mx-5" alt="" />
        </div>

    </div>
  )
}
