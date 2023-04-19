import React from 'react'
import iconFixOne from '../../../../assets/img/imgonline-com-ua-HueSatLum-22AfGeH0Ba 1.png'
import iconFixTwo from '../../../../assets/img/imgonline-com-ua-HueSatLum-AjF7sCF4zQoHZf 1.png'
import PersonalAreaMenu from './PersonalAreaMenu'
import { Link } from 'react-router-dom'
import { style } from '../../../../utilits/styleTailwind/style'

function Reviews() {
  return (
    <section className='bg-bodyBackground relative pt-[88px] pb-[80px]'>
      <div>
        <div className='absolute top-[35px]'>
          <img src={iconFixOne} alt="" />
        </div>
        <div className='absolute top-[387px] right-0'>
          <img src={iconFixTwo} alt="" />
        </div>
      </div>
      <div className="container flex">
      <div>
          <PersonalAreaMenu />
        </div>
        <div className='ml-[50px]'>
          <div className={style.LinksCss}>
            <Link to='/'>Главная</Link> / <Link to='/personalarea'>Отзывы</Link>
          </div>
          <h1 className='mt-[16px] mb-[20px] text-[24px] leading-[30px] font-[600] text-headerText'>Отзывы</h1>
          <div>
            <h1 className='text-buttonBackground text-[20px] font-[500] leading-[24px]'>Отзыв о товаре №225 “Ромашки для Наташки”</h1>
            <p className='ml-[33px] mt-[10px] text-[18px] leading-[21px] font-[500]'>Веб-дизайн — непростая сфера, провоцирующая постоянные споры. Кто-то скажет, что для привлечения внимания вашему лендингу просто необходим современный дизайн, включающий последние тенденции. Другие считают, что работающая посадочная страница, на которой посетители получают то, зачем пришли, гораздо важнее.</p>
            <p className='text-end mt-[5px] mb-[30px] text-[14px] leading-[174px] font-[400]'>12:00 12.12.2021</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Reviews