import React from 'react'
import Flower1 from '../../../assets/img/Flower1.png'
import Flower2 from '../../../assets/img/Flower2.png'
import Carusel from '../../Swiper/Carusel'

function Discount() {
    return (
        <main className='pt-[65px] xs:mt-[-20px] sm:mt-[-50px] md:mt-[-20px] relative z-[1] overflow-hidden bg-bodyBackground'>
            <img className='absolute left-[-40px]' src={Flower1} alt="" />
            <img className='absolute right-[-50px] bottom-[100px]' src={Flower2} alt="" />
            <div className="container">
                <h1 className='mb-[40px] text-headerText font-[700] text-[48px] leading-[58px]'>Скидки</h1>
                <Carusel/>
            </div>
        </main>
    )
}

export default Discount
// Comment