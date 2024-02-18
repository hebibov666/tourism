import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Link from 'next/link';
function Services(){
    useEffect(()=>{
        AOS.init()
    },)
    const services=[
        {
            id:1,
            name:"Xarici tur",
            img:"./foreign.png"
        },
        {
            id:2,
            name:"Daxili tur",
            img:"./tour.png"
        },
        {
            id:3,
            name:"Məktəbli turu",
            img:"./school.png"
        },
        {
            id:4,
            name:"Ziyarətgah",
            img:"./religion.png"
        }
    ]
    return(
        <div id="services" className="w-full pb-[30px] bg-white flex flex-col items-center gap-[20px]">
         <div>
         <h1 className="title flex flex-col items-center w-full text-center font-bold text-xl">Xidmətlər</h1>
         </div>
<div className="grid pb-[40px] pt-[20px] max-[370px]:grid-cols-1 gap-[40px] place-items-center  min-[570px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] p-4 w-full overflow-hidden">
{services.map(service=>{
    return <div data-aos="zoom-in-right" data-aos-duration="1500" className="box2  w-1/1 relative hover:scale-90 bg-white  transition-all duration-700 max-[570px]:w-1/1  h-[240px] shadow-lg shadow-[#D8D8D8] rounded-[10px]">
        <div className="w-full h-full">
            <img src={service.img} className="rounded-[10px] w-full transition-all duration-1000 object-cover h-full"></img>
        </div>
     <Link href={`tours/${service.name}`}>
     <div className="pl-2 shadow-lg  shadow-[#a8d6ffdc] box w-[80%] absolute bottom-[-20px] left-6 text-white bg-white flex rounded-[10px] items-center justify-between">
            <h1 className="font-bold text-white p-2">{service.name}</h1>
            <ArrowRightIcon fontSize='large'/>
        </div>
     </Link>
        </div>
})}
</div>
        </div>
    )
}
export default Services