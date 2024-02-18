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
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home({photos,about}) {
  return (
    <main>
  <Navbar/>
  <div className="flex flex-col gap-[20px]">
  <SliderSection/>
  <Services/>
  <Gallery photos={photos}/>
  <AboutUs about={about}/>
  <Footer/>
  </div>
    </main>
  );
}
export async function getServerSideProps() {
  try {
    const photos = await client.fetch(
      `*[_type=="category"]{
        _id,
        description,
        mainImage{
            asset -> {
                _id,
                url
            }
        }
      }`
    );

    const about = await client.fetch(
      `*[_type=="about"]{
        _id,
      description,
    }`
    );

    return {
      props: {
        photos,
        about,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        photos: [],
        about: null,
      },
    };
  }
}