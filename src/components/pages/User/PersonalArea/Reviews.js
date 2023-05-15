import React, { useContext } from 'react'
import iconFixOne from '../../../../assets/img/imgonline-com-ua-HueSatLum-22AfGeH0Ba 1.png'
import iconFixTwo from '../../../../assets/img/imgonline-com-ua-HueSatLum-AjF7sCF4zQoHZf 1.png'
import PersonalAreaMenu from './PersonalAreaMenu'
import { Link } from 'react-router-dom'
import { style } from '../../../../utilits/styleTailwind/style'
import Footer from '../../../Footer/Footer'
import PersonalAreaMenuSM from './PersonalAreaMenuSM'
import { Contexts } from '../../../../Context/Context'

function Reviews() {
  const {openClose,setOpenClose}=useContext(Contexts)
  const handleMenuBody=()=>{
    setOpenClose('translate-x-[-1000px]')
  }
  return (
    <section onClick={()=>handleMenuBody()} className={`${openClose === 'translate-x-[0px]' ? 'blur' : 'blur-none'} duration-500`}>
      <div className='bg-bodyBackground relative pt-[88px] pb-[80px] xs:pb-[20px]'>
        <div>
          <div className='absolute top-[35px] xs:hidden'>
            <img src={iconFixOne} alt="" />
          </div>
          <div className='absolute top-[387px] right-0 xs:hidden'>
            <img src={iconFixTwo} alt="" />
          </div>
        </div>
        <h1 className='hidden text-center mb-[14px] text-[18px] font-[700] leading-[22px] xs:block'>Личный кабинет</h1>
        <div className="hidden justify-center xs:flex ">
          <PersonalAreaMenuSM />
        </div>
        <div className="container flex">
          <div className='xs:hidden'>
            <PersonalAreaMenu />
          </div>
          <div className='ml-[50px] xs:ml-[0px]'>
            <div className="xs:hidden">
              <div className={style.LinksCss}>
                <Link to='/'>Главная</Link> / <Link to='/personalarea'>Отзывы</Link>
              </div>
            </div>
            <h1 className='mt-[16px] xs:mt-[0px] mb-[20px] xs:mb-[10px] text-[24px] xs:text-[16px] leading-[30px] xs:leading-[20px] font-[600] text-headerText'>Отзывы</h1>
            <div>
              <h1 className='text-buttonBackground text-[20px] font-[500] leading-[24px] xs:text-[11px] xs:leading-[12px] '>Отзыв о товаре №225 “Ромашки для Наташки”</h1>
              <p className='ml-[33px] xs:ml-[15px] mt-[10px] text-[18px] leading-[21px] xs:text-[10px] xs:leading-[12px] font-[500]'>Веб-дизайн — непростая сфера, провоцирующая постоянные споры. Кто-то скажет, что для привлечения внимания вашему лендингу просто необходим современный дизайн, включающий последние тенденции. Другие считают, что работающая посадочная страница, на которой посетители получают то, зачем пришли, гораздо важнее.</p>
              <p className='text-end mt-[5px] mb-[30px] xs:mb-[0px] text-[14px] leading-[17px] xs:text-[11px] xs:leading-[11px] font-[400]'>12:00 12.12.2021</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Reviews