import React from 'react'
import img from '../../../assets/img/Rectangle 202.png'

function Offers() {
    return (
        <section className='bg-bodyBackground py-[80px] lg:py-[20px] md:py-[20px] sm:py-[20px] xs:py-[20px]'>
            <div className="container">
                <h1 className='text-center font-[600] text-[48px] md:text-[40px] sm:text-[25px] xs:text-[23px] leading-[58px] md:leading-[30px] sm:leading-[22px] xs:leading-[22px] mb-[60px] md:mb-[30px] sm:mb-[15px] xs:mb-[15px]'>Предложи свой букет</h1>
                <div className="grid grid-cols-[2fr,1fr] md:grid-cols-[1fr,0fr] sm:grid-cols-[1fr,0fr] xs:grid-cols-[1fr,0fr]">
                    <div>
                        <form action="" className='flex flex-col gap-[20px] xs:gap-[5px] h-[100%] w-[100%]'>
                            <input className='py-[24px] sm:py-[10px] xs:py-[10px] px-[45px] sm:px-[20px] xs:px-[20px] rounded-[45px] xs:rounded-[18px] text-[36px] sm:text-[18px] xs:text-[15px] font-[400] leading-[43px] xs:leading-[12px] text-headerText outline-none' type="text" placeholder='Имя' />
                            <input className='py-[24px] sm:py-[10px] xs:py-[10px] px-[45px] sm:px-[20px] xs:px-[20px] rounded-[45px] xs:rounded-[18px] text-[36px] sm:text-[18px] xs:text-[15px] font-[400] leading-[43px] xs:leading-[12px] text-headerText outline-none' type="number" placeholder='Телефон' />
                            <textarea placeholder='Ваша идея' maxLength={500} className='resize-none h-[100%] sm:h-[170px] xs:h-[100px] py-[24px] sm:py-[10px] xs:py-[10px] px-[45px] sm:px-[20px] xs:px-[20px] rounded-[45px] xs:rounded-[18px] text-[36px] sm:text-[20px] xs:text-[15px] font-[400] leading-[43px] xs:leading-[12px] text-headerText outline-none' ></textarea>
                        </form>
                    </div>
                    <div className='ml-[32px] md:hidden sm:hidden xs:hidden'>
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="flex justify-center mt-[50px] lg:mt-[20px] md:mt-[20px] sm:mt-[15px] xs:mt-[15px] ">
                    <button className='py-[23px] xs:py-[10px] px-[67px] xs:px-[35px] bg-buttonBackground hover:bg-buttonBackgroundHover text-[24px] xs:text-[16px] text-white font-[700] xs:font-[600] leading-[30px] xs:leading-[20px] rounded-[37px] xs:rounded-[22px]'>Отправить</button>
                </div>
            </div>
        </section>
    )
}

export default Offers