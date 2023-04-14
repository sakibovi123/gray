import React from "react";
import htmlImage from "../../Assets/Images/html-image-tech-we-use.png";
import cssImage from "../../Assets/Images/css-image-tech-we-use.png";
import javaScriptImage from "../../Assets/Images/javascript-image-tech-we-use.png";
import phpImage from "../../Assets/Images/php-image-tech-we-use.png";
import mySqlImage from "../../Assets/Images/mysql-image-tech-we-use.png";
import laravelImage from "../../Assets/Images/laravel-image-tech-we-use.png";
import cloudfareImage from "../../Assets/Images/cloudflare-image-tech-we-use.png";
import cPanelImage from "../../Assets/Images/cpanel-image-tech-we-use.png";
import gitHubImage from "../../Assets/Images/github-image-tech-we-use.png";
import bootstrapImage from "../../Assets/Images/bootstrap-image-tech-we-use.png";
import jQueryImage from "../../Assets/Images/jquery-image-tech-we-use.png";
import sassImage from "../../Assets/Images/sass-image-tech-we-use.png";
import wordpressImage from "../../Assets/Images/wordpress-image-tech-we-use.png";
import drupalImage from "../../Assets/Images/drupal-image-tech-we-use.png";
import codeIgniterImage from "../../Assets/Images/codeigniter-image-tech-we-use.png";
import googleImage from "../../Assets/Images/google-image-tech-we-use.png";
import digitalOceanImage from "../../Assets/Images/digitalocean-image-tech-we-use.png";
import awsImage from "../../Assets/Images/aws-image-tech-we-use.png";


const TechnologiesWeUseOurSolutionsPage = () => {
  return(
    <div className={"mt-32 px-2 xl:w-10/12 mx-auto 2xl:w-8/12 2xl:mb-56"}>
      {/* header section starts here */}
      <div id={"header"} className={"mb-10"}>
        <p className={"text-center font-semibold text-3xl mb-6 lg:text-5xl lg:mb-12"}>
          Technologies we use
        </p>

        <p className={"text-normal text-gray-600 text-center lg:mb-12 2xl:mb-20"}>
          We build fantastic solutions for our clients with the latest technologies and protocols.
        </p>
      </div>
      {/* header section ends here */}
      <div id={"horizontal-rule"} className={"h-px w-full bg-gray-300"}>
      </div>

      <div id={"technologies"} className={"mt-10 w-10/12 mx-auto md:flex justify-between lg:mt-20 2xl:mt-28 2xl:w-9/12"}>
        <div id={"section-1"} className={"mb-10 md:w-1/2 md:mr-10 xl:mr-16 2xl:mr-18"}>
          <div id={"s1-row-1"} className={" flex items-center justify-between mb-8"}>
            <div className={"w-1/4"}>
              <img src={htmlImage} alt="" />
            </div>

            <div className={"w-1/4"}>
              <img src={cssImage} alt="" />
            </div>

            <div className={"w-1/4"}>
              <img src={javaScriptImage} alt="" />
            </div>
          </div>

          <div id={"s1-row-2"} className={" flex items-center justify-between mb-8"}>
            <div className={"w-1/4"}>
              <img src={phpImage} alt="" />
            </div>

            <div className={"w-1/4"}>
              <img src={mySqlImage} alt="" />
            </div>

            <div className={"w-1/4"}>
              <img src={laravelImage} alt="" />
            </div>
          </div>

          <div id={"s1-row-3"} className={" flex items-center justify-between mb-8"}>
            <div className={"w-1/4"}>
              <img src={cloudfareImage} alt="" />
            </div>

            <div className={"w-1/4"}>
              <img src={cPanelImage} alt="" />
            </div>

            <div className={"w-1/4"}>
              <img src={gitHubImage} alt="" />
            </div>
          </div>
        </div>

        <div id={"section-2"} className={"md:w-1/2"}>
          <div id={"s2-row-1"} className={" flex items-center justify-between mb-8"}>
            <div className={"w-1/4 pt-3.5 lg:pt-5 "}>
              <img src={bootstrapImage} alt="" />
            </div>

            <div className={"w-1/4"}>
              <img src={jQueryImage} alt="" />
            </div>

            <div className={"w-1/4"}>
              <img src={sassImage} alt="" />
            </div>
          </div>

          <div id={"s2-row-2"} className={" flex items-center justify-between mb-8"}>
            <div className={"w-1/4"}>
              <img src={wordpressImage} alt="" />
            </div>

            <div className={"w-1/4"}>
              <img src={drupalImage} alt="" />
            </div>

            <div className={"w-1/4"}>
              <img src={codeIgniterImage} alt="" />
            </div>
          </div>

          <div id={"s2-row-3"} className={" flex items-center justify-between mb-8"}>
            <div className={"w-1/4 lg:px-2 lg:mb-1 xl:mb-4"}>
              <img src={digitalOceanImage} alt="" />
            </div>

            <div className={"w-1/4"}>
              <img src={awsImage} alt="" />
            </div>

            <div className={"w-1/4"}>
              <img src={googleImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesWeUseOurSolutionsPage;