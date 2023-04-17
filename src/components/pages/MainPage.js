import React from 'react'
import Flower1 from '../../assets/img/Flower1.png'
import Flower2 from '../../assets/img/Flower2.png'
import AboutUs from './AboutUs/AboutUs'
import Catalog from './Catalog/Catalog'

function MainPage() {
    return (
        <main className='bg-bodyBackground pt-[80px] relative'>
            <div className="container relative">
                <img className='absolute left-[460px] top-[150px]' src={Flower2} alt="" />
                <h1 className='pb-[40px] text-headerText font-[700] text-[48px] leading-[58px]'>Почему именно мы?</h1>
                <AboutUs />
                <h1 className='pt-[80px] pb-[40px] text-headerText font-[700] text-[48px] leading-[58px]'>Каталог</h1>
                <Catalog/>
            </div>
        </main>
    )
}

export default MainPage