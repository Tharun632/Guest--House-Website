import React from 'react';
export default function Banner() {
  return (
    <div class="md:px-20 w-full md:py-10 py-8">
      <div class="md:h-44 h-18 shadow-lg md:px-8 md:py-6 md:shadow-lg mx-auto bg-white border-2 rounded-xl my-16 md:flex md:flex-row  md:justify-evenly flex flex-col items-center justify-center">
          <div class="py-4 px-8">
            <h4 class="text-4xl font-bold text-center">100+</h4>
            <p class="text-2xl font-mono opacity-50">Bookings Completed</p>
          </div>
          <div class="py-4 px-8">
            <h4 class="text-4xl font-bold text-center">150+</h4>
            <p class="text-2xl font-mono opacity-50">Happy Customers</p>
          </div>
        </div>
    </div>
  )
}
