import React from "react";
import bbcImage from "../../Assets/Images/bbc-image-case-studies-outsource.png";
import gradJobsImage from "../../Assets/Images/gradjobs-image-case-studies-outsource.png";
import mitsubishiImage from "../../Assets/Images/mitsubishi-image-case-studies-outsource.png";

const CaseStudiesOutsource = () => {
  return(
    <div className="mt-32 md:w-11/12 mx-auto 2xl:w-8/12">
      <div id="header">
        <p className="text-xl text-center font-semibold text-slate-800 mb-6">
          Case studies
        </p>
      </div>

      <div id="section-contents" className="md:flex">
          <div id="bbc" className="mb-8 md:w-4/12 ">
            <div id="image-box" className="w-10/12 border border-solid border-gray-300 mx-auto p-3.5 ">
              <img className="mx-auto" width={"200px"}  src={bbcImage} alt="" />
            </div>

            <div id="text" className="mt-2">
              <p className="font-semibold text-center">
                BBC
              </p>
            </div>
          </div>

          <div id="grad-jobs" className="mb-8 md:w-4/12">
            <div id="image-box" className="w-10/12 border border-solid border-gray-300 mx-auto p-3.5">
              <img className="mx-auto" width={"200px"} height={"150px"} src={gradJobsImage} alt="" />
            </div>

            <div id="text" className="mt-2">
              <p className="font-semibold text-center">
                GradJobs
              </p>
            </div>
          </div>

          <div id="mitsubishi" className="mb-8 md:w-4/12">
            <div id="image-box" className="w-10/12 border border-solid border-gray-300 mx-auto p-3.5">
              <img className="mx-auto" width={"200px"} height={"150px"} src={mitsubishiImage} alt="" />
            </div>

            <div id="text" className="mt-2">
              <p className="font-semibold text-center">
                Mitsubishi
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default CaseStudiesOutsource;