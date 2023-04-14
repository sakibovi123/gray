import React from 'react'
import portfolio from "../../Assets/Images/portfolio.png"
import journeyImageBannerStoryOfGray from "../../Assets/Images/journey-image-BannerStoryOfGray.webp"

export default function BannerOutsource() {
  return (
    <div className="w-full bg-gray-200">
      <div className='py-10 flex justify-center items-center md:pt-32 w-9/12 lg:w-8/12 xl:w-5/12 mx-auto'>
        <div className="w-full px-3">
          <label className="block text-sm" htmlFor="firstName">First name:</label>
          <input className='w-full border border-solid border-gray-400 border-2 rounded-sm px-2 py-1 mb-4' id="firstName" type="text" />

          <label className="block text-sm" htmlFor="firstName">Email address:</label>
          <input className='w-full border border-solid border-gray-400 border-2 rounded-sm px-2 py-1 mb-4' id="firstName" type="email" />

          <label className="block text-sm" htmlFor="firstName">Telephone number</label>
          <input className="w-full border border-solid border-gray-400 border-2 rounded-sm px-2 py-1 mb-10" id="firstName" type="number" />

          <textarea className="block w-full h-[70px] mb-4 border-solid border-gray-400 border-2 rounded-sm resize-none" name="" id="" cols="30" rows="10">
          </textarea>

          <div className='w-full flex justify-end'>
            <button className='border border-solid border-black px-10 py-x '>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}