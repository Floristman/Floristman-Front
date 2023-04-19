import React from 'react'
import flower from '../../../../assets/img/200117200513_484017 3.png'
import img1 from '../../../../assets/img/imgonline-com-ua-HueSatLum-22AfGeH0Ba 1.png'
import img2 from '../../../../assets/img/imgonline-com-ua-HueSatLum-AjF7sCF4zQoHZf 1.png'
import img3 from '../../../../assets/img/200117200513_484017 4.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper'
import Header from '../../../Header/Header'

function Flowers(props) {
  return (
    <section>
      <Header pStart='Букет №225 “Ромашки' pEnd='для Наташки”' />
      <div className='bg-bodyBackground relative pt-[30px] pb-[80px]'>
        <div className='absolute top-[40px] left-0'>
          <img src={img1} alt="" />
        </div>
        <div className='absolute top-[400px] right-0'>
          <img src={img2} alt="" />
        </div>
        <div className="container flex ">
          <div>
            <div>
              <img src={flower} alt="" />
            </div>
            <div className='w-[50px]'>
              <ArrowBackIosIcon />
              <Swiper
                modules={[Pagination]}
                spaceBetween={15}
                slidesPerView={100}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                ...
              </Swiper>

              <ArrowForwardIosIcon />
            </div>
          </div>
          <div className='ml-[20px]'>
            <div className='grid text-center grid-cols-[repeat(2,auto)] gap-x-[20px] gap-y-[10px]'>
              
              <p className=' bg-element1BG py-[5px] px-[7px]   text-white uppercase font-[500] text-[14px] leading-[17px] rounded-[6px]' >ХИТ ПРОДАЖ</p>
              <p className=' py-[5px] px-[7px] bg-element4BG rounded-[6px]  text-discountColor font-[500] text-[14px] leading-[17px]' >Скидка 50%</p>
              <p className=' bg-element2BG py-[5px] px-[7px]   text-white uppercase font-[500] text-[14px] leading-[17px] rounded-[6px]'>НОВИНКА</p>
              <p className=' bg-element3BG py-[5px] px-[7px]  text-white uppercase font-[500] text-[14px] leading-[17px] rounded-[6px]'>БУКЕТ ДНЯ</p>
            </div>
            <div className="flex">
              <p>Отзывов (1)</p>
              <p>Есть в наличие</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Flowers