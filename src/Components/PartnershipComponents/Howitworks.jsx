import React from 'react'
import grow from "../../Assets/Images/grow.webp"
import referral from "../../Assets/Images/referral.webp"
import register from "../../Assets/Images/register.webp"
import grab from "../../Assets/Images/grab-link.webp"
import checkEarnings from "../../Assets/Images/check-earnings.webp"


export const Howitworks = () => {
  return (
    
    <div className="">
        <div className="cotainer mx-auto my-24">
    
            <h1 className="text-5xl font-bold text-center text-slate-800 py-7">
                How it Works
            </h1>
            
            <div id={"process-automation-text-left"} className={"flex flex-col-reverse md:flex-column md:items-center justify-between mb-20 lg:flex-row xl:justify-evenly 2xl:justify-center"}>
                <div id={"text-part"} className={"w-full px-4 py-2 md:w-10/12 lg:w-6/12 md:pr-10 xl:ml-6 xl:w-6/12 2xl:w-4/12"}>
                    <div id={"title"} className={"capitalize mb-4 text-xl lg:mb-3.5 lg:text-2xl font-semibold"}>
                    <p>
                        Register as a partner
                    </p>
                    </div>

                    <div className={"text-base text-gray-600 leading-7 mb-3"}>
                    <p>
                        The process is relatively easy. Simply fill in our simple to use partnership application form, and our team will review your application.
                    </p>
                    </div>

                    <div className={"text-base text-gray-600 leading-7 mb-3"}>
                    <p>
                        In addition will translate to increased revenue and profits because you can scale up your processes, increase your output, market or sell to a larger market.
                    </p>
                    </div>
                </div>

                <div id={"image-part"} className={"w-full mb-2 md:w-10/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12"}>
                    <img src={register} alt="" className={"rounded-xl mx-auto md:ml-0 md:mr-auto lg:mx-auto xl:mx-auto 2xl:py-3"} />
                </div>
            </div>

            <div id={"process-automation-text-left"} className={"flex flex-col-reverse md:flex-column md:items-center justify-between mb-20 lg:flex-row xl:justify-evenly 2xl:justify-center"}>
                
                <div id={"image-part"} className={"w-full mb-2 md:w-10/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12"}>
                    <img src={grab} alt="" className={"rounded-xl mx-auto md:ml-0 md:mr-auto lg:mx-auto xl:mx-auto 2xl:py-3"} />
                </div>
                
                <div id={"text-part"} className={"w-full px-4 py-2 md:w-10/12 lg:w-6/12 md:pr-10 xl:ml-6 xl:w-6/12 2xl:w-4/12"}>
                    <div id={"title"} className={"capitalize mb-4 text-xl lg:mb-3.5 lg:text-2xl font-semibold"}>
                    <p>
                        Grab your unique link
                    </p>
                    </div>

                    <div className={"text-base text-gray-600 leading-7 mb-3"}>
                    <p>
                        ​​Once your application is accepted, you will receive a unique partner tracking URL solely to include online. It will allow you to see exactly where the traffic from your link came from on your dashboard. In addition, you can use it on your website to enable traffic to flow to the GGLink website.
                    </p>
                    </div>

                    <div className={"text-base text-gray-600 leading-7 mb-3"}>
                    <p>
                        In addition will translate to increased revenue and profits because you can scale up your processes, increase your output, market or sell to a larger market.
                    </p>
                    </div>
                </div>

                
            </div>

            <div id={"process-automation-text-left"} className={"flex flex-col-reverse md:flex-column md:items-center justify-between mb-20 lg:flex-row xl:justify-evenly 2xl:justify-center"}>
                <div id={"text-part"} className={"w-full px-4 py-2 md:w-10/12 lg:w-6/12 md:pr-10 xl:ml-6 xl:w-6/12 2xl:w-4/12"}>
                    <div id={"title"} className={"capitalize mb-4 text-xl lg:mb-3.5 lg:text-2xl font-semibold"}>
                    <p>
                        Check earnings 24/7
                    </p>
                    </div>

                    <div className={"text-base text-gray-600 leading-7 mb-3"}>
                    <p>
                        You track the status of your earnings. Log in to our partnership page and view the number of clicks to your link. In addition, you will be able to track the name and contact details of the referral and make relevant communications in getting them to become a paying customer with us. 
                    </p>
                    </div>

                    <div className={"text-base text-gray-600 leading-7 mb-3"}>
                    <p>
                        In addition will translate to increased revenue and profits because you can scale up your processes, increase your output, market or sell to a larger market.
                    </p>
                    </div>
                </div>

                <div id={"image-part"} className={"w-full mb-2 md:w-10/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12"}>
                    <img src={checkEarnings} alt="" className={"rounded-xl mx-auto md:ml-0 md:mr-auto lg:mx-auto xl:mx-auto 2xl:py-3"} />
                </div>
            </div>




        </div>
    </div>
  )
}
