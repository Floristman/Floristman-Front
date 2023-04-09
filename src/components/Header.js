import React from 'react'
import headerBg from '../assets/img/image.png'

function Header() {
    return (
        <header className='bg-white relative'>
            <div className="container">

                <div className="absolute top-[-55px] right-0 w-[100%]">
                    <img className='w-[100%]' src={headerBg} alt="" />
                </div>
                <div className="pt-[320px] pb-[90px] relative z-10">

                    <h1 >Подарите ощущение праздника</h1>
                    <p className='mt-[7px] mb-[28px] text-[64px] font-[700]' >Собираем букеты, <br /> созданные для Вас</p>
                    <button className='py-[23px] px-[40px] bg-buttonBackground rounded-[37px] text-white' >Выбрать букет</button>
                </div>
            </div>
        </header>
    )
}

export default Header