import React from 'react'
import frame from '../../../assets/svg/Рамка (1).svg'
import icon1 from '../../../assets/img/imgonline-com-ua-HueSatLum-22AfGeH0Ba 3.png'
import icon2 from '../../../assets/img/imgonline-com-ua-HueSatLum-22AfGeH0Ba 4.png'
import { Link, useNavigate } from 'react-router-dom'
import { forWhom } from '../../../utilits/link/forWhom'
import { style } from '../../../utilits/styleTailwind/style'
import caruselImg from '../../../assets/img/Ромашки для наташки.png'


function ForWhom() {
    const navigate =useNavigate()
    return (
        <section className='bg-bodyBackground pt-[50px] pb-[80px] relative'>
            <div className="absolute right-0 top-[-10px]">
                <img src={icon1} alt="" />
            </div>
            <div className="container">
                <div className="flex items-center gap-[6px] mb-[20px]">
                    <img src={frame} alt="" />
                    <h2 className='text-[36px] text-headerText font-[700] leading-[44px]'>Для кого</h2>
                </div>
                <div className="grid grid-cols-[repeat(4,auto)]">
                    {
                        forWhom && forWhom.map((element, value) => {
                            return (
                                <div key={value} className="max-w-[284px] rounded-r-[20px] rounded-br-[20px] rounded-bl-[20px] card px-[10px] pt-[10px] pb-[35px] mb-[40px] bg-white">
                                    <div className="relative">
                                        <div className="absolute top-[5px] left-[-5px] text-center">
                                            <p className={`bg-element1BG ${style.elementText}`} >{element.textOne}</p>
                                            <p className={`bg-element2BG ${style.elementText}`}>{element.textTwo}</p>
                                            <p className={`bg-element3BG ${style.elementText}`}>{element.textThree}</p>
                                        </div>
                                        <div className="absolute bottom-[5px] right-[-5px] text-center">
                                            <p className='py-[5px] px-[7px] bg-element4BG rounded-l-[6px] rounded-bl-[6px] text-discountColor' >Скидка 50%</p>
                                        </div>
                                        <img src={caruselImg} alt="flower" />
                                    </div>
                                    <div className="desc">
                                        <p className={`mt-[10px] ${style.cardDesc}`} >{element.productNameOne}</p>
                                        <p className={`mt-[5px] ${style.cardDesc}`}>{element.productNameTwo}</p>
                                    </div>
                                    <div className="elemet mt-[50px] flex items-center justify-between">
                                        <div className="text-center">
                                            <p className={`text-[#8E8D6F] ${style.priceText1}`}>{element.priceOne}</p>
                                            <p className={`text-[#7EA048] ${style.priceText2}`}>{element.priceTwo}</p>
                                        </div>
                                        <div className="orderBtn">
                                            <button onClick={() => navigate(`/flowers/${element.id}`)} className={style.orderButton}>Заказать</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="relative text-center">
                    <Link to='/catalog' className='text-[18px] font-[500] leading-[22px] text-[#8E8D6F]'>Перейти к каталогу</Link>
                    <div className="absolute left-[26%] top-[-10px]">
                        <img src={icon2} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ForWhom