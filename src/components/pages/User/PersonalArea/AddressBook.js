import React from 'react'
import PersonalAreaMenu from './PersonalAreaMenu'
import iconFixOne from '../../../../assets/img/imgonline-com-ua-HueSatLum-22AfGeH0Ba 1.png'
import iconFixTwo from '../../../../assets/img/imgonline-com-ua-HueSatLum-AjF7sCF4zQoHZf 1.png'
import { Link } from 'react-router-dom'
import { style } from '../../../../utilits/styleTailwind/style'

function AddressBook() {
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
        <div >
          <PersonalAreaMenu />
        </div>
        <div className='ml-[50px] w-[100%]'>
          <div className={style.LinksCss}>
            <Link to='/'>Главная</Link> / <Link to='/addresbook'>Адресная книга</Link>
          </div>
          <div>
            <h1 className='mt-[16px] mb-[32px] text-[36px] text-headerText font-[600] leading-[44px]'>Адреса доставки</h1>
            <div className=''>
              <div className=''>
                <p className='text-[18px] leading-[21px] font-[400]'>1. Город, улица Название, дом 1</p>
              </div>
              <form action="" className='mt-[15px]'>
                <input type="text" className={style.personalInpCss + ' w-full'} placeholder='Добавить адрес' />
              </form>
            </div>
          </div>
          <div >
            <h1 className='mt-[30px] mb-[32px] text-[36px] font-[600] text-headerText leading-[44px]'>Контакты</h1>
            <div>
              <div>
                <p className='text-[18px] leading-[21px] font-[400]'>1. Имя, +38 (000) 0000000</p>
              </div>
              <form action="" className='mt-[15px]'>
                <input type="text" className={style.personalInpCss + ' w-full'} placeholder='Добавить адрес' />
                  <button className='mt-[40px] py-[22px] px-[78px] bg-buttonBackground hover:bg-buttonBackgroundHover text-[24px] leading-[30px] font-[600] text-white rounded-[37px]'>Сохранить</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddressBook