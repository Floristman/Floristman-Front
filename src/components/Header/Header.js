import React from 'react'
import headerBg from '../../assets/img/image (3).png'
import { style } from '../../utilits/styleTailwind/style'
import { useNavigate } from 'react-router-dom'

function Header(props) {
    const navigate = useNavigate()
    return (
        <header className={style.header}>
            <div className="container">
                <div className="absolute z-[11] top-[8px] lg:top-[-40px] md:top-[15px] sm:top-[3px] right-0 w-[100%] xs:top-[38px] ">
                    <img className='w-[100%]' src={headerBg} alt="" />
                </div>
                {/* <div className="absolute z-[11] top-[-50px] right-0 w-[100%] hidden xs:block">
                    <img className='w-[100%]' src={headerBgXs} alt="" />
                </div> */}
                <div className=" relative z-[12]  ">
                    <h1 className={props.btn && style.headerH1}>{props.h1}</h1>
                    <p className={style.headerP} >{props.pStart} <br />{props.pEnd}</p>
                    <button onClick={() => navigate('/catalog')} className={props.btn && style.headerBtn}>{props.btn}</button>

                    <p className='text-headerText text-[18px] font-[700] leading-[20px] mb-[25px] tracking-[0.02em] hidden xs:block' >{props.pStart} <br />{props.pEnd}</p>
                    <h1 className='text-headerText font-[400] text-[12px] leading-[14px] hidden xs:block'>{props.h1}</h1>
                </div>
            </div>
            <h1>{props.name}</h1>
        </header>
    )
}

export default Header