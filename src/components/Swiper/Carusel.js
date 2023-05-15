import React, { useContext } from 'react'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { style } from '../../utilits/styleTailwind/style'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import { forWhom } from '../../utilits/link/forWhom';
import { useNavigate } from 'react-router-dom';
import { useAddProductMutation, useProductsQuery } from '../../redux/ProductSlice';
import { Contexts } from '../../Context/Context';




function Carusel() {
    const navigate = useNavigate()
    const { setFlowerId, } = useContext(Contexts)
    const [productSlice] = useAddProductMutation();
    const { data, isSuccess } = useProductsQuery();
    const handleProduct = async (e) => {
        const res = isSuccess && data.find(element => element.productId === e.id && element.userId === localStorage.getItem('userId'))
        console.log(res);
        console.log(e);
        if (res && res.isLoading) {
            alert('mahsulot qoshilgan')
        } else if (res && !res.isLoading) {
           await navigate(`/flower/${e.productNameOne}`)
            setFlowerId(e.id)
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
           await navigate(`/flower/${e.productNameOne}`)
            setFlowerId(e.id)
        }
    }
    return (
        <Swiper
            modules={[Pagination]}
            spaceBetween={15}
            slidesPerView={4}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                },
                1077: {
                    slidesPerView: 4,
                },
            }}
            pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        >
            {
                forWhom && forWhom.map((element, value) => {
                    return (
                        <SwiperSlide key={value}>
                            <div className="max-w-full rounded-r-[20px] rounded-br-[20px] rounded-bl-[20px] card px-[10px] pt-[10px] pb-[35px] mb-[40px] bg-white">
                                <div className="relative">
                                    <div className="absolute top-[5px] left-[-5px] text-center">
                                        <p className={`bg-element1BG ${style.elementText}`} >{element.textOne}</p>
                                        <p className={`bg-element2BG ${style.elementText}`}>{element.textTwo}</p>
                                        <p className={`bg-element3BG ${style.elementText}`}>{element.textThree}</p>
                                    </div>
                                    <div className="absolute bottom-[5px] right-[-5px] text-center">
                                        <p className='py-[5px] px-[7px] bg-element4BG rounded-l-[6px] rounded-bl-[6px] text-discountColor' >{element.textFour}</p>
                                    </div>
                                    <img className='w-full' src={element.img} alt="flower" />
                                </div>
                                <div className="desc">
                                    <p className={`mt-[10px] ${style.cardDesc}`} >{element.productNameOne}</p>
                                    <p className={`mt-[5px] ${style.cardDesc}`}>{element.productNameTwo}</p>
                                </div>
                                <div className="elemet mt-[50px] flex items-center justify-between">
                                    <div className="text-center">
                                        <p className={`text-[#8E8D6F] ${style.priceText1}`}>{element.priceOne} грн</p>
                                        <p className={`text-[#7EA048] ${style.priceText2}`}>{element.priceTwo} грн</p>
                                    </div>
                                    <div className="orderBtn">
                                        <button onClick={() => handleProduct(element)} className={style.orderButton}>Заказать</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }

        </Swiper>
    )
}

export default Carusel