import React from "react";
import section1Image from "../../Assets/Images/e-learning.jpg"
import eLearningIcon from "../../Assets/Images/elearning-icon-our-solution.webp"
import eLearningImage from "../../Assets/Images/elearning-image-our-solution.webp"
import eCommerceImage from "../../Assets/Images/ecommerce-image-our-solutions.webp"
import eCommerceIcon from "../../Assets/Images/ecommerce-icon-our-solutions.webp"
import crmIcon from "../../Assets/Images/crm-icon-our-solutions.webp"
import crmImage from "../../Assets/Images/crm-image-our-solutions.webp"
import eBookingImage from "../../Assets/Images/eBooking-image-our-solutions.webp"
import eBookingIcon from "../../Assets/Images/eBooking-icon-our-solutions.webp"
import eNetworkingIcon from "../../Assets/Images/eNetworking-icon-our-solutions.webp"
import eNetworkingImage from "../../Assets/Images/eNetworking-image-our-solutions.webp"
import eHealthImage from "../../Assets/Images/ehealth-image-our-solutions.webp"
import eHealthIcon from "../../Assets/Images/ehealth-icon-our-solutions.webp"

const OurSolutions = () => {
  return (
    <div>
      <div id="home-solutions" className="mt-32 px-2 md:px-5 lg:w-10/12 lg:container mx-auto xl:w-10/12 2xl:w-8/12 2xl:container mx-auto 2xl:mt-32">
        {/* section header starts here */}
        <div id="our-solutions-header" className="text-center text-2xl mb-3 md:text-4xl lg:mb-14 lg:text-5xl font-semibold">
          <p>
            Our Solutions
          </p>
        </div>

        <div id="our-solutions-description" className="text-center text-gray-600 mb-8 text-base lg:text-base lg:mb-28">
          <p>
            We have a wide range of solutions built with the latest technologies, robust, safe and secure. 
          </p>
        </div>
        {/* section herader ends here */}

        {/* section 1 */}
        <div id="section-1-text-left" className="flex flex-col-reverse md:flex-column md:items-center justify-between mb-20 lg:flex-row ">
          <div id="text-part" className="w-full md:w-10/12 lg:w-5/12 md:pr-10">
            <div id="head" className="head mb-2.5">
              <img className="inline-block w-10 mr-2" src={eLearningIcon} alt="" />
              <span class="font-bold text-xl">e-Learning</span>
            </div>

            <div id="title" className="capitalize text-xl lg:mb-3.5 lg:text-2xl font-semibold">
              <p>
                AI-Powered cloud-based elearning system
              </p>
            </div>

            <div className="text-base text-gray-600 leading-7 mb-3">
              <p>
                With our e-Learning platform, you can manage every aspect of your education platform in one place. You can interact in live classes with your students. As the main administrator, you can allow other teachers onboard and decide on full or restricted access to course materials, set multiple-choice questionnaires, issue certificates and schedule everything online.
              </p>
            </div>

            <div className="text-base text-gray-600 leading-7 mb-3">
              <p>
                You can save both time and money with our e-Learning software. In addition, the course material can be accessed anywhere, anytime and from any possible device.
              </p>
            </div>

            <div class="text-gray-600 leading-6 mb-3.5">
              <ul class="our-solution-points">
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">Student & teachers management</span>
                </li>
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">class & course manager</span>
                </li>
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">online admission management</span>
                </li>
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">admin, student, teacher dashboard</span>
                </li>
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">seamless interaction between teachers and students</span>
                </li>
              </ul>
            </div>

            <div>
              <a href="#" className="text-gray-600 hover:opacity-80">
                learn more about e-Learning <span class="iconify inline-block text-xl" data-icon="ph:arrow-circle-right-fill"></span>
              </a>
            </div>
          </div>

          <div id="image-part" className="w-full mb-6 md:w-10/12 lg:w-6/12">
            <img src={eLearningImage} alt="" className="rounded-xl mx-auto md:ml-0 md:mr-auto" />
          </div>
        </div>

        {/* section 2 */}
        <div id="section-2-text-right" className="flex flex-col md:flex-column items-center md:items-center justify-between mb-20 lg:flex-row ">
        <div id="image-part" className="w-full mb-6 md:w-10/12 lg:w-6/12">
            <img src={eCommerceImage} alt="" className="rounded-xl mx-auto md:ml-0 md:mr-auto" />
          </div>

          <div id="text-part" className="w-full md:w-10/12 lg:w-5/12 md:pr-10">
            <div id="head" className="head mb-2.5">
              <img className="inline-block w-10 mr-2" src={eCommerceIcon} alt="" />
              
              <span class="font-bold text-xl">
                e-Commerce
              </span>
            </div>

            <div id="title" className="capitalize text-xl lg:mb-3.5 lg:text-2xl font-semibold">
              <p>
                Grow Your Business With Our Ecommerce
              </p>
            </div>

            <div className="text-base text-gray-600 leading-7 mb-3">
              <p>
                With more people than ever before making purchases online, we will provide you with a robust and user-friendly platform. eCommerce websites are developed to suit your business requirements with a fully automated process, saving you and your business time and money.
              </p>
            </div>

            <div className="text-base text-gray-600 leading-7 mb-3">
              <p>
                We believe it is important to create an eCommerce site with as few or little few clicks as possible for the visitor and make the buying process seamless. In addition, you can list unlimited products; having multiple payment modes will increase your business's profits.
              </p>
            </div>

            <div class="text-gray-600 leading-6 mb-3.5">
              <ul class="our-solution-points">
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">Manage your customers</span>
                </li>
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">Manage products and stocks</span>
                </li>
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">Online Payment Manager</span>
                </li>
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">Smooth and fast checkout experience</span>
                </li>
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">100% secure, encrypted data</span>
                </li>
              </ul>
            </div>

            <div>
              <a href="#" className="text-gray-600 hover:opacity-80">
                learn more about e-Commerce solutions <span class="iconify inline-block text-xl" data-icon="ph:arrow-circle-right-fill"></span>
              </a>
            </div>
          </div>
        </div>

        {/* section 3 */}
        <div id="section-3-text-left" className="flex flex-col-reverse md:flex-column md:items-center justify-between mb-20 lg:flex-row ">
          <div id="text-part" className="w-full md:w-10/12 lg:w-5/12 md:pr-10">
            <div id="head" className="head mb-2.5">
              <img className="inline-block w-10 mr-2" src={crmIcon} alt="" />
              
              <span class="font-bold text-xl">
                CRM
              </span>
            </div>

            <div id="title" className="capitalize text-xl lg:mb-3.5 lg:text-2xl font-semibold">
              <p>
                Build Efficient Client Relationships - CRM
              </p>
            </div>

            <div className="text-base text-gray-600 leading-7 mb-3">
              <p>
                Our CRM software is designed to help you manage your business's day-to-day operations and increase customer retention and satisfaction.
              </p>
            </div>

            <div className="text-base text-gray-600 leading-7 mb-3">
              <p>
                Increase your team's productivity whilst maintaining a centralised database system. Track your buyer's journey, including all communications aspects allowing you to determine the following steps on follow-ups or specific prospects.
              </p>
            </div>

            <div class="text-gray-600 leading-6 mb-3.5">
              <ul class="our-solution-points">
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">manage products and services</span>
                </li>
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">staff manager</span>
                </li>
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">customer manager</span>
                </li>
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">email, text all in one place</span>
                </li>
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">manage nurture and grow your leads</span>
                </li>
              </ul>
            </div>

            <div>
              <a href="#" className="text-gray-600 hover:opacity-80">
                learn more about CRM solutions <span class="iconify inline-block text-xl" data-icon="ph:arrow-circle-right-fill"></span>
              </a>
            </div>
          </div>

          <div id="image-part" className="w-full mb-6 md:w-10/12 lg:w-6/12">
            <img src={crmImage} alt="" className="rounded-xl mx-auto md:ml-0 md:mr-auto" />
          </div>
        </div>

        {/* section 4 */}
        <div id="section-4-text-right" className="flex flex-col md:flex-column items-center md:items-center justify-between mb-20 lg:flex-row ">
          <div id="image-part" className="w-full mb-6 md:w-10/12 lg:w-6/12">
            <img src={eBookingImage} alt="" className="rounded-xl mx-auto md:ml-0 md:mr-auto" />
          </div>

          <div id="text-part" className="w-full md:w-10/12 lg:w-5/12 md:pr-10">
            <div id="head" className="head mb-2.5">
              <img className="inline-block w-10 mr-2" src={eBookingIcon} alt="" />

              <span class="font-bold text-xl">
                e-Booking
              </span>
            </div>

            <div id="title" className="capitalize text-xl lg:mb-3.5 lg:text-2xl font-semibold">
              <p>
                accept bookings and payments 24/7
              </p>
            </div>

            <div className="text-base text-gray-600 leading-7 mb-3">
              <p>
               Modernise your business operations with our advanced health management software. You can manage every aspect of a hospital operation. Our system improves overall efficiency by avoiding human errors. In addition, you can easily monitor supplies in the inventory. As a result, the software is cost-effective and easily manageable. Patient privacy is paramount; therefore, we ensure all data is kept safe, secure, and encrypted.
              </p>
            </div>

            <div className="text-base text-gray-600 leading-7 mb-3">
              <p>
                Your clients can book multiple appointments with your business or pay via gift vouchers under our booking system.
              </p>
            </div>

            <div class="text-gray-600 leading-6 mb-3.5">
              <ul class="our-solution-points">
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">manage your diary effectively</span>
                </li>
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">manage customer and their data</span>
                </li>
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">online payments and invoices</span>
                </li>
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">easy booking and cancellation</span>
                </li>
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">customer and admin dashboard</span>
                </li>
              </ul>
            </div>

            <div>
              <a href="#" className="text-gray-600 hover:opacity-80">
                learn more about booking solutions <span class="iconify inline-block text-xl" data-icon="ph:arrow-circle-right-fill"></span>
              </a>
            </div>
          </div>
        </div>

        {/* section 5 */}
        <div id="section-5-text-left" className="flex flex-col-reverse md:flex-column md:items-center justify-between mb-20 lg:flex-row ">
          <div id="text-part" className="w-full md:w-10/12 lg:w-5/12 md:pr-10">
            <div id="head" className="head mb-2.5">
              <img className="inline-block w-10 mr-2" src={eNetworkingIcon} alt="" />
              
              <span class="font-bold text-xl">
                e-Networking
              </span>
            </div>

            <div id="title" className="capitalize text-xl lg:mb-3.5 lg:text-2xl font-semibold">
              <p>
                All In One Networking Platform
              </p>
            </div>

            <div className="text-base text-gray-600 leading-7 mb-3">
              <p>
                Our e-Networking software can increase interaction between your brand and customers. As a result, they will feel connected to your product's brand and build loyalty and have a stronger, more emotional connection with your brand. The more involved they are with your brand, the more trust is built with you, ultimately positively affecting profits.
              </p>
            </div>

            <div class="text-gray-600 leading-6 mb-3.5">
              <ul class="our-solution-points">
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">allow customers to interact with your brand</span>
                </li>
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">Timeline to get updates</span>
                </li>
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">individual members page</span>
                </li>
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">group, forum, blog, news all in one place</span>
                </li>
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">build strong community</span>
                </li>
              </ul>
            </div>

            <div>
              <a href="#" className="text-gray-600 hover:opacity-80">
                learn more about networking solutions <span class="iconify inline-block text-xl" data-icon="ph:arrow-circle-right-fill"></span>
              </a>
            </div>
          </div>

          <div id="image-part" className="w-full mb-6 md:w-10/12 lg:w-6/12">
            <img src={eNetworkingImage} alt="" className="rounded-xl mx-auto md:ml-0 md:mr-auto" />
          </div>
        </div>

        {/* section 6 */}
        <div id="section-6-text-right" className="flex flex-col md:flex-column items-center md:items-center justify-between mb-20 lg:flex-row ">
        <div id="image-part" className="w-full mb-6 md:w-10/12 lg:w-6/12">
            <img src={eHealthImage} alt="" className="rounded-xl mx-auto md:ml-0 md:mr-auto" />
          </div>

          <div id="text-part" className="w-full md:w-10/12 lg:w-5/12 md:pr-10">
            <div id="head" className="head mb-2.5">
              <img className="inline-block w-10 mr-2" src={eHealthIcon} alt="" />

              <span class="font-bold text-xl">
                e-Health
              </span>
            </div>

            <div id="title" className="capitalize text-xl lg:mb-3.5 lg:text-2xl font-semibold">
              <p>
                All In One Health Care Platform
              </p>
            </div>

            <div className="text-base text-gray-600 leading-7 mb-3">
              <p>
                Modernise your business operations with our advanced health management software. You can manage every aspect of a hospital operation. Our system improves overall efficiency by avoiding human errors. In addition, you can easily monitor supplies in the inventory. As a result, the software is cost-effective and easily manageable. Patient privacy is paramount; therefore, we ensure all data is kept safe, secure, and encrypted.
              </p>
            </div>

            <div class="text-gray-600 leading-6 mb-3.5">
              <ul class="our-solution-points">
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">manage staff and doctors</span>
                </li>
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">payments and billing manager</span>
                </li>
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">manage prescriptions and medicines</span>
                </li>
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">easy communication between doctor and patient</span>
                </li>
                <li>
                  <span class="iconify inline-block text-xl align-middle" data-icon="material-symbols:arrow-right-alt"></span>
                  <span class="capitalize">safe and secure cloud based data storage</span>
                </li>
              </ul>
            </div>

            <div>
              <a href="#" className="text-gray-600 hover:opacity-80">
                learn more about healthcare solutions <span class="iconify inline-block text-xl" data-icon="ph:arrow-circle-right-fill"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSolutions;
