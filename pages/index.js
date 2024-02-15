"use client"
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import SliderSection from "./components/SliderSection";
import Services from "./components/Services";
import AboutUs from "./components/Aboutus";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
  <Navbar/>
  <div className="flex flex-col gap-[20px]">
  <SliderSection/>
  <Services/>
  <AboutUs/>
  <Footer/>
  </div>
    </main>
  );
}
