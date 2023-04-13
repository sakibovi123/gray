import React from 'react'
import portfolio from "../Assets/Images/journey.webp"
import early from "../Assets/Images/earlystarted.webp"


export const StoryOfGray = () => {
  return (
    <div>
        <div className={"bg-gray-100 md:w-full py-0"}>
            <div className={"flex flex-col md:flex-row items-center justify-center"}>
                <div className={"w-full mx-32"}>
                    <h1 className={"text-3xl md:text-5xl"}>
                    How it all started

                    </h1>
                    <p className={"text-md font-normal my-4"}>
                    GGLink officially started in 2005 in London as a graphic design company
                    </p>
                </div>
                <img src={portfolio} className={"w-full h-full bg-white"} alt=""/>
            </div>
        </div>


    <div className="">
        <div class="max-w-7xl mx-auto w-full grid grid-cols-9 md:grid-cols-9 px-2 my-24">
        
        <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full bg-white rounded-md p-2 md:pl-4 shadow-xl">
                <h1 class="text-slate-800 text-xl font-medium py-2">01/03/2005</h1>
                <p class="text-gray-500 sm:text-sm text-xs">
                    GGLink started back in 2005 as a graphic and web design company consisting of one design and one developer working from the living room in an apartment based in Battersea.
                </p>
            </div>

        </div>
        <div class="col-span-1 w-full h-full flex justify-center items-center">
            <div class="relative h-full w-1 bg-slate-700 -z-50"></div>
            <div class="absolute w-7 h-7 rounded-full bg-slate-800 -z-50 text-xl text-white text-center">1</div>
        </div>
        
        <div class="col-span-4 w-full h-full">
            {/* image
            <img className="h-[350px] w-full" src={early} alt="" /> */}
        </div>


        
        <div class="col-span-4 w-full h-full"></div>
        <div class="col-span-1 w-full h-full flex justify-center items-center">
            <div class="relative h-full w-1 bg-slate-700 -z-50"></div>
            <div class="absolute w-7 h-7 rounded-full bg-slate-800 -z-50 text-xl text-white text-center">2</div>
        </div>
        <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full bg-white rounded-md p-2 md:pl-4 shadow-xl">
                <h1 class="text-slate-800 text-xl font-medium py-2">01/06/2012</h1>
                <p class="text-gray-500 sm:text-sm text-xs">
                In June 2012 grew its operations, created software solutions, and started trading as a Limited Company. Trading in a small office in Croydon.
                </p>
            </div>
        </div>

        

        
        <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full bg-white rounded-md p-2 md:pl-4 shadow-xl">
                <h1 class="text-slate-800 text-xl font-medium py-2">03/01/2013</h1>
                <p class="text-gray-500 sm:text-sm text-xs">
                Guru Graphics Ltd was growing and soon expanded to a larger and more spacious floor in the block with clients in both the UK and Asia.
                </p>
            </div>
        </div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
        <div class="relative h-full w-1 bg-slate-700 -z-50"></div>
            <div class="absolute w-7 h-7 rounded-full bg-slate-800 -z-50 text-xl text-white text-center">3</div>
        </div>
        
        <div class="col-span-4 w-full h-full"></div>

        
        
        <div class="col-span-4 w-full h-full"></div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
        <div class="relative h-full w-1 bg-slate-700 -z-50"></div>
            <div class="absolute w-7 h-7 rounded-full bg-slate-800 -z-50 text-xl text-white text-center">4</div>
        </div>
        <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full bg-white rounded-md p-2 md:pl-4 shadow-xl">
                <h1 class="text-slate-800 text-xl font-medium py-2">01/09/2016</h1>
                <p class="text-gray-500 sm:text-sm text-xs">
                    In September 2016, Guru Graphics Ltd opened its office operations in the heart of Dhaka, Bangladesh. It is now hiring some of the city's top designers and developers.
                </p>
            </div>
        </div>

        <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full bg-white rounded-md p-2 md:pl-4 shadow-xl">
                <h1 class="text-slate-800 text-xl font-medium py-2">01/01/2019</h1>
                <p class="text-gray-500 sm:text-sm text-xs">
                We have started developing a mobile web application for our clients, and Mobile web is different from a responsive website. It's a purposeful mobile website designed and developed to work on small devices.
                </p>
            </div>
        </div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
        <div class="relative h-full w-1 bg-slate-700 -z-50"></div>
            <div class="absolute w-7 h-7 rounded-full bg-slate-800 -z-50 text-xl text-white text-center">5</div>
        </div>
        
        <div class="col-span-4 w-full h-full"></div>

        <div class="col-span-4 w-full h-full"></div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
        <div class="relative h-full w-1 bg-slate-700 -z-50"></div>
            <div class="absolute w-7 h-7 rounded-full bg-slate-800 -z-50 text-xl text-white text-center">6</div>
        </div>
        <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full bg-white rounded-md p-2 md:pl-4 shadow-xl">
                <h1 class="text-slate-800 text-xl font-medium py-2">01/01/2021</h1>
                <p class="text-gray-500 sm:text-sm text-xs">
                We have expanded our team and added mobile app development as part of our solution, and we are working with react native framework to develop applications for both android and IOS
                </p>
            </div>
        </div>
    </div>
    </div>
       
    </div>
  )
}
