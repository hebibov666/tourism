"use client"
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import SliderSection from "./components/SliderSection";
import Services from "./components/Services";
import AboutUs from "./components/Aboutus";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import { client } from "@/sanity/lib/client";
import { getServerSideProps } from "./components/Gallery";
import { useEffect,useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [about,setAbout]=useState()
    const getText=async()=>{
        try {
            const result = await client.fetch(
                `*[_type=="about"]{
                    _id,
                  description,
                }`
            );
            setAbout(result)
            console.log(about)
    }catch(error){
        console.log(error)
    }
    
   }
useEffect(()=>{
getText()
},[])
  return (
  <>
  {about==="" ? <h1>Loading</h1> :  <main>
  <Navbar/>
  <div className="flex flex-col gap-[20px]">
  <SliderSection/>
  <Services/>
  <Gallery/>
  <AboutUs about={about}/>
  <Footer/>
  </div>
    </main>}</>
  );
}
