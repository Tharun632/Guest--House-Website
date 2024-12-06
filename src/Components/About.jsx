import React from 'react'
import img2 from '../Project-images/outlook.jpg'

const About = () => {
  return (
    <div name="About"class="md:px-20 top-0 right-0 my-8">
      <div class="flex flex-col md:flex-row gap-0">
      <div class="md:w-1/2">
        <img class="max-w-[550px] p-6  h-auto rounded-md"src={img2} alt ="outlook"/>
      </div>
      <div class="md:w-1/2 text-justify border-1 p-4 md:pl-0 border-solid md:my-20-">
        <p class="text-2xl md:py-4 py-1 font-semibold">
          ABOUT US
        </p>
        <h1 class="font-bold text-5xl py-4">The Best Holidays Start<br/>
        Here!
        </h1>
        <p class="text-gray-500 text-xl text-justify font-semibold leading-light ">
          Embark on a tranquil journey at our Kingsukh Guest House,
          enveloped by the scenic allure of Biharinath Hill, Baranti
          Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti
          Dam, Maithon Dam, and the captivating Panchat Dam. Revel 
          in the embrace of comfort, relish delightful meals, and 
          unwind in our verdant garden oasis. Your ideal retreat 
          beckons, promising a harmonious blend of nature's beauty 
          and heartfelt hospitality. Explore the hidden gems of Purulia,
          creating memories that linger long after your stay.
        </p>
        <h4 class="py-4">
          <a class="font-bold text-xl text-violet-700" href="https://google.com/maps/place/Kingsukh+Guest+House/@23.5862406,86.8597371,17z/data=!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 
          <br/>723156</a>
        </h4>
        <h4 class="py-4">
          <a class="text-xl text-blue-800 font-bold"href="tel:+91 900762180">Contact us: +91 9007062180</a>
        </h4>
        <a href="https://wa.link/at5ion" class="py-4">
            <button class="px-6 py-4 bg-rose-500 hover:bg-rose-800 text-white rounded-md text-xl font-semibold mt-4">
          BOOK NOW
        </button> 
        </a>   
      </div>
      </div>
    </div>
  )
}

export default About;
