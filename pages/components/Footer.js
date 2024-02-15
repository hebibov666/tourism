import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
function Footer(){
    return(
        <div id='contact' className="bg-black flex mt-[-40px] pt-[20px] gap-[30px]">
            <div className='text-white flex flex-col gap-[10px] p-[20px]'>
            <h1 className='font-bold text-xl'>Əlaqə</h1>
                <a href='tel://+994554231175' className='flex gap-[15px] bg-blue-600 rounded-[7px] flex items-center justify-center h-[35px] w-[120px]'><CallIcon/>Zəng et</a>
                <a href="mailto:obatourism@outlook.com" className='flex gap-[15px] bg-red-600 rounded-[7px] flex items-center justify-center h-[35px] w-[120px]'><MailIcon/>Email</a>
            </div>
            <div className='text-white flex flex-col gap-[10px] p-[20px]'>
                <h1 className='font-bold text-xl'>Sosial media</h1>
                <a href='https://wa.me/554231175' className='flex gap-[15px]'><WhatsAppIcon/> WhatsApp</a>
                <a href='https://www.instagram.com/p/C16LPdVokN6/?igsh=YzQ0djJjMDR1OXU%3D'  className='flex gap-[15px]'><InstagramIcon></InstagramIcon>Instagram</a>
           <a href='https://www.facebook.com/people/Tur-Menecer/pfbid0zt6fE6JGWvNgGAKxLyksxYau6Ns9n3vVyakywn8HBLHF1HFoVFeYwtfipyM13rudl/'  className='flex gap-[15px]'><FacebookOutlinedIcon/>Facebook</a>
            </div>
            </div>
    )
}
export default Footer