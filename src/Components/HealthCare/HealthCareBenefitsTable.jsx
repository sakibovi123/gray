import React from "react";
import { FaCheck } from "react-icons/fa";

const HealthCareBenefitsTable = () => {
    return(
        <div className="mt-32 sm:w-10/12 2xl:w-7/12 mx-auto">
            <div id="header" className="text-center mb-10">
                <p className="text-2xl font-semibold text-slate-800 mb-6">
                    Financial Benefits Summary
                </p>

                <p className="text-gray-500">
                    Our platform comes with many financial benefits, some of those outlined below
                </p>
            </div>

            <div id="table" className="">
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
                                    <td className="border p-3 cursor-pointer flex justify-center py-4"><FaCheck /></td>
                                </tr>
                                <tr className="border">
                                    <td className="border p-3 cursor-pointer">Project Management</td>
                                    <td className="border p-3 cursor-pointer flex justify-center py-4" ><FaCheck /></td>
                                </tr>
                                <tr className="border p-3">
                                    <td className="border p-3 cursor-pointer">Branding & Design</td>
                                    <td className="border p-3 cursor-pointer flex justify-center py-4"><FaCheck /></td>
                                </tr>
                                <tr className="border p-3">
                                    <td className="border p-3 cursor-pointer">Development</td>
                                    <td className="border p-3 flex justify-center py-4"><FaCheck /></td>
                                </tr>
                                <tr className="border p-3">
                                    <td className="border p-3 cursor-pointer">Testing & Debugging</td>
                                    <td className="border p-3 cursor-pointer flex justify-center py-4"><FaCheck /></td>
                                </tr>
                                <tr className="border p-3">
                                    <td className="border p-3 cursor-pointer">Maintenance and Support</td>
                                    <td className="border p-3 cursor-pointer flex justify-center py-4"><FaCheck /></td>
                                </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    );
};

export default HealthCareBenefitsTable;