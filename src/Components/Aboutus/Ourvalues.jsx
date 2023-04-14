import React from "react";
import handshake from '../../Assets/Images/respect-accountability-honesty.webp'



const Ourvalues = () => {
    return (
        <div className="container mx-auto w-full md:w-[60%]">
            <div className={"text-center my-32"}>
                <h1 className={"font-bold text-5xl text-slate-800"}>
                Our Values
                </h1>

                <p className={"text-normal text-gray-500 my-5"}>
                What defines us is the dedication to our client's success, the innovation that helps them achieve their goals, trust and personal responsibility.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5 my-24 border-b-2">
                <img src={handshake} alt="" className="h-[400px] mx-0 md:mx-24" />

                <div className="p-5 flex flex-col items-start justify-center">
                    <h1 className="text-3xl font-semibold">Respect, Accountability, Honesty</h1>
                    <p className="my-3">
                    We aim to be 100% transparent with our customers and help point out software issues and how it affects the overall process of their business. We work closely to ensure the right solutions and keep our customers well informed in every aspect of the development process.
                    </p>
                </div>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5 border-b-2">

                <div className="p-5 flex flex-col items-start justify-center">
                    <h1 className="text-3xl font-semibold">Respect, Accountability, Honesty</h1>
                    <p className="my-3">
                    We aim to be 100% transparent with our customers and help point out software issues and how it affects the overall process of their business. We work closely to ensure the right solutions and keep our customers well informed in every aspect of the development process.
                    </p>
                </div>

                <img src={handshake} alt="" className="h-[400px] mx-0 md:mx-24" />

                
            </div>
        </div>
    )
}

export default Ourvalues