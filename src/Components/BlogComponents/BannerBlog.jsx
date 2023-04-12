import React from 'react'
import portfolio from "../../Assets/Images/blog-banner.jpg"

export const BannerBlog = () => {
  return (
    <div>
        <div className={"bg-white md:w-full py-24 border-b-2"}>
            <div className={"flex flex-col md:flex-row items-center justify-center"}>
                <div className={"w-full mx-32"}>
                    <h1 className={"text-3xl md:text-5xl"}>
                    Recent Blogs
                    </h1>
                    <p className={"text-md font-normal my-4"}>
                    We have worked across a wide range of sectors over the years. As a result, our team have earned a lot as we grow.
                    </p>
                </div>
                <img src={portfolio} className={"md:w-[50%] bg-center bg-cover"} alt=""/>
            </div>
        </div>
    </div>
  )
}
