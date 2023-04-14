import React from "react";
import blogCardImage1 from "../../Assets/Images/adrienne-li-image-our-blog-outsource.webp"
import {AiFillStar} from "react-icons/ai"

const OurBlogOutsource = () => {
    return(
        <div className="mt-32 px-2 xl:w-10/12 mx-auto 2xl:w-8/12">
            <div id="header-section" className="text-center">
                <p className="font-semibold mb-10 text-slate-800">
                    Our Blog
                </p>

                <p className="font-semibold text-2xl text-slate-800 mb-6">
                    What our customers say about us
                </p>

                <p className="text-gray-500">
                    We have helped 1000s of customers over the years, here is what some of them have to say. 
                </p>
            </div>

            <div id="cards-section" className="mt-12 md:flex justify-center items-center md:h-[500px]">
                <div id="card-1" className="w-11/12 mx-auto py-10 md:w-3/12">
                    <div id="image" className="flex items-center justify-center">
                        <img className="rounded-full" src={blogCardImage1} alt="" />
                    </div>

                    <div id="text" className="w-11/12 mx-auto text-center mt-4 ">
                        <p className="mb-5">
                            "Great to work with , Was extremely helpful and communicated clearly with me the entire time throughout the project. "
                        </p>

                        <p className="mb-3">
                            <AiFillStar className="inline-block text-amber-400 text-3xl" /> <AiFillStar className="inline-block text-amber-400 text-3xl"/> <AiFillStar className="inline-block text-amber-400 text-3xl"/> <AiFillStar className="inline-block text-amber-400 text-3xl"/> <AiFillStar className="inline-block text-amber-400 text-3xl"/>
                        </p>

                        <p className="text-lg font-semibold mb-2">
                            Adrienne Li
                        </p>

                        <p>
                            Senior Marketing Manager - McGregor Polytunnels Ltd
                        </p>
                    </div>
                </div>

                <div id="divider" className="w-full h-px bg-gray-300 my-5 md:w-px md:h-full md:bg-gray-300 md:mx-3"></div>

                <div id="card-2" className="w-11/12 mx-auto py-10 md:w-4/12 md:w-3/12">
                    <div id="image" className="flex items-center justify-center">
                        <img className="rounded-full" src={blogCardImage1} alt="" />
                    </div>

                    <div id="text" className="w-11/12 mx-auto text-center mt-4">
                        <p className="mb-5">
                            "Great to work with , Was extremely helpful and communicated clearly with me the entire time throughout the project. "
                        </p>

                        <p className="mb-3">
                            <AiFillStar className="inline-block text-amber-400 text-3xl" /> <AiFillStar className="inline-block text-amber-400 text-3xl"/> <AiFillStar className="inline-block text-amber-400 text-3xl"/> <AiFillStar className="inline-block text-amber-400 text-3xl"/> <AiFillStar className="inline-block text-amber-400 text-3xl"/>
                        </p>

                        <p className="text-lg font-semibold mb-2">
                            Adrienne Li
                        </p>

                        <p>
                            Senior Marketing Manager - McGregor Polytunnels Ltd
                        </p>
                    </div>
                </div>

                <div id="divider" className="w-full h-px bg-gray-300 my-5 md:w-px md:h-full md:bg-gray-300 md:mx-3"></div>

                <div id="card-3" className="w-11/12 mx-auto py-10 md:w-3/12">
                    <div id="image" className="flex items-center justify-center">
                        <img className="rounded-full" src={blogCardImage1} alt="" />
                    </div>

                    <div id="text" className="w-11/12 mx-auto text-center mt-4">
                        <p className="mb-5">
                            "Great to work with , Was extremely helpful and communicated clearly with me the entire time throughout the project. "
                        </p>

                        <p className="mb-3">
                            <AiFillStar className="inline-block text-amber-400 text-3xl" /> <AiFillStar className="inline-block text-amber-400 text-3xl"/> <AiFillStar className="inline-block text-amber-400 text-3xl"/> <AiFillStar className="inline-block text-amber-400 text-3xl"/> <AiFillStar className="inline-block text-amber-400 text-3xl"/>
                        </p>

                        <p className="text-lg font-semibold mb-2">
                            Adrienne Li
                        </p>

                        <p>
                            Senior Marketing Manager - McGregor Polytunnels Ltd
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurBlogOutsource;