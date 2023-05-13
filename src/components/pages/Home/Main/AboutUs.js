import React from 'react'
import photo1 from '../../../../assets/img/Фото1.png'
import photo2 from '../../../../assets/img/Фото2.png'
import photo3 from '../../../../assets/img/Фото3.png'
import Flower1 from '../../../../assets/img/Flower1.png'
import Flower2 from '../../../../assets/img/Flower2.png'

function AboutUs() {
  return (
    <section className='xs:pb-[10px]'l>
            <div className="flex relative justify-end pb-[15px] sm:pb-[25px] xs:pb-[25px]">
                <img className='absolute left-[-150px] lg:left-[-80px] bottom-[10px] rotate-[-160deg] sm:hidden xs:hidden' src={Flower1} alt="" />
                <div className='absolute max-w-[586px] md:max-w-[500px] sm:max-w-[250px] xs:max-w-[250px] bg-infoBoxColor px-[50px] md:px-[30px] sm:px-[16px] xs:px-[16px] py-[67px] md:py-[35px] sm:py-[30px] xs:py-[30px] shadow-AboutBoxShadow rounded-l-[20px] rounded-br-[20px] rounded-bl-[20px] top-[50%] sm:top-[55%] xs:top-[60%] translate-y-[-50%] right-[30%]'>
                    <p className='font-lato font-[400] sm:font-[500] xs:font-[500] text-[24px] sm:text-[11px] xs:text-[11px] leading-[28px] sm:leading-[13px] xs:leading-[13px] text-headerText'>Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант.</p>
                </div>
                <img className='sm:w-[50%] sm:h-[215px] xs:h-[215px]' src={photo1} alt="photo1" />
            </div>
            <div className="flex relative justify-start">
                <img className='sm:w-[250px] sm:h-[160px] xs:h-[140px] xs:w-[220px]' src={photo2} alt="photo2" />
                <div className='absolute max-w-[586px] sm:max-w-[250px] xs:max-w-[190px] bg-infoBoxColor px-[35px] sm:px-[10px] xs:px-[10px] py-[66px] sm:py-[30px] xs:py-[30px] shadow-AboutBoxShadow rounded-r-[20px] rounded-br-[20px] rounded-bl-[20px] bottom-[-14%] sm:bottom-[-15%] xs:bottom-[-15%] right-[18%] xs:right-[5%]'>
                    <p className='font-lato font-[400] sm:font-[500] xs:font-[500] text-[24px] sm:text-[11px] xs:text-[11px] leading-[28px] sm:leading-[13px] xs:leading-[13px] text-headerText'>Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант.</p>
                </div>
                <img className='absolute rotate-[-180deg] right-[0] lg:right-[10px] bottom-[105px] sm:hidden xs:hidden' src={Flower1} alt="" />
            </div>
            <div className="flex relative justify-end pt-[65px] sm:pt-[55px] xs:pt-[55px]">
                <div className='absolute max-w-[586px] sm:max-w-[250px] xs:max-w-[190px] bg-infoBoxColor px-[35px] sm:px-[10px] xs:px-[10px] py-[66px] sm:py-[30px] xs:py-[30px] shadow-AboutBoxShadow rounded-l-[20px] rounded-br-[20px] rounded-bl-[20px] bottom-[10%] sm:bottom-[15%] right-[35%] z-10'>
                    <p className='font-lato font-[400] sm:font-[500] text-[24px] sm:text-[11px] xs:text-[11px] leading-[28px] sm:leading-[13px] xs:leading-[13px] text-headerText'>Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант</p>
                </div>
                <img className='sm:w-[200px] sm:h-[250px] xs:h-[220px] xs:w-[220px]' src={photo3} alt="photo3" />
                <img className='absolute rotate-[-180deg] left-[18%] lg:left-[10%] z-1 bottom-[196px] sm:hidden xs:hidden' src={Flower2} alt="" />
            </div>
        </section>
  )
}

export default AboutUs