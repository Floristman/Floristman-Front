import React from 'react'
import img from '../../../assets/img/Rectangle 202.png'

function Offers() {
    return (
        <section className='bg-bodyBackground py-[80px]'>
            <div className="container">
                <div className="grid" style={{ gridTemplateColumns: '2fr 1fr' }}>
                    <div>
                        <form action="" className='flex flex-col gap-[20px] h-[100%]'>
                            <input className='py-[24px] px-[45px] rounded-[45px] text-[36px] font-[400] leading-[43px] text-headerText outline-none' type="text" placeholder='Имя' />
                            <input className='py-[24px] px-[45px] rounded-[45px] text-[36px] font-[400] leading-[43px] text-headerText outline-none' type="number" placeholder='Телефон' />
                            <textarea placeholder='Ваша идея' maxLength={500} className='resize-none h-[100%] py-[24px] px-[45px] rounded-[45px] text-[36px] font-[400] leading-[43px] text-headerText outline-none' ></textarea>
                        </form>
                    </div>
                    <div className='ml-[32px]'>
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="flex justify-center mt-[50px]">
                    <button className='py-[23px] px-[67px] bg-buttonBackground hover:bg-buttonBackgroundHover text-[24px] text-white font-[700] leading-[30px] rounded-[37px]'>Отправить</button>
                </div>
            </div>
        </section>
    )
}

export default Offers