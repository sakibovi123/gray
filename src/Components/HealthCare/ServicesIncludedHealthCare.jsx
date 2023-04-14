import React from "react";
import { FaCheck } from "react-icons/fa";

const ServicesIncludedHealthCare = () => {
    return(
        <div className="mt-32 bg-gray-200 px-2 py-24">
            <div className="sm:w-10/12 md:w-11/12 2xl:w-8/12 mx-auto lg:flex ">
                <div id="services-included" className="mb-8 lg:w-6/12">
                    <div id="heading" className="mb-6">
                        <p className="text-center text-2xl font-semibold text-slate-800 sm:text-3xl md:text-4xl">
                            Services included
                        </p>
                    </div>

                    <div id="service-list">
                        <p className="text-lg mb-3">
                            <FaCheck className="inline-block"/> Project Consultancy
                        </p>

                        <p className="text-lg mb-3">
                            <FaCheck className="inline-block"/> Project Management
                        </p>

                        <p className="text-lg mb-3">
                            <FaCheck className="inline-block"/> Design & Branding
                        </p>

                        <p className="text-lg mb-3">
                            <FaCheck className="inline-block"/> Development
                        </p>

                        <p className="text-lg mb-3">
                            <FaCheck className="inline-block"/> Testing & Debugging
                        </p>

                        <p className="text-lg">
                            <FaCheck className="inline-block"/> Maintenance
                        </p>
                    </div>
                </div>

                <div id="building-and-maintenance" className="lg:w-6/12">
                    <div id="building" className="mb-5">
                        <p className="text-normal font-semibold text-slate-800 mb-2 sm:text-xl md:text-2xl">
                            Building
                        </p>

                        <p className="text-sm sm:text-base">
                            Complete our questionnaire, and one of our team members will contact you with the best solution. It is essential to understand how your business operates so we can create a secure and robust e-learning system for your staff and students. We then get to designing, building and tailoring it around your business and how it operates.
                        </p>
                    </div>

                    <div id="building">
                        <p className="text-normal font-semibold text-slate-800 mb-2 sm:text-xl md:text-2xl">
                            Maintenance
                        </p>

                        <p className="text-sm sm:text-base">
                            Once you are happy with the build, you will have an excellent e-learning platform. In addition, you can manage it with our team of experts and get regular system updates to make sure it runs smoothly, or you can host it with other providers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesIncludedHealthCare;