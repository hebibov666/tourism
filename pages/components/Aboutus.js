import AOS from 'aos';
import 'aos/dist/aos.css';
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from 'react';
function AboutUs({about}){
   useEffect(()=>{
    AOS.init()
   },)
    return(
        <div id='haqqimizda' data-aos="zoom-in-right" data-aos-duration="1500" className="bg-[#002244] pb-[40px] pt-[20px] w-full h-auto flex flex-col items-center gap-[20px]">
        <div>
        <h1 className="title2 text-white flex flex-col items-center w-full text-center font-bold text-xl">Haqqımızda</h1>
        </div>
        <div  className="flex p-6 w-full max-[990px]:flex-col max-[990px]:gap-[30px] justify-around items-center">
    <div  className="basis-[50%]">
    <p className="text-center lg:text-xl font-bold text-white">{about && about[0].description}</p>
    </div>
        </div>

       </div>
    )
}
export default AboutUs