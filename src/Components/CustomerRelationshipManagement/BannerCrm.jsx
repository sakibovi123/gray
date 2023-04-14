import React from "react";
import ecommerce from '../../Assets/Images/e-Commerce-3-new.jpg';

const BannerCrm = () => {
    return (
        <div id={"banner-crm"} className={"bg-cover bg-center h-[570px] w-full"}>
            <div id={"text"} className={"container mx-auto md:w-[60%] text-left font-bold text-5xl md:text-7xl flex flex-col justify-center"}>
                <p className={"text-white md:w-[620px] my-32 md:my-32"}>
                    Manage clients, staff and operations with our CRM solutions
                </p>
            </div>
        </div>
    );
};

export default BannerCrm;