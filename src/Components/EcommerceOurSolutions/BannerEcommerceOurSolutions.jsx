import React from "react";
import ecommerce from '../../Assets/Images/e-Commerce-3-new.jpg';

const BannerEcommerceOurSolutions = () => {
    return (
        <div id={"banner-ecommerce-our-solutions"} className={"bg-cover bg-center h-[570px] w-full"}>
            <div id={"text"} className={"container mx-auto md:w-[60%] text-left font-bold text-5xl md:text-7xl flex flex-col justify-center"}>
                <p className={"text-white md:w-[620px] my-32 md:my-32"}>
                    Sell more online
                </p>
            </div>
        </div>
    );
};

export default BannerEcommerceOurSolutions;