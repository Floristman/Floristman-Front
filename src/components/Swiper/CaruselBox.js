import React from 'react'
import { style } from '../../utilits/styleTailwind/style'
import caruselImg from '../../assets/img/Ромашки для наташки.png'
import { useNavigate } from 'react-router-dom'

function CarouselBox() {
    const navigate =useNavigate()
    return (
        <div className="max-w-[284px] rounded-r-[20px] rounded-br-[20px] rounded-bl-[20px] card px-[10px] pt-[10px] pb-[35px] mb-[40px] bg-white">
            <div className="relative">
                <div className="absolute top-[5px] left-[-5px] text-center">
                    <p className={`bg-element1BG ${style.elementText}`} >ХИТ ПРОДАЖ</p>
                    <p className={`bg-element2BG ${style.elementText}`}>НОВИНКА</p>
                    <p className={`bg-element3BG ${style.elementText}`}>БУКЕТ ДНЯ</p>
                </div>
                <div className="absolute bottom-[5px] right-[-5px] text-center">
                    <p className='py-[5px] px-[7px] bg-element4BG rounded-l-[6px] rounded-bl-[6px] text-discountColor' >Скидка 50%</p>
                </div>
                <img src={caruselImg} alt="flower" />
            </div>
            <div className="desc">
                <p className={`mt-[10px] ${style.cardDesc}`} >№225 “Ромашки для Наташки” </p>
                <p className={`mt-[5px] ${style.cardDesc}`}>№225 “Ромашки для Наташки” </p>
            </div>
            <div className="elemet mt-[50px] flex items-center justify-between">
                <div className="text-center">
                    <p className={`text-[#8E8D6F] ${style.priceText1}`}>5 400 грн</p>
                    <p className={`text-[#7EA048] ${style.priceText2}`}>3 700 грн</p>
                </div>
                <div className="orderBtn">
                    <button onClick={()=>navigate('/flowers')} className={style.orderButton}>Заказать</button>
                </div>
            </div>
        </div>
    )
}

export default CarouselBox