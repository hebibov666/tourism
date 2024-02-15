import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Scrollbar, A11y, Autoplay,EffectCoverflow, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
function SliderSection(){
    return(
        <div className="w-full overflow-hidden">
<Swiper  modules={[Pagination, Scrollbar, A11y,Autoplay,EffectCoverflow]}
    pagination={true }
    loop={true}
    autoplay={{
        delay: 2000,
    }}
>
<SwiperSlide  className="aspect-w-16 aspect-h-9">
    <img src="./banner3.png" className="object-cover w-full"></img>
    </SwiperSlide>
    <SwiperSlide className="aspect-w-16 aspect-h-9">
    <img src="./banner.png" className="w-full object-cover"></img>
    </SwiperSlide>
    <SwiperSlide  className="aspect-w-16 aspect-h-9">
    <img src="./banner2.png" className="object-cover w-full"></img>
    </SwiperSlide>
</Swiper>
        </div>
    )
}
export default SliderSection