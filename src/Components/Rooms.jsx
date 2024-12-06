import React from 'react';
import Img3 from "../Project-images/small.jpg";
import Img4 from "../Project-images/large.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { RiPaintFill } from "react-icons/ri";
import { RiShieldStarLine } from "react-icons/ri";

const Rooms = () => {
  const cardItems = [
    {
      id:1,
      logo:Img3,
      name:"Cozy Haven Room",
      para:"Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
      amount:"1000/night",

    },
    {
      id:2,
      logo:Img4,
      name:"Spacious Serenity Suite",
      para:"Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
      amount:"1500/night",
    }
  ]
  return (
    <div name="Rooms"class="md:px-20 my-24">
      <div>
        <p class="text-2xl md:p-5 p-2 font-semibold mb-5">
          OUR LIVING ROOM
          <span class="inline-block w-24 h-1 ml-2 bg-rose-500"></span>
        </p>
        <h1 class="text-5xl font-bold md:p-5 p-1 md:text-break">The Most Memorable Rest<br/>Time Starts Here.
        </h1>
        <div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 my-5">
              {
                cardItems.map(({id,name,logo,para,amount})=>(
                  <div class="md:w-full h-full  rounded-md gap-8 cursor-pointer key={id}">
                    <img src={logo} class="h-64 md:w-full p-4 rounded-lg" alt="images"/>
                    <div class="flex flex-row space-x-4 p-4">
                    <span class="rounded-full "><AiOutlineHeart class="text-rose-500"size={32}/></span>
                    <span><RiPaintFill class="text-violet-500"size={32}/></span>
                    <span><RiShieldStarLine  class="text-cyan-500 "size={32}/></span>
                    </div>

                    <div >
                      <div class="text-xl font-semibold mb-2 px-4">{name}</div>
                      <div class="text-justify px-4 py-4 text-gray-700 ">{para}</div>
                      <h5 class="text-xl px-4">Starting from 
                        <span class="text-xl text-slate-900">  Rs. {amount}</span>
                        </h5>
                      <div class="my-4 text-xl font-semibold px-4">
                        <a href="https://wa.link/at5ion">
                        <button class="py-4 px-6 bg-rose-500 hover:bg-rose-700 rounded-md text-white font-semibold cursor-pointer">BOOK NOW</button>
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Rooms;
