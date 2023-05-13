import React from 'react'
import PersonalAreaMenu from './PersonalAreaMenu'
import iconFixOne from '../../../../assets/img/imgonline-com-ua-HueSatLum-22AfGeH0Ba 1.png'
import iconFixTwo from '../../../../assets/img/imgonline-com-ua-HueSatLum-AjF7sCF4zQoHZf 1.png'
import { Link } from 'react-router-dom'
import { style } from '../../../../utilits/styleTailwind/style'
import Footer from '../../../Footer/Footer'
import PersonalAreaMenuSM from './PersonalAreaMenuSM'

function AddressBook() {
  return (
    <section>
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
          <div className='ml-[50px] xs:ml-[0px] w-[100%]' >
            <div className="xs:hidden">
              <div className={style.LinksCss}>
                <Link to='/'>Главная</Link> / <Link to='/addresbook'>Адресная книга</Link>
              </div>
            </div>
            <div>
              <h1 className='mt-[16px] xs:mt-[0px] mb-[32px] xs:mb-[10px] text-[36px] xs:text-[16px] text-headerText font-[600] leading-[44px] xs:leading-[20px] '>Адреса доставки</h1>
              <div className=''>
                <div className=''>
                  <p className='text-[18px] leading-[21px] font-[400] xs:text-[13px] xs:leading-[12px]'>1. Город, улица Название, дом 1</p>
                </div>
                <form action="" className='mt-[15px] xs:mt-[5px]'>
                  <input type="text" className={style.personalInpCss + ' w-full'} placeholder='Добавить адрес' />
                </form>
              </div>
            </div>
            <div >
              <h1 className='mt-[30px] xs:mt-[20px] mb-[32px] xs:mb-[10px] text-[36px] xs:text-[16px] font-[600] text-headerText leading-[44px] xs:leading-[20px]'>Контакты</h1>
              <div>
                <div>
                  <p className='text-[18px] leading-[21px] font-[400] xs:text-[13px] xs:leading-[12px]'>1. Имя, +38 (000) 0000000</p>
                </div>
                <form action="" className='mt-[15px] xs:mt-[5px] xs:text-center'>
                  <input type="text" className={style.personalInpCss + ' w-full'} placeholder='Добавить новый контакт' />
                  <button className='mt-[40px] xs:mt-[20px] py-[22px] px-[78px] xs:py-[10px] xs:px-[60px] bg-buttonBackground hover:bg-buttonBackgroundHover text-[24px] leading-[30px] xs:text-[16px] xs:leading-[20px] font-[600] text-white rounded-[37px] xs:rounded-[22px]'>Сохранить</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default AddressBook