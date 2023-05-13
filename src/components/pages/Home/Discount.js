import React from 'react'
import Flower1 from '../../../assets/img/Flower1.png'
import Flower2 from '../../../assets/img/Flower2.png'
import Carusel from '../../Swiper/Carusel'

function Discount() {
    return (
        <main className='pt-[65px] sm:pt-[30px] xs:pt-[20px] xs:mt-[-20px] sm:mt-[-50px] md:mt-[-20px] relative z-[1] overflow-hidden bg-bodyBackground'>
            <img className='absolute left-[-40px] lg:left-[-70px] md:left-[-63px] sm:hidden xs:hidden' src={Flower1} alt="" />
            <img className='absolute right-[-50px] lg:right-[-80px] bottom-[100px] sm:hidden xs:hidden' src={Flower2} alt="" />
            <div className="container md:justify-center">
                <h1 className='mb-[40px] sm:mb-[20px] text-headerText font-[700] text-[48px] leading-[58px] xs:text-[20px] xs:leading-[22px] xs:text-center xs:mb-[10px]'>Скидки</h1>
                <Carusel/>
            </div>
        </main>
    )
}

export default Discount
// Comment