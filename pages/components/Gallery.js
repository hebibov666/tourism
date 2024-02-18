import { useRouter } from "next/router";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import moment from "moment/moment";
import { client } from "@/sanity/lib/client";
import { useState,useEffect } from "react";
function Gallery({photos}){
   const [bigPhoto,setbigPhoto]=useState(false)
   const [number,setNumber]=useState(8)
   const [nophoto,setnoPhoto]=useState(false)
  

   const increaseNumber=()=>{
    if(number >= photos.length){
        setnoPhoto(true)
    }else{
        setNumber(number + 4)
    }
   }

   const zoomPhoto = (photoId) => {
    bigPhoto === photoId ? setbigPhoto(null) : setbigPhoto(photoId);
};
    return (
        <div id="gallery" className="w-full overflow-hidden pb-[30px] bg-white flex flex-col items-center gap-[20px]">
           <div>
           <h1 className="title flex flex-col items-center w-full text-center font-bold text-xl">Qalareya</h1>
           </div>
            <div className="p-[10px] gap-[10px] grid max-[450px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
{photos?.slice(0,number).map(photo=>{
    return <div className="flex bg-black text-white flex-col gap-[10px] w-1/1 h-[250px] rounded-[10px]">
       <div  onClick={()=>{zoomPhoto(photo._id)}} className={`${bigPhoto === photo._id ? "full-screen" : "w-full h-[200px]"}`}>
       <img src={photo.mainImage.asset.url} className={`${bigPhoto===photo._id ? "w-auto h-auto rounded-0" : "w-full h-full object-content rounded-t-[10px]"}`}></img>
        </div>
        <div className="pl-2 flex items-center">
            <h1>{photo.description}</h1>
        </div>
    </div>
})}
            </div>
          {nophoto != true ?   <button className="bg-blue-600 text-white w-[150px] h-[40px] rouned-[10px]" onClick={increaseNumber}>Daha çox</button> : null}
        </div>
    )
}

export default Gallery