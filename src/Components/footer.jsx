import React from 'react';
export default function Footer() {
  return (
    <div class="bg-black md:min-w-screen md:h-[700px] h-full w-full">
    <div class="grid grid-cols-1 md:grid-cols-4 py-32 md:gap-8 gap-4">
      <div class="leading-loose md:pl-24 py-4 px-6">
        <a href="https://www.kingsukhguesthouse.com/#home">
            <h4 class="text-2xl font-semibold text-white">Kingsukh <br/>Guest <br/>House</h4>
        </a>
        <p class="text-justify text-gray-500 text-xl py-6">
        Discover a world of
        comfort, luxury, and 
        adventure as you explore 
        our curated selection of 
        hotels, making every  moment of your getaway truly extraordinary.
        </p>
        <a href="https://wa.link/at5ion">
            <button class="px-6 py-4  bg-rose-500 hover:bg-rose-800 cursor-pointer rounded-lg text-white font-semibold text-xl">
                BOOK NOW
            </button>
        </a>
      </div>
      <div class="px-6 py-4">
        <h4 class="text-2xl font-semibold text-white">QUICK LINKS</h4>
        <ul class="text-xl leading-loose py-6">
            <li class="text-gray-500 hover:text-white">
                <a href="https://www.kingsukhguesthouse.com/#">Browse Destinations</a>
            </li>
            <li class="text-gray-500 hover:text-white">
                <a href="https://www.kingsukhguesthouse.com/#">Special Offers & Packages</a>
            </li>
            <li class="text-gray-500 hover:text-white">
                <a href="https://www.kingsukhguesthouse.com/#">Room Types & Amenities</a>
            </li>
            <li class="text-gray-500 hover:text-white">
                <a href="https://www.kingsukhguesthouse.com/#">Customer Reviews & Ratings</a>
            </li>
            <li class="text-gray-500 hover:text-white">
                <a href="https://www.kingsukhguesthouse.com/#">Travel Tips & Guides</a>
            </li>
        </ul>
      </div>
      <div class="px-8 py-4">
        <h4 class="text-white text-2xl font-semibold">OUR SERVICES</h4>
        <ul class="leading-loose text-xl py-6">
            <li class="text-gray-500 hover:text-white">
                <a href="https://www.kingsukhguesthouse.com/#">Concierge Assistance</a>
            </li>
            <li class="text-gray-500 hover:text-white">
                <a href="https://www.kingsukhguesthouse.com/#">Flexible Booking Options</a>
            </li>
            <li class="text-gray-500 hover:text-white">
                <a href="https://www.kingsukhguesthouse.com/#">Airport Transfers</a>
            </li>
            <li class="text-gray-500 hover:text-white"><a href="https://www.kingsukhguesthouse.com/#">Wellness & Recreation</a></li>
        </ul>
      </div>
      <div class="md:pr-24 py-4 px-6">
        <h4 class="text-white text-2xl font-semibold">CONTACT US</h4>
        <ul class="text-xl leading-loose py-6">
            <li class="text-gray-500 hover:text-white">
                <a href="https://www.google.com/maps/place/Kingsukh+Guest+House/@23.5862406,86.8597371,17z/data=!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a>
            </li>
            <li class="text-gray-500 hover:text-white">
                <a href="mailto:kkghosh0099@gmail.com">kkghosh0099@gmail.com</a>
            </li>
            <li class="text-gray-500 hover:text-white">
                <a href="tel:+919007062180">+91 9007062180</a>
            </li>
        </ul>
        <div class="flex flex-row  md:flex-row gap-4">
            <a href="https://www.kingsukhguesthouse.com/#">
            <img class="h-8 w-8"src="https://www.kingsukhguesthouse.com/assets/facebook.png" alt="facebook"/>
            </a>
            <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fkingsukhguesthouse%2F&is_from_rle">
            <img class="h-8 w-8"src="https://www.kingsukhguesthouse.com/assets/instagram.png" alt="instagram"/>
            </a>
            <a href="https://www.kingsukhguesthouse.com/#">
            <img  class="h-8 w-8"src="https://www.kingsukhguesthouse.com/assets/youtube.png" alt="youtube"/>
            </a>
            <a href="https://www.kingsukhguesthouse.com/#">
            <img class="h-8 w-8 rounded-lg"src="https://www.kingsukhguesthouse.com/assets/twitter.png" alt="twitter"/>
            </a>
        </div>
      </div>
      </div>
      <div class="text-gray-600 text-xl font-semibold leading-loose text-center">
        Copyright © 2024 Kingsukh Guest House. All rights reserved.
      </div>
   
    </div>
  )
}
