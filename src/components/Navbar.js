import React from 'react'
// import { style } from '../../utilitsTailwindCss/style'
import navIcon from '../assets/svg/Слой 0.svg'
import navMenu from '../assets/svg/Гамбургер.svg'
import navSearch from '../assets/svg/Поиск.svg'
import navBasket from '../assets/svg/Group.svg'
import navUser from '../assets/svg/Пользователь.svg'
import { useNavigate } from 'react-router-dom'
import { style } from '../utilits/style'
// import { icons } from '../utilits/icons'

function Navbar() {
    const navigate=useNavigate()
    return (
        <nav className='relative z-[12] bg-bodyBackground '>
            <div className="container py-[8px]">
                <div className="grid  justify-between items-center grid-cols-[repeat(3,auto)]">
                    <div>
                        <img src={navMenu} className='hover:cursor-pointer xs:w-[15px] sm:w-[20px] md:w-[23px]' alt="" />
                    </div>
                    <div className='flex items-center  hover:cursor-pointer' onClick={()=> navigate('/')}>
                        <img src={navIcon} className='xs:w-[23px] sm:w-[35px] md:w-[42px] ' alt="" />
                        <div className='text-navText'>
                            <h1 className={style.navH1}>FLORISTMAN</h1>
                            <p className={style.navP}>Широкий выбор на любой вкус</p>
                        </div>
                    </div>
                    {/* {icons.logo} */}
                    <div className="flex gap-[15px] items-center xs:gap-[10px] sm:gap-[10px]">
                        <img src={navSearch} className='hover:cursor-pointer xs:w-[24px] sm:w-[30px] md:w-[38px]'  alt="" />
                        <img src={navBasket} className='hover:cursor-pointer xs:w-[24px] sm:w-[30px] md:w-[38px]' onClick={()=>navigate('/basket')} alt="" />
                        <img src={navUser} className='hover:cursor-pointer xs:w-[24px] sm:w-[30px] md:w-[38px]' onClick={()=>navigate('/user')} alt="" />
                    </div>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar