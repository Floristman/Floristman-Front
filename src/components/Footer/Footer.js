import React from 'react'
import { footerLink } from '../../utilits/link/footerLink'
import { Link } from 'react-router-dom';
import navFlower from '../../assets/svg/Слой 0 (1).svg'
import { style } from '../../utilits/styleTailwind/style';
import footerTelIcon from '../../assets/svg/icons8-ringer-volume-100 1.svg';
import footerEmailIcon from '../../assets/svg/icons8-new-post-96 (1) 1.svg';
import { icons } from '../../utilits/icons/icons';



function Footer() {
  return (
    <footer className='mt-[42px] xs:mt-[15px] mb-[50px] xs:mb-[10px] '>
      <div className="container">
        <Link to='/' className='flex items-center  hover:cursor-pointer justify-center' >
          <img src={navFlower} className='xs:w-[23px] sm:w-[35px] md:w-[42px] ' alt="" />
          <div className='text-navText'>
            <h1 className={style.navH1}>FLORISTMAN</h1>
            <p className={style.navP}>Широкий выбор на любой вкус</p>
          </div>
        </Link>
        <div className="grid grid-cols-[repeat(4,auto)] xs:grid-cols-[repeat(2,auto)] gap-x-[16px] gap-y-[24px] mt-[42px] xs:mt-[15px] mb-[60px] xs:mb-[25px]" >
          {
            footerLink && footerLink.map((element, value) => {
              return (
                <div className='relative' key={value}>
                  <img src={element.img} alt="" />
                  <div className="absolute left-0 bottom-0 bg-[#fff9f7d9] w-full py-[6px] px-[4px]">
                    <div className='relative'>
                      <img src={element.frame} alt="" />
                    </div>
                    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-max text-[16px] font-[600] leading-[20px] text-headerText'>
                      <h1 className='md:text-[15px] sm:text-[20px] xs:text-[10px] xs:leading-[12px]'>{element.name}</h1>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="text-center">
          <h2 className='text-[36px] font-[600] leading-[44px] xs:text-[12px] xs:leading-[15px] text-headerText'>Контакты:</h2>
          <div className="flex justify-center items-center gap-[7px] mt-[12px] mb-[6px]">
            <img src={footerTelIcon} alt="" />
            <a href="+749500000000" className='text-[24px] font-[600] leading-[30px] xs:text-[10px] xs:leading-[13px] text-headerText'>+749500000000</a>
          </div>
          <div className="flex justify-center items-center gap-[7px]">
            <img src={footerEmailIcon} alt="" />
            <a href="#!" className='text-[24px] font-[600] leading-[30px] xs:text-[10px] xs:leading-[13px] text-headerText'>Електоронный_адрес@gmail.com</a>
          </div>
          <div className="flex justify-center items-center gap-[24px] my-[30px] xs:my-[0px] xs:mt-[15px] xs:mb-[25px]">
            <div className="cursor-pointer">
              {icons.footerViberIcon}
            </div>
            <div className="cursor-pointer">
              {icons.footerFacebookIcon}
            </div>
            <div className="cursor-pointer">
              {icons.footerWhatsappIcon}
            </div>
            <div className="cursor-pointer">
              {icons.footerInstIcon}
            </div>
          </div>
          <p className='text-[24px] font-[400] leading-[30px] xs:text-[10px] xs:leading-[11px] text-headerText'>©2021. Все права защищены </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer