import React from 'react'
import { RiShieldStarLine } from "react-icons/ri";
import { Ri24HoursLine } from "react-icons/ri";
import { RiRestaurant2Fill } from "react-icons/ri";
import { ImMap2 } from "react-icons/im";
const Services = () => {
  return (
    <div name="Services" className="w-full my-12 md:h-screen h-screen bg-[url('/palash.jpg')] bg-center bg-cover bg-no-repeat md:px-36">
      <div class="border-2 md:px-16 px-6 mx-auto w-4/5 md:float-right md:w-2/4 md:h-screen h-full bg-white">
          <p class="text-2xl font-semibold md:mt-12 mt-6 md:mb-4 mb-2">SERVICES
            <span class="inline-block w-24 h-1 ml-2 bg-rose-500"></span>
          </p>
          <h1 class="md:text-6xl text-5xl font-bold text-slate-900 md:mb-8 mb-6">Strive Only For The <br/>Best.
          </h1>
          <ul class="text-2xl font-semibold md:flex md:flex-col flex flex-col space-y-8 md:space-y-12">
            <li class="flex items-center gap-4">
              <span class="text-blue-500 rounded-full p-4 bg-blue-200">
                <RiShieldStarLine size={32}/>
              </span>
              High Class Security
            </li>
            <li class="flex items-center gap-4">
              <span class="text-pink-500 p-4 bg-pink-200 rounded-full">
                <Ri24HoursLine size={32} />
              </span>
              24 Hours Room Service
            </li>
            <li class="flex items-center gap-4">
              <span class="text-indigo-500 p-4 rounded-full bg-indigo-100">
                <RiRestaurant2Fill size={32}/>
              </span>
              Restaurant
            </li>
            <li class="flex items-center gap-4">
            <span class="text-red-500 p-4 bg-red-200 rounded-full">
              < ImMap2 size={32}/>
            </span>
              Tourist Guide Support
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Services;
