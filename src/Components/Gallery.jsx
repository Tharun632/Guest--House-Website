import React from 'react';
import { IoRemoveOutline } from "react-icons/io5";
import gImg from '/outlook.jpg';
import gImg2 from '/ayodhya.jpg';
import gImg3 from '/large.jpg';
import gImg4 from '/palash.jpg';
import gImg5 from '/small.jpg';
import gImg6 from '/baranti.webp';
import gImg7 from '/recep.jpg';
import gImg8 from '/flower.jpg';
import gImg9 from '/room1.jpg'
import gImg10 from '/mithonDam.webp';

const Gallery = ()=> {
  // const images = [
  //   "/outlook.jpg",
  //   "/recep.jpg",
  //   "/flower.jpg",
  //   "/ayodhya.jpg",
  //   "/large.jpg",
  //   "/palash.jpg",
  //   "/small.jpg",
  //   '/baranti.webp',
  //   "/room1.jpg",
  //   "/mithonDam.webp"
  // ];
  return (
    <div name=""class="max-w-screen min-h-screen my-24">
      <div class="text-center">
        <p class="text-2xl text-center items-center my-8">
          GALLERY
          <span class="inline-block w-24 h-1 ml-2 bg-rose-500"></span>
        </p>
      {/*<div class=" border-2 grid grid-cols-2 md:grid-cols-5 md:grid-rows-2">*/}
      <div class="columns-2 md:columns-5 gap-0 grid-cols-2">
        <div class="">
          <img src={gImg}/>
        </div>
        <div class="">
          <img src={gImg2}/>
        </div>
        <div class="h-full">
          <img src={gImg3}/>
        </div>
        <div class="">
          <img src={gImg4}/>
        </div>
        <div class="">
          <img src={gImg5}/>
        </div>
        <div class="">
          <img src={gImg6}/>
        </div>
        <div class="">
          <img src={gImg7}/>
        </div>
        <div class="">
          <img src={gImg8}/>
        </div>
        <div class="">
          <img src={gImg9}/>
        </div>
        <div class="">
          <img src={gImg10}/>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default Gallery;
