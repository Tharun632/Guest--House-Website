import React from 'react';
function Home(){
    return(
        <div class="md:px-20 z-50 h-screen">
            <div class="flex flex-col items-center justify-center h-screen">
                <p class="text-white font-semibold text-2xl opacity-70 text-center">
                    Simple  -  Unique  -  Friendly
                </p>
                <h1 class="text-white font-semibold text-7xl md:px-4 py-8 text-center">
                    Make Yourself At Home
                    <br/>
                    In Our 
                    <span class="text-red-500 leading-normal"> Guest House</span>.
                </h1>
            </div> 
        </div>
    )
}

export default Home;