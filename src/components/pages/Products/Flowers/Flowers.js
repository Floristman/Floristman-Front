import React, { useEffect, useState } from 'react'
import img1 from '../../../../assets/img/imgonline-com-ua-HueSatLum-22AfGeH0Ba 1.png'
import img2 from '../../../../assets/img/imgonline-com-ua-HueSatLum-AjF7sCF4zQoHZf 1.png'
import img3 from '../../../../assets/img/200117200513_484017 4.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper'
import Header from '../../../Header/Header'
import minus from '../../../../assets/svg/icons8-subtract-100 1.svg'
import plus from '../../../../assets/svg/icons8-plus-math-100 1.svg'
import Carusel from '../../../Swiper/Carusel'
import Footer from '../../../Footer/Footer'
import { useProductsQuery } from '../../../../redux/ProductSlice'
import { useParams } from 'react-router-dom'
import { useUpdateProductMutation } from '../../../../redux/ProductSlice'

function Flowers(props) {
  const { id } = useParams()
  const { data, isSuccess } = useProductsQuery();
  const res = isSuccess && data.find(element => element.productId === +id && element.userId === +localStorage.getItem('userid'))
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    if (res) {
      setCounter(res.count)
    }
  },[res])
  const minusCounter = (e) => {
    e.preventDefault()
    setCounter(counter - 1)
    if (counter <= 1) {
      setCounter(1)
    }
  }
  // console.log(id);
  // console.log(res);
  const [updateProduct] = useUpdateProductMutation();
  const handleBasket = async (e) => {
    e.preventDefault()
    if (res) {
      const product = {
        textOne: res.textOne,
        textTwo: res.textTwo,
        textThree: res.textThree,
        textFour: res.textFour,
        img: res.img,
        productNameOne: res.productNameOne,
        productNameTwo: res.productNameTwo,
        priceOne: res.priceOne,
        priceTwo: res.priceTwo,
        productId: res.productId,
        userId: res.userId,
        isLoading: true,
        id: res.id,
        count: counter
      };
      updateProduct(product);
    }
  }

  return (
    <section>
      <Header pStart={`Букет ${res?.productNameOne}`} />
      <div className='bg-bodyBackground relative pt-[30px] pb-[80px]'>
        <div className='absolute top-[40px] left-0'>
          <img src={img1} alt="" />
        </div>
        <div className='absolute top-[400px] right-0'>
          <img src={img2} alt="" />
        </div>
        <div className="container">
          <div className="flex">

            <div>
              <div>
                <img width={'100%'} src={res?.img} alt="" />
              </div>
              <div className='w-[460px] flex items-center mt-[14px]'>
                <ArrowBackIosIcon />
                <Swiper
                  modules={[Pagination, Navigation]}
                  spaceBetween={5}
                  slidesPerView={4}
                  scrollbar
                  navigation
                // onSlideChange={() => console.log('slide change')}
                >
                  <SwiperSlide>
                    <div>
                      <img src={img3} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img src={img3} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img src={img3} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img src={img3} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img src={img3} alt="" />
                    </div>
                  </SwiperSlide>

                </Swiper>
                <ArrowForwardIosIcon />
              </div>
            </div>

            <div className='ml-[20px] w-full flex flex-col justify-between'>
              <div>
                <div className='grid text-center grid-cols-[repeat(2,130px)] gap-x-[20px] gap-y-[10px]'>

                  <p className=' bg-element1BG py-[5px] px-[7px]   text-white uppercase font-[500] text-[14px] leading-[17px] rounded-[6px]' >{res?.textOne}</p>
                  <p className=' py-[5px] px-[7px] bg-element4BG rounded-[6px]  text-discountColor font-[500] text-[14px] leading-[17px]' >{res?.textFour}</p>
                  <p className=' bg-element2BG py-[5px] px-[7px]   text-white uppercase font-[500] text-[14px] leading-[17px] rounded-[6px]'>{res?.textTwo}</p>
                  <p className=' bg-element3BG py-[5px] px-[7px]  text-white uppercase font-[500] text-[14px] leading-[17px] rounded-[6px]'>{res?.textThree}</p>
                </div>
                <div className="flex gap-[45px] my-[20px]">
                  <p className='text-[#8E8D6F] text-[18px] font-[600] leading-[22px]'>Отзывов (1)</p>
                  <p className='text-[#7EA048] text-[18px] font-[600] leading-[22px]'>Есть в наличие</p>
                </div>
                <div>
                  <h2 className='text-[#272626] text-[20px] leading-[24px] font-[600]'>Повод:</h2>
                  <p className='text-[#272626] text-[18px] leading-[20px] font-[500] mt-[5px]' >8 марта. 9 мая. Любовь</p>
                </div>
                <div className='mt-[10px]'>
                  <h2 className='text-[#272626] text-[20px] leading-[24px] font-[600]'>Кому:</h2>
                  <p className='text-[#272626] text-[18px] leading-[20px] font-[500] mt-[5px]'>Маме. Девушке. Женщине. Учителю. Теще. Друзьям</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className='flex items-center gap-[27px]'>
                  <div className="flex items-center justify-between gap-[15px] bg-[#FFF6F2] rounded-[55px] py-[21px] px-[11px]">
                    <button className='max-w-[30px]' onClick={(e) => minusCounter(e)}><img src={minus} alt="" /></button>
                    <p className='text-[24px] font-[400] leading-[29px] w-[20px] text-center'>{counter}</p>
                    <button className='max-w-[30px]' onClick={() => setCounter(counter + 1)}><img src={plus} alt="" /></button>
                  </div>
                  <div>
                    <p className='text-[#8e8d6f] text-[18px] leading-[22px] font-[500] line-through'>{res?.priceOne}</p>
                    <p className='text-discountColor text-[24px] leading-[30px] font-[500] mt-[15px]'>{res?.priceTwo}</p>
                  </div>
                </div>
                <div className='flex justify-center'>
                  <button onClick={(e) => handleBasket(e)} className='py-[23px] px-[80px] bg-buttonBackground hover:bg-buttonBackgroundHover text-[24px] text-white font-[700] leading-[29px] rounded-[37px]'>В корзину</button>
                </div>
              </div>
              <div>
                <h2 className='text-[#272626] text-[24px] leading-[30px] font-[600]'>Описание:</h2>
                <p className='text-[#272626] text-[18px] leading-[20px] font-[500] mt-[20px]'>Веб-дизайн — непростая сфера, провоцирующая постоянные споры. Кто-то скажет, что для привлечения внимания вашему лендингу просто необходим современный дизайн, включающий последние тенденции. Другие считают, что работающая посадочная страница, на которой посетители получают то, зачем пришли, гораздо важнее.</p>
              </div>
            </div>

          </div>
          <div className="mt-[30px]">
            <h2 className='text-[#272626] text-[24px] leading-[30px] font-[600]'>Отзывы (1):</h2>
            <h2 className='text-[#D7537A] text-[20px] font-[500] leading-[24px] mt-[20px] mb-[10px]'>Отзыв от Лена Ленина </h2>
            <p className='text-[#272626] text-[18px] leading-[20px] font-[500] mt-[20px]'>Веб-дизайн — непростая сфера, провоцирующая постоянные споры. Кто-то скажет, что для привлечения внимания вашему лендингу просто необходим современный дизайн, включающий последние тенденции. Другие считают, что работающая посадочная страница, на которой посетители получают то, зачем пришли, гораздо важнее.</p>
          </div>
          <div className='mt-[80px]'>
            <h2 className='text-[#272626] text-[48px] font-[700] leading-[59px] mb-[40px]'>Вместе покупают</h2>
            <Carusel />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Flowers