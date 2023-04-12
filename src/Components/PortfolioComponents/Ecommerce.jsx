import React from "react";
import {FaCheck} from "react-icons/fa"
import eLearning from "../../Assets/Icons/elearning.webp"
import eCommerce from "../../Assets/Icons/ecommerce.webp"
import eCommerceImg from "../../Assets/Porfolio/ecommerce.webp"


const Ecommerce = ()=> {
    return (
        <div className="my-24">
            <h1 className="text-center text-5xl text-slate-700 font-bold">e-Commerce Portfolios</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 my-7 bg-white">
            <div className="flex flex-col items-start justify-center w-full md:w-[75%] p-7">
                    
                    <img src={eCommerce} className="h-7 mx-4" alt="" />
                    <p className="font-bold text-xl text-slate-700">
                        e-Commerce
                    </p>
                    <p className="text-2xl font-bold text-slate-800">
                    The Entertainer: Toys Children's Toys & More
                    </p>
                    <p>
                    The Entertainer Ltd. is the UK's largest independent toy retailer, which operates more than 170 stores. The company was founded by the husband and wife team Catherine and Gary Grant in 1981, when Gary purchased a local toy shop in Amersham, Buckinghamshire, England
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

                        <a href="https://www.thetoyshop.com/" className="text-2xl font-bold text-slate-700">
                            The Toys Shop
                        </a>
            </div>
                <img src={eCommerceImg} className="w-full" alt="" />
               
            </div>
        </div>
    )
}

export default Ecommerce