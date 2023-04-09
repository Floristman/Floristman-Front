import React from 'react'
import headerBg from '../assets/img/image.png'

function Header() {
    return (
        <header className='bg-white relative'>
            <div className="container">

                <div className="absolute top-[-70px] right-0 w-[100%]">
                    <img className='w-[100%]' src={headerBg} alt="" />
                </div>
                <div className="pt-[320px] pb-[90px] relative z-10">

                    <h1 className='text-headerText font-[400] text-[24px] leading-[31px]'>Подарите ощущение праздника</h1>
                    <p className='text-headerText mt-[7px] mb-[28px] text-[64px] font-[700] leading-[78px] tracking-[0.02em]' >Собираем букеты, <br /> созданные для Вас</p>
                    <button className='py-[23px] px-[40px] bg-buttonBackground rounded-[37px] text-white font-[700] text-[24px] leading-[30px]' >Выбрать букет</button>
                </div>
            </div>
        </header>
    )
}

export default Header