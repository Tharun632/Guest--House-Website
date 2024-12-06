import React, {useState} from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-scroll'
function Navbar(){
   const navItems=[
        {
            id:1,
            text:"Home",
            link:"https://www.kingsukhguesthouse.com/#home",
        },
        {
            id:2,
            text:"About",
            link:"https://www.kingsukhguesthouse.com/#about",
        },
        {
            id:3,
            text:"Services",
            link:"https://www.kingsukhguesthouse.com/#services",
        },
        {
            id:4,
            text:"Rooms",
            link:"https://www.kingsukhguesthouse.com/#rooms",
        },
        {
            id:5,
            text:"Gallery",
            link:"https://www.kingsukhguesthouse.com/#gallery",
        },
        {
            id:6,
            text:"Contact",
            link:"https://www.kingsukhguesthouse.com/#contact",
        },

    ];
    const[isOpen, setIsOpen] = useState(false);
    const toggleBtn =()=>{
        setIsOpen(!isOpen);
    };
    return (
        <nav className="w-full md:h-screen">
            <div class="bg-[url('/ayodhya.jpg')] bg-no-repeat bg-center bg-cover">
            <div class="bg-rose-500 md:bg-transparent">
                <div class="flex justify-between items-center py-8 h-24">
                    <div class="flex items-center font-semibold py-8 md:px-40 px-4">
                        <h1 class="md:mt-12"><a href="https://wa.link/at5ion" class="text-white font-semibold text-xl cursor-pointer leading-tight">Kingsukh <br/>
                        Guest House
                        </a>
                        </h1>
                    </div>
                    {/*For Desktop devices*/}
                    <div>
                        <ul class="hidden md:flex items-center text-white gap-8 text-xl cursor-pointer mt-16">
                            {
                                navItems.map(({id,text,link})=>(
                                    <li key={id} class="bg-gradient-to-br from-rose-500 to-rose-600 bg-[length:0%_5px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_5px] transition-all duration-500">
                                        <Link to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={50}
                                        activeClass='active' class="inline-block font-semibold py-1 px-3">
                                        <a href={link}>{text}</a></Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div class="md:pr-40">
                        <a href="https://wa.link/at5ion">
                        <button class="hidden md:block md:text-white md:px-6 md:py-4 md:rounded-md md:my-4 md:font-semibold md:text-xl md:bg-rose-500 md:hover:bg-rose-800 md:mt-14">
                            BOOK NOW
                        </button>
                        </a>
                    </div>
                    <div class="md:hidden px-4">
                        <button onClick={toggleBtn} class="">
                            <AiOutlineMenu size={28} style={{color:"white"}}/>
                        </button>
                    </div>
                   
                </div>
                {/*For Mobile devices*/}
            {isOpen && (
                <div class="absolute md:hidden left-0 w-full z-20 top-20 h-screen">
                    <div class="text-xl font-semibold uppercase text-white  py-10 bg-rose-500 rounded-md">
                        <ul class="flex flex-col items-center gap-8 cursor-pointer">
                            {
                                navItems.map(({id, text, link})=>(
                                    <li key={id} class="flex flex-col justify-center items-center gap-8">
                                        <Link to={text} onClick={()=>(setIsOpen(!isOpen))}
                                        smoooth={true}
                                        offset={50}
                                        duration={500}
                                        activeClass='active'>
                                        <a href={link}>{text}</a>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>)}
            </div>
            <div name="Home"class="flex flex-col md:items-center items-center md:justify-center justify-center md:px-20 h-screen">
                <p class="text-white opacity-70 font-semibold text-2xl">
                    Simple  -  Unique  -  Friendly
                </p>
                <p class="text-white font-semibold text-7xl md:px-4 py-8 text-center">
                    Make Yourself At Home
                    <br/>
                    In Our 
                    <span class="text-red-500 leading-normal"> Guest House</span>.
                </p>
            </div> 
            </div>
        </nav>
    );
}

export default Navbar;