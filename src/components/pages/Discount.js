import React from 'react'
import { Grid } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import caruselImg from '../../assets/img/Ромашки для наташки.png'
import 'swiper/css/grid';

function Discount() {
    return (
        <main className='mt-[-120px] xs:mt-[-20px] sm:mt-[-50px] md:mt-[-20px] relative z-[1] bg-bodyBackground'>
            <div className="container">
                <h1>Скидки</h1>
                <div className="carusel">
                    <Swiper
                        modules={[Grid]}
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >


                        <SwiperSlide ><img src={caruselImg} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={caruselImg} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={caruselImg} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={caruselImg} alt="" /></SwiperSlide>


                    </Swiper>
                </div>
            </div>
        </main>
    )
}

export default Discount