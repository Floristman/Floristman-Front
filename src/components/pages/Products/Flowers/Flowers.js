import React, { useContext, useEffect, useState } from 'react'
import img1 from '../../../../assets/img/imgonline-com-ua-HueSatLum-22AfGeH0Ba 1.png'
import img2 from '../../../../assets/img/imgonline-com-ua-HueSatLum-AjF7sCF4zQoHZf 1.png'
import img3 from '../../../../assets/img/200117200513_484017 4.png'
import testImg from '../../../../assets/img/200117200513_484017 3.png'
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
import { useAddProductMutation, useProductsQuery } from '../../../../redux/ProductSlice'
import { useNavigate } from 'react-router-dom'
import { useUpdateProductMutation } from '../../../../redux/ProductSlice'
import { forWhom } from '../../../../utilits/link/forWhom'
import { Contexts } from '../../../../Context/Context'

function Flowers(props) {
  const { flowerId, openClose, setOpenClose } = useContext(Contexts)
  console.log(flowerId);
  const navigate = useNavigate()
  const [productSlice] = useAddProductMutation();
  const { data, isSuccess } = useProductsQuery();
  const res = isSuccess && data.find(element => element.productId === flowerId && element.userId === +localStorage.getItem('userid'))
  const [counter, setCounter] = useState(1)
  useEffect(() => {
    if (res) {
      setCounter(res.count)
    }
  }, [res])
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
  const handleProduct = async (e) => {
    const res = isSuccess && data.find(element => element.productId === e.id && element.userId === localStorage.getItem('userId'))
    console.log(res);
    console.log(e);
    if (res && res.isLoading) {
      alert('mahsulot qoshilgan')
    } else if (res && !res.isLoading) {
      navigate(`/flowers/${e.id}`)
    } else {
      const task = {
        textOne: e.textOne,
        textTwo: e.textTwo,
        textThree: e.textThree,
        textFour: e.textFour,
        img: e.img,
        productNameOne: e.productNameOne,
        productNameTwo: e.productNameTwo,
        priceOne: e.priceOne,
        priceTwo: e.priceTwo,
        productId: e.id,
        userId: +localStorage.getItem('userid'),
        isLoading: false,
        count: 1
      };
      await productSlice(task);
      navigate(`/flowers/${e.id}`)
    }
  }
  const handleMenuBody = () => {
    setOpenClose('translate-x-[-1000px]')
  }

  return (
    <section onClick={() => handleMenuBody()} className={`${openClose === 'translate-x-[0px]' ? 'blur' : 'blur-none'} duration-500`}>
      <Header pStart={`Букет ${res?.productNameOne}`} />
      <div className='bg-bodyBackground relative pt-[30px] pb-[80px] xs:pb-[20px]'>
        <div className='absolute top-[40px] left-0 lg:left-[-28px] xs:hidden'>
          <img src={img1} alt="" />
        </div>
        <div className='absolute top-[400px] right-0 xs:hidden'>
          <img src={img2} alt="" />
        </div>
        <div className="container ">
          <div className="flex md:flex-wrap md:justify-center sm:flex-wrap sm:justify-center xs:flex-wrap xs:justify-center ">
            <div>
              <div>
                {/* <img width={'100%'} src={res?.img} alt="" /> */}
                <img width={'100%'} className='xs:px-[20px]' src={testImg} alt="" />
              </div>
              <div className='w-[460px] xs:w-[320px] flex items-center mt-[14px]'>
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
                    <div className='xs:w-[55px]'>
                      <img src={img3} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='xs:w-[55px]'>
                      <img src={img3} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='xs:w-[55px]'>
                      <img src={img3} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='xs:w-[55px]'>
                      <img src={img3} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='xs:w-[55px]'>
                      <img src={img3} alt="" />
                    </div>
                  </SwiperSlide>

                </Swiper>
                <ArrowForwardIosIcon />
              </div>
            </div>
            <div className='ml-[20px] xs:ml-[0px] lg:ml-[10px] w-full flex flex-col justify-between'>
              <div>
                <div className='grid text-center grid-cols-[repeat(2,130px)] gap-x-[20px] gap-y-[10px] md:justify-center md:mt-[20px] md:grid-cols-[repeat(2,220px)] sm:justify-center sm:mt-[20px] sm:grid-cols-[repeat(2,220px)] xs:mt-[10px] xs:grid-cols-[repeat(2,125px)]'>
                  <p className=' bg-element1BG py-[5px] px-[7px]   text-white uppercase font-[500] text-[14px] leading-[17px] rounded-[6px]' >{res?.textOne}</p>
                  <p className=' py-[5px] px-[7px] bg-element4BG rounded-[6px]  text-discountColor font-[500] text-[14px] leading-[17px]' >{res?.textFour}</p>
                  <p className=' bg-element2BG py-[5px] px-[7px]   text-white uppercase font-[500] text-[14px] leading-[17px] rounded-[6px]'>{res?.textTwo}</p>
                  <p className=' bg-element3BG py-[5px] px-[7px]  text-white uppercase font-[500] text-[14px] leading-[17px] rounded-[6px]'>{res?.textThree}</p>
                </div>
                <div className="flex gap-[45px] my-[20px] xs:place-content-between">
                  <p className='text-[#8E8D6F] text-[18px] font-[600] leading-[22px] xs:text-[11px] xs:leading-[13px]'>Отзывов (1)</p>
                  <p className='text-[#7EA048] text-[18px] font-[600] leading-[22px] xs:text-[11px] xs:leading-[13px]'>Есть в наличие</p>
                </div>
                <div>
                  <h2 className='text-[#272626] text-[20px] leading-[24px] font-[600] xs:text-[13px] xs:leading-[15px]'>Повод:</h2>
                  <p className='text-[#272626] text-[18px] leading-[20px] font-[500] mt-[5px] xs:text-[10px] xs:leading-[10px] xs:mt-[2px]' >8 марта. 9 мая. Любовь</p>
                </div>
                <div className='mt-[10px]'>
                  <h2 className='text-[#272626] text-[20px] leading-[24px] font-[600] xs:text-[13px] xs:leading-[15px]'>Кому:</h2>
                  <p className='text-[#272626] text-[18px] leading-[20px] font-[500] mt-[5px] xs:text-[10px] xs:leading-[10px] xs:mt-[2px]'>Маме. Девушке. Женщине. Учителю. Теще. Друзьям</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-[60px] mb-[30px] sm:mt-[30px] xs:mt-[15px]">
                <div className='flex items-center gap-[27px] xs:w-[55px]'>
                  <div className="flex items-center justify-between gap-[15px] bg-[#FFF6F2] rounded-[55px] py-[21px] px-[11px] xs:py-[6px] xs:px-[11px]">
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
                  <button onClick={(e) => handleBasket(e)} className='py-[23px] px-[80px] bg-buttonBackground hover:bg-buttonBackgroundHover text-[24px] text-white font-[700] leading-[29px] rounded-[37px] xs:py-[10px] xs:px-[35px] xs:text-[14px] xs:font-[600] xs:rounded-[15px]'>В корзину</button>
                </div>
              </div>
              <div>
                <h2 className='text-[#272626] text-[24px] leading-[30px] font-[600] xs:text-[13px] xs:leading-[15px]'>Описание:</h2>
                <p className='text-[#272626] text-[18px] leading-[20px] font-[500] mt-[20px] xs:text-[10px] xs:leading-[12px] xs:mt-[5px]'>Веб-дизайн — непростая сфера, провоцирующая постоянные споры. Кто-то скажет, что для привлечения внимания вашему лендингу просто необходим современный дизайн, включающий последние тенденции. Другие считают, что работающая посадочная страница, на которой посетители получают то, зачем пришли, гораздо важнее.</p>
              </div>
            </div>
          </div>
          <div className="mt-[30px] xs:mt-[15px]">
            <h2 className='text-[#272626] text-[24px] leading-[30px] font-[600] xs:text-[13px] xs:leading-[15px]'>Отзывы (1):</h2>
            <h2 className='text-[#D7537A] text-[20px] font-[500] leading-[24px] mt-[20px] mb-[10px] xs:text-[10px] xs:leading-[12px] xs:mt-[5px] '>Отзыв от Лена Ленина </h2>
            <p className='text-[#272626] text-[18px] leading-[20px] font-[500] ml-[60px] mt-[20px] sm:ml-[20px] xs:ml-[10px] xs:text-[10px] xs:leading-[12px] xs:mt-[5px]'>Веб-дизайн — непростая сфера, провоцирующая постоянные споры. Кто-то скажет, что для привлечения внимания вашему лендингу просто необходим современный дизайн, включающий последние тенденции. Другие считают, что работающая посадочная страница, на которой посетители получают то, зачем пришли, гораздо важнее.</p>
          </div>
          <div className='mt-[80px] xs:mt-[20px] xs:text-center'>
            <h2 className='text-[#272626] text-[48px] font-[700] leading-[59px] mb-[40px] xs:mb-[15px] xs:text-[16px] xs:font-[600] xs:leading-[19px]'>Вместе покупают</h2>
            <div className="block xs:hidden">
              <Carusel />
            </div>
            <div className='hidden xs:flex xs:flex-wrap xs:justify-between'>
              {
                forWhom && forWhom.map((element, value) => {
                  return (
                    <div className="max-w-[155px] rounded-r-[20px] rounded-br-[20px] rounded-bl-[20px] card px-[10px] pt-[10px] pb-[35px] mb-[10px] bg-white">
                      <div className="relative">
                        <div className="absolute top-[5px] left-[-5px] text-center">
                          <p className={`bg-element1BG text-[6px] font-[500] leading-[8px] py-[2px] px-[2px] mb-[2px]`} >{element.textOne}</p>
                          <p className={`bg-element2BG text-[6px] font-[500] leading-[8px] py-[2px] px-[2px] mb-[2px]`}>{element.textTwo}</p>
                          <p className={`bg-element3BG text-[6px] font-[500] leading-[8px] py-[2px] px-[2px]`}>{element.textThree}</p>
                        </div>
                        <div className="absolute bottom-[5px] right-[-5px] text-center">
                          <p className='py-[5px] px-[7px] text-[6px] font-[500] leading-[7px] bg-element4BG rounded-l-[6px] rounded-bl-[6px] text-discountColor' >{element.textFour}</p>
                        </div>
                        <img src={element.img} alt="flower" />
                      </div>
                      <div className="desc">
                        <p className={`mt-[7px] text-black font-[500] text-[8px] leading-[11px]`} >{element.productNameOne}</p>
                        <p className={`mt-[4px]  text-black font-[500] text-[8px] leading-[11px]`}>{element.productNameTwo}</p>
                      </div>
                      <div className="elemet mt-[50px] flex items-center justify-between">
                        <div className="text-center">
                          <p className={`text-[#7EA048] font-[500] text-[8px] leading-[11px]`}>{element.priceTwo} грн</p>
                        </div>
                        <div className="orderBtn">
                          <button onClick={() => handleProduct(element)} className='py-[5px] px-[18px] rounded-[10px] bg-[#D7537A] font-[600] text-[8px] leading-[11px] text-white hover:bg-buttonBackgroundHover'>Заказать</button>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Flowers