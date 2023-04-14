import React from "react";
import frontEndDevelopmentImage from "../../Assets/Images/front-end-development-image-web-development-outsource.webp";
import backEndDevelopmentImage from "../../Assets/Images/back-end-development-image-web-development-outsource.webp";
import fullStackDevelopmentImage from "../../Assets/Images/full-stack-development-image-web-development-outsource.webp";

const WebDevelopmentOutsource = () => {
  return(
    <div className="mt-32 md:w-11/12 mx-auto 2xl:w-8/12">
      <div id="section-title" className="mb-10">
        <p className="text-center text-xl font-semibold text-slate-800 lg:text-2xl xl:text-4xl">
          Web development
        </p>
      </div>

      <div id="section-content" className="md:flex justify-center ">
        {/* section 1 */}
        <div id="section-1" className="mb-10 md:mr-4">
          <div id="image" className="mx-auto w-[335px] h-[195px] border border-solid border-gray-300 p-1 md:w-[220px] md:h-[130px] lg:w-[305px] lg:h-[175px] xl:w-[365px] xl:h-[210px] mb-2">
            <img className="w-full h-full" src={frontEndDevelopmentImage} alt="" />
          </div>

          <div id="text" className="text-center">
            <p className="font-semibold mb-6">
              Front end development
            </p>

            <div className="border border-solid border-slate-800 border-2 p-3 w-max mx-auto text-sm cursor-pointer hover:opacity-75 duration-200">
              <p>
                <span>&#8364;</span>3,000 Monthly
              </p>

              <p>
                160 Working Hours/month
              </p>          
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div id="section-2" className="mb-10 md:mr-4">
          <div id="image" className="mx-auto w-[335px] h-[195px] border border-solid border-gray-300 p-1 md:w-[220px] md:h-[130px] lg:w-[305px] lg:h-[175px] xl:w-[365px] xl:h-[210px] mb-2">
            <img className="w-full h-full" src={backEndDevelopmentImage} alt="" />
          </div>

          <div id="text" className="text-center">
            <p className="font-semibold mb-6">
              Back end development
            </p>

            <div className="border border-solid border-slate-800 border-2 p-3 w-max mx-auto text-sm cursor-pointer hover:opacity-75 duration-200">
              <p>
                <span>&#8364;</span>3,500 Monthly
              </p>

              <p>
                160 Working Hours/month
              </p>          
            </div>
          </div>
        </div>

        {/* section 3 */}
        <div id="section-3" className="">
          <div id="image" className="mx-auto w-[335px] h-[195px] border border-solid border-gray-300 p-1 md:w-[220px] md:h-[130px] lg:w-[305px] lg:h-[175px] xl:w-[365px] xl:h-[210px] mb-2">
            <img className="w-full h-full" src={fullStackDevelopmentImage} alt="" />
          </div>

          <div id="text" className="text-center">
            <p className="font-semibold mb-6">
              Full stack development
            </p>

            <div className="border border-solid border-slate-800 border-2 p-3 w-max mx-auto text-sm cursor-pointer hover:opacity-75 duration-200">
              <p>
                <span>&#8364;</span>4,000 Monthly
              </p>

              <p>
                160 Working Hours/month
              </p>          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentOutsource;