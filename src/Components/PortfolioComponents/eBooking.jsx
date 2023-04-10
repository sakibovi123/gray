import React from "react";
import {FaCheck} from "react-icons/fa"

import ebooking from "../../Assets/Icons/booking.webp"
import ebookingImg from "../../Assets/Porfolio/ebooking.webp"


const Ebooking = ()=> {
    return (
        <div className="my-24">
            <h1 className="text-center text-5xl text-slate-700 font-bold">e-Booking Portfolios</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 my-7 bg-white">
            <div className="flex flex-col items-start justify-center w-full md:w-[75%] p-7">
                    
                    <img src={ebooking} className="h-7 mx-4" alt="" />
                    <p className="font-bold text-xl text-slate-700">
                    e-Booking
                    </p>
                    <p className="text-2xl font-bold text-slate-800">
                    Accept Bookings And Payments 24/7
                    </p>
                    <p>
                    Modernise your business operations with our advanced health management software. You can manage every aspect of a hospital operation. Our system improves overall efficiency by avoiding human errors. In addition, you can easily monitor supplies in the inventory. As a result, the software is cost-effective and easily manageable. Patient privacy is paramount; therefore, we ensure all data is kept safe, secure, and encrypted.
                    Your clients can book multiple appointments with your business or pay via gift vouchers under our booking system.
                    </p>
                 
                    <table className="border my-7 w-full">
                        <thead className="border cursor-pointer">
                            <tr className="border">
                            <th className="border p-3">Working Area</th>
                            <th className="border">Included</th>
                            </tr>
                        </thead>
                        <tbody className="border">
                            <tr className="border">
                                <td className="border p-3 cursor-pointer">Consultation</td>
                                <td className="border p-3 cursor-pointer"><FaCheck /></td>
                            </tr>
                            <tr className="border">
                                <td className="border p-3 cursor-pointer">Project Management</td>
                                <td className="border p-3 cursor-pointer" ><FaCheck /></td>
                            </tr>
                            <tr className="border p-3">
                                <td className="border p-3 cursor-pointer">Branding & Design</td>
                                <td className="border p-3 cursor-pointer"><FaCheck /></td>
                            </tr>
                            <tr className="border p-3">
                                <td className="border p-3 cursor-pointer">Development</td>
                                <td className="border p-3"><FaCheck /></td>
                            </tr>
                            <tr className="border p-3">
                                <td className="border p-3 cursor-pointer">Testing & Debugging</td>
                                <td className="border p-3 cursor-pointer"><FaCheck /></td>
                            </tr>
                            <tr className="border p-3">
                                <td className="border p-3 cursor-pointer">Maintenance and Support</td>
                                <td className="border p-3 cursor-pointer"><FaCheck /></td>
                            </tr>
                        </tbody>
                        </table>

                        <a href="https://booki.ggtasker.co.uk/" className="text-2xl font-bold text-slate-700">
                            Booki
                        </a>
            </div>
                <img src={ebookingImg} className="w-full" alt="" />
               
            </div>
        </div>
    )
}

export default Ebooking