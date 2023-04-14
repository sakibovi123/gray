import React from "react";
import  professionalTeamImage from "../../Assets/Images/professional-team.png";
import competitivePricingImage from "../../Assets/Images/competitive-pricing-image-why-gray.png";
import experienceImage from "../../Assets/Images/experience-image-why-gray.png";
import happyClientsImage from "../../Assets/Images/happy-clients-image-why-gray.png";
import {TfiCrown} from "react-icons/tfi";
import {AiOutlineIdcard} from "react-icons/ai";
import {VscSmiley} from "react-icons/vsc";
import {BsCurrencyDollar} from "react-icons/bs";
import {TfiCreditCard} from "react-icons/tfi";
import {TfiCheckBox} from "react-icons/tfi";
import {TfiDirection} from "react-icons/tfi";
import {AiOutlineHome} from "react-icons/ai";
import {TfiCup} from "react-icons/tfi";
import {BsSearch} from "react-icons/bs";
import {TfiCommentAlt} from "react-icons/tfi";

const WhyGray = () => {
  return(
    <div id={"why-gray-section"} className={"px-2 sm:px-4 xl:w-10/12 xl:mx-auto 2xl:w-8/12 2xl:mt-56 2xl:mb-56"}>
      {/* header section starts here */}
      <div id={"header-section"} className={"text-center"}>
        <p className={"text-3xl text-slate-800 font-semibold mb-6 lg:text-5xl lg:mb-12"}>
          Why Gray
        </p>

        <p className={"text-normal text-gray-600 mb-20"}>
          There are infinite reasons to choose Gray for the software you require. We have an experienced team with a proven track record and excellent customer feedback.
        </p>
      </div>
      {/* header section ends here */}

      <div id={"reasons-to-choose-gray"}>
        {/* professional team */}
        <div id={"professional-team"} className={"flex flex-col-reverse md:flex-column md:items-center justify-between mb-20 lg:flex-row "}>
          <div id={"text-part"} className={"w-full md:w-10/12 lg:w-6/12 md:pr-10"}>
            <div id={"head"} className={"head mb-2.5"}>
              <span class={"capitalize font-bold text-xl"}>
                professional team
              </span>
            </div>

            <div className={"text-base leading-7 mb-6"}>
              <p>
                We consist of a team passionate about working together to create the most
                helpful software that will positively affect your business.
              </p>
            </div>

            <div id={"fully-qualified"} className={"flex mb-6"}>
              <div id={"icon"} className={"bg-[#E0F3FB] flex items-center justify-center rounded-full self-start h-16 w-16 mt-2"}>
                <TfiCrown className={"fill-sky-500"} size={"1.5rem"}/>
              </div>

              <div id={"description"} className={"w-9/12 ml-6"} >
                <p className={"text-xl font-semibold mb-2"}>
                  Fully qualified
                </p>

                <p>
                  All our team members have relevant certifications.
                </p>
              </div>
            </div>

            <div id={"experienced"} className={"flex mb-6"}>
              <div id={"icon"} className={"-z-50 bg-[#FAECCF] opacity-75 flex items-center justify-center rounded-full self-start h-16 w-16 mt-2"}>
                <AiOutlineIdcard className={"fill-amber-500"} size={"1.8rem"}/>
              </div>

              <div id={"description"} className={"w-9/12 ml-6"} >
                <p className={"text-xl font-semibold mb-2"}>
                  Experienced
                </p>

                <p>
                  All our recruits are 3+ Years minimum experience. 
                </p>
              </div>
            </div>

            <div id={"friendly"} className={"flex"}>
              <div id={"icon"} className={"-z-50 bg-[#FFD9DB] opacity-75 flex items-center justify-center rounded-full self-start h-16 w-16 mt-2"}>
                <VscSmiley className={"fill-red-500"} size={"1.8rem"}/>
              </div>

              <div id={"description"} className={"w-9/12 ml-6"} >
                <p className={"text-xl font-semibold mb-2"}>
                  Experienced
                </p>

                <p>
                  All our recruits are 3+ Years minimum experience. 
                </p>
              </div>
            </div>
          </div>

          <div id="image-part" className="w-full mb-6 sm:mb-8 md:w-10/12 lg:w-5/12">
            <img className={"w-full"} src={professionalTeamImage} alt="" />
          </div>
        </div>

        {/* competitive pricing */}
        <div id={"competitive-pricing"} className={"flex flex-col md:flex-column md:items-center justify-between mb-20 lg:flex-row "}>
        <div id={"image-part"} className={"w-full mb-6 sm:mb-8 md:w-10/12 lg:w-5/12"}>
            <img className={"w-full"} src={competitivePricingImage} alt="" />
          </div>

          <div id={"text-part"} className={"w-full md:w-10/12 lg:w-6/12 md:pr-10"}>
            <div id={"head"} className={"head mb-2.5"}>
              <span class={"capitalize font-bold text-xl"}>
                competitive pricing
              </span>
            </div>

            <div className={"text-base leading-7 mb-6"}>
              <p>
                We provide the most affordable software so that businesses of any size can purchase and take their business to the next level
              </p>
            </div>

            <div id={"fully-qualified"} className={"flex mb-6"}>
              <div id={"icon"} className={"-z-50 bg-[#E0F3FB] flex items-center justify-center rounded-full self-start h-16 w-16 mt-2"}>
                <BsCurrencyDollar className={"fill-sky-500"} size={"1.5rem"}/>
              </div>

              <div id={"description"} className={"w-9/12 ml-6"} >
                <p className={"text-xl font-semibold mb-2"}>
                  No hidden fees
                </p>

                <p>
                  We have an apparent price breakdown and no hidden fees.
                </p>
              </div>
            </div>

            <div id={"experienced"} className={"flex mb-6"}>
              <div id={"icon"} className={"-z-50 bg-[#FAECCF] opacity-75 flex items-center justify-center rounded-full self-start h-16 w-16 mt-2"}>
                <TfiCreditCard className={"fill-amber-500"} size={"1.8rem"}/>
              </div>

              <div id={"description"} className={"w-9/12 ml-6"} >
                <p className={"text-xl font-semibold mb-2"}>
                  Monthly installments
                </p>

                <p>
                  You can pay us monthly installments 
                </p>
              </div>
            </div>

            <div id={"friendly"} className={"flex"}>
              <div id={"icon"} className={"-z-50 bg-[#FFD9DB] opacity-75 flex items-center justify-center rounded-full self-start h-16 w-16 mt-2"}>
                <VscSmiley className={"fill-red-500"} size={"1.8rem"}/>
              </div>

              <div id={"description"} className={"w-9/12 ml-6"} >
                <p className={"text-xl font-semibold mb-2"}>
                  High standards
                </p>

                <p>
                  We write great codes with the highest standard. 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 18 years experience */}
        <div id={"professional-team"} className={"flex flex-col-reverse md:flex-column md:items-center justify-between mb-20 lg:flex-row "}>
          <div id={"text-part"} className={"w-full md:w-10/12 lg:w-6/12 md:pr-10"}>
            <div id={"head"} className={"head mb-2.5"}>
              <span class={"capitalize font-bold text-xl"}>
                18+ years of experience
              </span>
            </div>

            <div className={"text-base leading-7 mb-6"}>
              <p>
                Our experience sets us apart as we know what a business needs and cater to the perfect software.
              </p>
            </div>

            <div id={"fully-qualified"} className={"flex mb-6"}>
              <div id={"icon"} className={"-z-50 bg-[#E0F3FB] flex items-center justify-center rounded-full self-start h-16 w-16 mt-2"}>
                <TfiCheckBox className={"fill-sky-500"} size={"1.5rem"}/>
              </div>

              <div id={"description"} className={"w-9/12 ml-6"} >
                <p className={"text-xl font-semibold mb-2"}>
                  Since 2005
                </p>

                <p>
                  Serving businesses across the globe since 2005.
                </p>
              </div>
            </div>

            <div id={"experienced"} className={"flex mb-6"}>
              <div id={"icon"} className={"-z-50 bg-[#FAECCF] opacity-75 flex items-center justify-center rounded-full self-start h-16 w-16 mt-2"}>
                <TfiDirection className={"fill-amber-500"} size={"1.8rem"}/>
              </div>

              <div id={"description"} className={"w-9/12 ml-6"} >
                <p className={"text-xl font-semibold mb-2"}>
                  Head office in London
                </p>

                <p>
                  We are local, 15 minutes from London bridge. 
                </p>
              </div>
            </div>

            <div id={"friendly"} className={"flex"}>
              <div id={"icon"} className={"-z-50 bg-[#FFD9DB] opacity-75 flex items-center justify-center rounded-full self-start h-16 w-16 mt-2"}>
                <AiOutlineHome className={"fill-red-500"} size={"1.8rem"}/>
              </div>

              <div id={"description"} className={"w-9/12 ml-6"} >
                <p className={"text-xl font-semibold mb-2"}>
                  Come and meet us
                </p>

                <p>
                  Based in Croydon, come and meet the team. 
                </p>
              </div>
            </div>
          </div>

          <div id="image-part" className="w-full mb-6 sm:mb-8 md:w-10/12 lg:w-5/12">
            <img className={"w-full"} src={experienceImage} alt="" />
          </div>
        </div>

        {/* 1000+ happy clients */}
        <div id={"competitive-pricing"} className={"flex flex-col md:flex-column md:items-center justify-between mb-20 lg:flex-row "}>
        <div id={"image-part"} className={"w-full mb-6 sm:mb-8 md:w-10/12 lg:w-5/12"}>
            <img className={"w-full"} src={happyClientsImage} alt="" />
          </div>

          <div id={"text-part"} className={"w-full md:w-10/12 lg:w-6/12 md:pr-10"}>
            <div id={"head"} className={"head mb-2.5"}>
              <span class={"capitalize font-bold text-xl"}>
                1000+ happy clients
              </span>
            </div>

            <div className={"text-base leading-7 mb-6"}>
              <p>
                our clients are always satisfied with our service. Therefore, our number 1 priority is to provide the best solution as a client-centric company.
              </p>
            </div>

            <div id={"fully-qualified"} className={"flex mb-6"}>
              <div id={"icon"} className={"-z-50 bg-[#E0F3FB] flex items-center justify-center rounded-full self-start h-16 w-16 mt-2"}>
                <TfiCup className={"fill-sky-500"} size={"1.5rem"}/>
              </div>

              <div id={"description"} className={"w-9/12 ml-6"} >
                <p className={"text-xl font-semibold mb-2"}>
                  100% Success rate
                </p>

                <p>
                  We have always delivered on our promise.
                </p>
              </div>
            </div>

            <div id={"experienced"} className={"flex mb-6"}>
              <div id={"icon"} className={"-z-50 bg-[#FAECCF] opacity-75 flex items-center justify-center rounded-full self-start h-16 w-16 mt-2"}>
                <BsSearch className={"fill-amber-500"} size={"1.4rem"}/>
              </div>

              <div id={"description"} className={"w-9/12 ml-6"} >
                <p className={"text-xl font-semibold mb-2"}>
                  100% Client-focused
                </p>

                <p>
                  Our software is designed to solve your business challenges.
                </p>
              </div>
            </div>

            <div id={"friendly"} className={"flex"}>
              <div id={"icon"} className={"-z-50 bg-[#FFD9DB] opacity-75 flex items-center justify-center rounded-full self-start h-16 w-16 mt-2"}>
                <TfiCommentAlt className={"fill-red-500"} size={"1.4rem"}/>
              </div>

              <div id={"description"} className={"w-9/12 ml-6"} >
                <p className={"text-xl font-semibold mb-2"}>
                  Excellent customer feedback
                </p>

                <p>
                  On average, we have excellent customer feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyGray;