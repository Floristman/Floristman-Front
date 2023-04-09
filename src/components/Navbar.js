import React from 'react'
// import { style } from '../../utilitsTailwindCss/style'
import navIcon from '../assets/svg/Слой 0.svg'
import navMenu from '../assets/svg/Гамбургер.svg'
import navSearch from '../assets/svg/Поиск.svg'
import nav from '../assets/svg/Group.svg'
import navUser from '../assets/svg/Пользователь.svg'

function Navbar() {
    return (
        <nav className='relative z-20 bg-bodyBackground'>
            <div className="container py-[8px]">
                <div className="flex justify-between items-center">
                    <div className='columns-1'>
                        <img src={navMenu} alt="" />
                    </div>
                    <div className='flex justify-between items-center'>
                        <img src={navIcon} alt="" />
                        <div className='text-navText'>
                            <h1 className='text-center  font-[700] leading-[32px] text-[24px]'>FLORISTMAN</h1>
                            <p className='text-[11px] leading-[14px] font-[400]'>Широкий выбор на любой вкус</p>
                        </div>
                    </div>
                    <div className="flex gap-[15px]">
                        <img src={navSearch} alt="" />
                        <img src={nav} alt="" />
                        <img src={navUser} alt="" />
                    </div>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar