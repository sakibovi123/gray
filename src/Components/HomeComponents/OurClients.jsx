import React from "react";
import abofImage from "../../Assets/Images/abof-image-our-clients.png";
import lucubrateImage from "../../Assets/Images/lucubrate-image-our-clients.png";
import citrusImage from "../../Assets/Images/citrus-image-our-clients.png";
import trustlyImage from "../../Assets/Images/trustly-image-our-clients.png";
import restrauntImage from "../../Assets/Images/restraunt-image-our-clients.png";
import lillyImage from "../../Assets/Images/lilly-image-our-clients.png";
import oldendroffImage from "../../Assets/Images/oldendroff-image-our-clients.png";

const OurClients = () => {
  return(
    <div className={"mt-32 mb-32"}>
      {/* header section starts here */}
      <div id="header" className={"mb-14"}>
        <p className={"capitalize text-3xl font-semibold text-center text-slate-800 mb-4 lg:text-5xl"}>
          our clients
        </p>

        <p className={"text-gray-600 text-center"}>
          Meet our happy clients
        </p>
      </div>
      {/* header section ends here */}

      <div id={"clients"} className={"w-11/12 mx-auto md:flex lg:w-10/12 xl:w-8/12"}>
        <div id="section-1" className={"md:w-1/2"}>
          <div id={"s1-r1"} className={"flex"}>
            <div className={"flex justify-center items-center border border-sky-200 px-5 py-8 w-1/2"}>
              <img src={abofImage} alt="" />
            </div>

            <div className={"flex justify-center items-center border border-sky-200 px-5 py-8 w-1/2"}>
              <img src={lucubrateImage} alt="" />
            </div>
          </div>

          <div id={"s1-r2"} className={"flex"}>
            <div className={"flex justify-center items-center border border-sky-200 px-5 py-8 w-1/2"}>
              <img src={citrusImage} alt="" />
            </div>

            <div className={"flex justify-center items-center border border-sky-200 px-5 py-8 w-1/2"}>
              <img src={trustlyImage} alt="" />
            </div>
          </div>
        </div>

        <div id="section-2" className={"md:w-1/2"}>
          <div id={"s2-r1"} className={"flex"}>
            <div className={"flex justify-center items-center border border-sky-200 px-5 py-8 w-1/2"}>
              <img src={restrauntImage} alt="" />
            </div>

            <div className={"flex justify-center items-center border border-sky-200 px-5 py-8 w-1/2"}>
              <img src={lillyImage} alt="" />
            </div>
          </div>

          <div id={"s2-r2"} className={"flex"}>
            <div className={"flex justify-center items-center border border-sky-200 px-5 py-8 w-1/2"}>
              <img src={oldendroffImage} alt="" />
            </div>

            <div className={"flex justify-center items-center border border-sky-200 px-5 py-8 w-1/2"}>
              <img src={oldendroffImage} alt="" className="hidden"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;