import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { style } from '../../utilits/styleTailwind/style'
import { icons } from '../../utilits/icons/icons'
import navMenu from '../../assets/svg/Гамбургер.svg'
import navFlower from '../../assets/svg/Слой 0 (1).svg'
import navSearch from '../../assets/svg/Поиск.svg'

function Navbar() {
    const location = useLocation()
    return (
        <nav className='fixed top-0 left-0 w-[100%] z-[15] bg-bodyBackground shadow-navbarShadow'>
            <div className="container ">
                <div className="grid py-[8px] justify-between items-center grid-cols-[repeat(3,auto)]">
                    <div>
                        <img src={navMenu} className='hover:cursor-pointer xs:w-[15px] sm:w-[20px] md:w-[23px]' alt="" />
                        {icons.st}
                    </div>
                    <Link to='/' className='flex items-center  hover:cursor-pointer' >
                        <img src={navFlower} className='xs:w-[23px] sm:w-[35px] md:w-[42px] ' alt="" />
                        <div className='text-navText'>
                            <h1 className={style.navH1}>FLORISTMAN</h1>
                            <p className={style.navP}>Широкий выбор на любой вкус</p>
                        </div>
                    </Link>
                    <div className="flex gap-[15px] items-center xs:gap-[10px] sm:gap-[10px]">
                      <Link className='w-[49px]'><img src={navSearch} className='hover:cursor-pointer hover:w-[49px] xs:w-[24px] sm:w-[30px] md:w-[38px]' alt="" /></Link>
                        <Link to='/basket' className='flex justify-center w-[49px] hover:cursor-pointer  hover:w-[49px] xs:w-[24px] sm:w-[30px] md:w-[38px]'>{location.pathname === '/basket' ? icons.navBasketHover : icons.navBasket }</Link>
                        <Link to={style?'/personalarea':'/register'} className='flex justify-center w-[49px] h-[46px] hover:cursor-pointer hover:w-[49px] xs:w-[24px] sm:w-[30px] md:w-[38px]'>{location.pathname === '/user' ? icons.navUserHover : icons.navUser }</Link>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar