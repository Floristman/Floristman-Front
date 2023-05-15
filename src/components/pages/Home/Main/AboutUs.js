import React from 'react'
import photo1 from '../../../../assets/img/Фото1.png'
import photo2 from '../../../../assets/img/Фото2.png'
import photo3 from '../../../../assets/img/Фото3.png'
import Flower1 from '../../../../assets/img/Flower1.png'
import Flower2 from '../../../../assets/img/Flower2.png'

function AboutUs() {
  return (
    <section>
            <div className="flex relative justify-end pb-[15px]">
                <img className='absolute left-[-150px] bottom-[10px] rotate-[-160deg]' src={Flower1} alt="" />
                <div className='absolute max-w-[586px] bg-infoBoxColor px-[50px] py-[67px] shadow-AboutBoxShadow rounded-l-[20px] rounded-br-[20px] rounded-bl-[20px] top-[50%] translate-y-[-50%] right-[30%]'>
                    <p className='font-lato font-[400] text-[24px] leading-[28px] text-headerText'>Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант. Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант</p>
                </div>
                <img src={photo1} alt="photo1" />
            </div>
            <div className="flex relative justify-start">
                <img src={photo2} alt="photo2" />
                <div className='absolute max-w-[586px] bg-infoBoxColor px-[35px] py-[66px] shadow-AboutBoxShadow rounded-r-[20px] rounded-br-[20px] rounded-bl-[20px] bottom-[-14%] right-[18%]'>
                    <p className='font-lato font-[400] text-[24px] leading-[28px] text-headerText'>Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант</p>
                </div>
                <img className='absolute rotate-[-180deg] right-[0] bottom-[105px]' src={Flower1} alt="" />
            </div>
            <div className="flex relative justify-end pt-[65px]">
                <div className='absolute max-w-[586px] bg-infoBoxColor px-[35px] py-[66px] shadow-AboutBoxShadow rounded-l-[20px] rounded-br-[20px] rounded-bl-[20px] bottom-[10%] right-[35%] z-10'>
                    <p className='font-lato font-[400] text-[24px] leading-[28px] text-headerText'>Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант</p>
                </div>
                <img src={photo3} alt="photo3" />
                <img className='absolute rotate-[-180deg] left-[18%] z-1 bottom-[196px]' src={Flower2} alt="" />
            </div>
        </section>
  )
}

export default AboutUs