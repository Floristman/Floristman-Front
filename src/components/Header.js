import React from 'react'
import headerBg from '../assets/img/image (3).png'
import { style } from '../utilits/styleTailwind/style'

function Header(props) {
    return (
        <header className={style.header}>
            <div className="container">

                <div className="absolute z-[11] top-[8px] right-0 w-[100%] xs:top-[-20px] ">
                    <img className='w-[100%]' src={headerBg} alt="" />
                </div>
                {/* <div className="absolute z-[11] top-[-50px] right-0 w-[100%] hidden xs:block">
                    <img className='w-[100%]' src={headerBgXs} alt="" />
                </div> */}
                <div className=" relative z-[12] xs:max-w-[320px] max-w-[800px] sm:max-w-[400px]">

                    <h1 className={style.headerH1}>{props.h1}</h1>
                    <p className={style.headerP} >{props.p}</p>
                    <button className={props.btn && style.headerBtn}>{props.btn}</button>

                    <p className='text-headerText  text-[24px] font-[700] leading-[29px] mb-[25px] tracking-[0.02em] hidden  xs:block' >{props.p}</p>
                    <h1 className='text-headerText font-[400] text-[12px] leading-[14px] hidden xs:block'>{props.h1}</h1>

                </div>
            </div>
            <h1>{props.name}</h1>
        </header>
    )
}

export default Header