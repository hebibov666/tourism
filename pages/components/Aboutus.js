import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function AboutUs(){
   useEffect(()=>{
    AOS.init()
   },)
    return(
        <div id='haqqimizda' data-aos="zoom-in-right" className="bg-blue-600 pb-[40px] pt-[20px] rounded-t-[30px] w-full h-auto flex flex-col items-center gap-[20px]">
        <div>
        <h1 className="title2 text-white flex flex-col items-center w-full text-center font-bold text-xl">Haqqımızda</h1>
        </div>
        <div  className="flex p-6 w-full max-[990px]:flex-col max-[990px]:gap-[30px] justify-around items-center">
    <div  className="basis-[50%]">
    <p className="text-center lg:text-xl font-bold text-white">Səyahətlərinizi unudulmaz edəcək bir təcrübə üçün buradayıq. X Turizm Şirkəti olaraq, dünyanın dört bir tərəfinə yayılan nəfəs kəsən məkanlarda sizə unikal bir səfər təqdim edirik. Bizimlə yalnız bir səyahət etmir, hayallarınızın ötesində bir macərəyə qatılırsınız.

X Turizm Şirkəti olaraq, çeşidliliyin və keyfiyyətin ön planda olduğu geniş bir tur portfölümüzü təqdim etməkdə məmnunluq hissi duyuruq. Xarici turistlərimizlə, keşf etmək istədiyiniz ölkələrin qapılarını aralayırıq. Təbiətin müqəddəs güzelliklərindən tarixin dərin izlərinə qədər, sizi təsirləyici yerlərə aparmaq üçün gözləkliyirik.


</p>
    </div>
    <div className='bg-white rounded-[20px]'>
<img src="./tourback.png" className="rounded-[20px] object-cover"></img>
    </div>
        </div>

       </div>
    )
}
export default AboutUs