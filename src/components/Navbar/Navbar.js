import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { style } from '../../utilits/styleTailwind/style'
import { icons } from '../../utilits/icons/icons'
import navMenu from '../../assets/svg/Гамбургер.svg'
import navFlower from '../../assets/svg/Слой 0 (1).svg'
import navSearch from '../../assets/svg/Поиск.svg'
import { useUsersQuery } from '../../redux/UserSlice'
import { useProductsQuery } from '../../redux/ProductSlice'

function Navbar() {
    const location = useLocation()
    const { data, isSuccess } = useUsersQuery();
    const {data:dataProduct}=useProductsQuery()
    const product = dataProduct && dataProduct.filter(element=> element.userId === +localStorage.getItem('userid') && element.isLoading)
    const examination = isSuccess && data.find(element => element.email === localStorage.getItem('email') && element.isLoading)
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
                        <Link className='w-[49px]'><img src={navSearch} className='hover:cursor-pointer xs:w-[24px] sm:w-[30px] md:w-[38px]' alt="" /></Link>
                        <div className='relative'>
                            <div className={`${location.pathname === '/basket' ? 'bg-[#EB6999]' : 'bg-[#EB8671]'} absolute right-[3px] top-[-7px] bg-[#EB8671] rounded-[50%] w-[18px] flex justify-center items-center`}>
                                <p className='text-[#FFF0E4] text-[15px] font-[700] leading-[18px]'>{product?.length}</p>
                            </div>
                            <Link to='/basket' className='flex justify-center w-[49px] hover:cursor-pointer  hover:w-[49px] xs:w-[24px] sm:w-[30px] md:w-[38px]'>{location.pathname === '/basket' ? icons.navBasketHover : icons.navBasket}</Link>
                        </div>
                        <Link to={examination ? '/personalarea' : '/register'} className='flex justify-center w-[49px] h-[46px] hover:cursor-pointer hover:w-[49px] xs:w-[24px] sm:w-[30px] md:w-[38px]'>{location.pathname === '/personalarea' ||location.pathname === '/register' ? icons.navUserHover : icons.navUser}</Link>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar