import React from "react";
import processAutomationImage from "../../Assets/Images/process-automation-image-financial-benefits.webp"
import optimisedOperationImage from "../../Assets/Images/optimise-operations-image-financial-benefits.webp"
import roiAndGrowthImage from "../../Assets/Images/roi-and-growth-image-financial-benefits.webp"

const FinancialBenefitsCrm = () => {
  return(
    <div>
      <div id={"financial-benefits-section"} className={"mt-32 xl:mt-32 2xl:mt-40"}>
        {/* section header starts here */}
        <div className={"uppercase text-gray-600 text-lg text-center mb-6"}>
          <p>
            financial benefits of digitalisation
          </p>
        </div>

        <div id={"header"} className={"text-center text-slate-800 font-semibold text-3xl mb-10 lg:mb-20 lg:text-4xl "}>
          <p>
            Automate, optimize and grow digitally
          </p>
        </div>
        {/* section header ends here */}

        {/* process automation section */}
        <div id={"process-automation-text-left"} className={"flex flex-col-reverse md:flex-column md:items-center justify-between mb-20 lg:flex-row xl:justify-evenly 2xl:justify-center"}>
          <div id={"text-part"} className={"w-full px-4 py-2 md:w-10/12 lg:w-6/12 md:pr-10 xl:ml-6 xl:w-6/12 2xl:w-4/12"}>
            <div id={"title"} className={"capitalize mb-4 text-xl lg:mb-3.5 lg:text-2xl font-semibold"}>
              <p>
                Process automation to maximise profit
              </p>
            </div>

            <div className={"text-base text-gray-600 leading-7 mb-3"}>
              <p>
                Process automation enhances the overall performance of a workplace. Using our advanced software, you spend less time on routine tasks and allow the software to handle many parts of your business while focusing on business growth and expansion. Not only does the automation process help businesses work more effectively, but it also decreases human input errors, including increasing the system's speed and simplifying the business process.
              </p>
            </div>

            <div className={"text-base text-gray-600 leading-7 mb-3"}>
              <p>
                In addition will translate to increased revenue and profits because you can scale up your processes, increase your output, market or sell to a larger market.
              </p>
            </div>
          </div>

          <div id={"image-part"} className={"w-full mb-2 md:w-10/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12"}>
            <img src={processAutomationImage} alt="" className={"rounded-xl mx-auto md:ml-0 md:mr-auto lg:mx-auto xl:mx-auto 2xl:py-3"} />
          </div>
        </div>

        {/* optimized business section */}
        <div id={"process-automation-text-left"} className={"flex flex-col md:flex-column md:items-center justify-between mb-20 lg:flex-row xl:justify-between"}>
          <div id={"image-part"} className={"w-full mb-2 md:w-10/12 lg:w-6/12 xl:w-5/12 2xl:w-5/12 2xl:ml-auto"}>
            <img src={optimisedOperationImage} alt="" className={"rounded-xl mx-auto md:ml-0 md:mr-auto lg:mx-auto xl:mx-auto 2xl:py-3"} />
          </div>

          <div id={"text-part"} className={"w-full  bg-gray-200 md:w-10/12 lg:w-6/12 md:pr-10 lg:p-10"}>
            <div className={"px-4 py-4 xl:w-11/12 2xl:w-10/12 2xl:p-10"}>
              <div id={"title"} className={"capitalize mb-4 text-xl lg:mb-3.5 lg:text-2xl font-semibold"}>
                <p>
                  Optimised business operation
                </p>
              </div>

              <div className={"text-base text-gray-600 leading-7 mb-3"}>
                <p>
                  We have had the invaluable experience of working with many businesses for the last seventeen years. Ensuring they practice the best ways to optimise their business efficiently and effectively.
                </p>
              </div>

              <div className={"text-base text-gray-600 leading-7 mb-3"}>
                <p>
                  Working very closely to understand the problems in the business processing and establishing an end goal where we help the clients reduce waste of time /costs. Implementing the complete automation of your business and getting rid of the unnecessary elements. Fine tuning the process and supporting clients through the lifecycle
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* better ROI section */}
        <div id={"process-automation-text-left"} className={"flex flex-col-reverse md:flex-column md:items-center justify-between mb-20 lg:flex-row xl:justify-evenly 2xl:justify-center"}>
          <div id={"text-part"} className={"w-full px-4 py-2 md:w-10/12 lg:w-6/12 md:pr-10 xl:ml-6 xl:w-6/12 2xl:w-4/12"}>
            <div id={"title"} className={"capitalize mb-4 text-xl lg:mb-3.5 lg:text-2xl font-semibold"}>
              <p>
                Better ROI and growth
              </p>
            </div>

            <div className={"text-base text-gray-600 leading-7 mb-3"}>
              <p>
                Our software is created to make your business efficient and take it to the next level. We build robust module software with modern technology and protocols to positively affect your bottom line.
              </p>
            </div>

            <div className={"text-base text-gray-600 leading-7 mb-3"}>
              <p>
                We aim to help grow your business with the greatest return. Having the right tech tools that work together can streamline workflow and improve productivity. Our software is tailor-made to do that.
              </p>
            </div>
          </div>

          <div id={"image-part"} className={"w-full mb-2 md:w-10/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12"}>
            <img src={roiAndGrowthImage} alt="" className={"rounded-xl mx-auto md:ml-0 md:mr-auto lg:mx-auto xl:mx-auto 2xl:py-3"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialBenefitsCrm;