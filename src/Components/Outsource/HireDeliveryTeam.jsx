import React from "react";
import deliveryTeamImage from "../../Assets/Images/delivery-team-image-our-solutions.png";
import extendTeamImage from "../../Assets/Images/extend-team-image-our-solutions.png";

const HireDeliveryTeam = () => {
  return (
    <div className="w-11/12 mx-auto md:w-10/12 lg:w-8/12 mt-20">
      <div className="md:flex justify-center">
        <div id="delivery-team" className=" md:mr-12">
          <p className="text-center text-lg font-semibold mb-3">
            Hire a delivery team
          </p>

          <div className="w-[300px] h-[205px] border border-solid border-gray-300 border-2 mx-auto">
            <img className="h-[200px] w-[200px] mx-auto" src={deliveryTeamImage} alt="" />
          </div>
        </div>

        <div id="extend-team" className="mt-6 md:mt-0">
          <p className="text-center text-lg font-semibold mb-3">
            Extend my existing team
          </p>

          <div className="w-[300px] h-[205px] border border-solid border-gray-300 border-2 mx-auto">
            <img className="h-[200px] w-[200px] mx-auto" src={extendTeamImage} alt="" />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-6">
        <button className="uppercase border border-solid border-slate-800 border-2 p-3">
          upgrade my team
        </button>
      </div>
    </div>
  );
};

export default HireDeliveryTeam;