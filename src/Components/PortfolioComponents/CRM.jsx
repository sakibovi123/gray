import React from "react";
import crm from "../../Assets/Icons/crm.webp"
import crmImg from "../../Assets/Porfolio/crm.webp"
import {FaCheck} from "react-icons/fa"

const CRM = ()=> {
    return (
        <div>
            <h1 className="text-center text-5xl text-slate-700 font-bold">CRM Portfolios</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 my-7 bg-white">

                <img src={crmImg} alt="" />
                
                <div className="flex flex-col items-start justify-center w-full md:w-[75%]">
                    
                        <img src={crm} className="h-7 mx-4" alt="" />
                        <p className="font-bold text-xl text-slate-700">
                        CRM
                        </p>
                        <p className="text-2xl font-bold text-slate-800">
                        Tommy, Smart tool for your business
                        </p>
                        <p>
                        Tommy is a web-based CRM software that will help operate your business efficiently. If you are looking for easy-to-use and affordable CRM software, then Tommy is the right choice for you.
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

                            <a href="https://zimark.cn/" className="text-2xl font-bold text-slate-700">
                                Zimark Education
                            </a>
                </div>
            </div>
        </div>
    )
}

export default CRM