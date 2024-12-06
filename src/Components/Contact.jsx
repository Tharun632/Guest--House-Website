import React from 'react';
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div name="Contact"class="md:px-20 mt-24 mb-32">
      <nav class="antialiased">
        <div class="flex w-full justify-center items-center">
          <div class="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 md:bg-transparent bg-rose-500 max-w-4xl p-8 sm:p-12 w-full rounded-xl shadow-lg text-white">
            <div class="flex flex-col space-y-6 md:bg-rose-500 rounded-md max-h-screen">
              <div class="">
                <h1 class="font-bold text-2xl text-white tracking-wide">Contact Info</h1>
              </div>
              <div class="flex flex-col gap-8">
                <div class="flex flex-row items-center space-x-2">
                <IoLocationOutline class="text-white cursor-pointer" size={36}/>
                <span class="text-xl font-normal">
                  Beside Barshal Water Tank,
                  <br/>
                  Manpur, Barhanti,
                  <br/>
                  West Bengal 723156 
                </span>
                </div>
                <div class="inline-flex items-center space-x-2">
                <HiOutlineMailOpen class="text-white cursor-pointer" size={36} />
                <span class="text-xl font-normal">
                  <a href="mailto: kkghosh0099@gmail.com">
                  kkghosh0099@gmail.com</a>
                  </span>
                </div>
                <div class="inline-flex items-center space-x-2">
                <FiPhoneCall size={36}class="text-white cursor-pointer space-x-4"/>
                <span class="text-xl font-normal">
                  <a href="tel:+919007062180">+91 9007062180
                  </a>
                </span>
                </div>
              </div>
              <div class="flex space-x-4 text-lg">
                <a href="https://www.kingsukhguesthouse.com/#">
                < FaFacebookF class="text-white cursor-pointer"size={28}/>
                </a>
                <a href="https://www.instagram.com/kingsukhguesthouse/#">
                <FaInstagram class="text-white cursor-pointer"size={24}/>
                </a>
                <a href="https://www.kingsukhguesthouse.com/#">
                <FaTwitter class="text-white cursor-pointer" size={24}/>
                </a>
                <a href="https://www.kingsukhguesthouse.com/#">
                <FaLinkedinIn class="text-white cursor-pointer"size={24}/>
                </a>
              </div>
            </div>
            <div class="">
              <div class="bg-white rounded-xl shadow-lg p-8 text-gray-600 z-12">
                <h1 class="text-3xl font-semibold text-rose-500 tracking-wide py-6">Send a Message</h1>
                <form action="" class="flex flex-col space-y-4">
                  <div>
                    <label class="text-xl">First Name</label>
                    <input type="text" placeholder="First Name" class="ring-1
                     ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2
                      focus:ring-rose-500"/>
                    <label class="text-xl">Last Name</label>
                  <input type="text" placeholder="Last Name" class="ring-1
                   ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2
                    focus:ring-rose-500"/>
                  </div>
                  <div>
                    <label class="text-xl">Email Address</label>
                  <input type="text" placeholder="Email address" class="ring-1
                   ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2
                    focus:ring-rose-500"/>
                  </div>
                  <div>
                    <label class="text-xl">Mobile Number</label>
                  <input type="text" placeholder="Mobile Number" class="ring-1
                   ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2
                    focus:ring-rose-500"/>
                  </div>
                  <div>
                    <label>Write your message here...</label>
                    <textarea 
                    rows="4" placeholder='write your message here'
                    class="ring-1 ring-gray-300 w-full rounded-md 
                    mt-2 px-4 py-2 outline-none focus:ring-2 focus:ring-rose-500">
                    </textarea>
                  </div>
                  <button class="inline-block font-semibold bg-rose-500 px-10 py-4 self-start text-white rounded-xl text-xl">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Contact;
