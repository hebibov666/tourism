import MenuIcon from '@mui/icons-material/Menu';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { useState } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Navbar(){
    const [menu,setMenu]=useState(false)
    return(
        <div className="navbar h-[60px] w-full overflow-hidden flex items-center justify-between pr-4 pl-4">
            <div className='flex items-center gap-[15px] w-auto '>
                <img src='./logo.jpeg' className='w-[45px] h-[45px]'></img>
                <h1 className="text text-2xl font-bold w-auto text-[#A8A8A8]">Oba Turizm</h1>
            </div>
            <div className={`max-[565px]:fixed max-[565px]:w-[80%] transition-all duration-1000 z-[2]  ${menu===false ? "max-[565px]:left-[-200%] h-[0%]" : "top-0 left-0  h-[100vh]"} top-0 left-0 bg-white h-[100vh] flex justify-end max-[565px]:justify-start  w-full`}>
                <ul className="relative max-[565px]:items-start max-[565px]:pl-4 max-[565px]:text-[18px]  bg-white w-full flex items-center min-[565px]:justify-end gap-[15px] max-[565px]:flex-col max-[565px]:pt-[60px]">
<a href='#haqqimizda'><li className='list  flex flex-col box-border'>Haqqımızda</li></a>
<a href='#services'><li className='list  flex flex-col'>Xidmətlər</li></a>
<a href='#gallery'><li className='list  flex flex-col'>Qalareya</li></a>
<a href='#contact'><li className='list flex flex-col'>Əlaqə</li></a>
                </ul>
            </div>
{menu===false ? <MenuIcon onClick={()=>{setMenu(true)}} fontSize='large' className='absolute z-[1] right-0 min-[565px]:hidden text-[#A8A8A8]'/> : 
  <CloseSharpIcon fontSize='large' className='fixed z-[3] right-0 min-[565px]:hidden text-[#A8A8A8] ' onClick={()=>{setMenu(false)}}/>}
        </div>
    )
}
export default Navbar