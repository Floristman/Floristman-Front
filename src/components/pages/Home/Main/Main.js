import React from 'react'
import Flower2 from '../../../../assets/img/Flower2.png'
import HomeCatalog from './HomeCatalog'
import AboutUs from './AboutUs'
import HomeCatalogSM from './HomeCatalogSM'


function Main() {
  return (
    <section className='bg-bodyBackground pt-[80px] md:pt-[40px] sm:pt-[30px] xs:pt-[20px] relative'>
      <div className="container relative bg-mobileAboutUsBG">
        <img className='absolute left-[460px] lg:left-[230px] md:left-[50px] top-[150px] sm:hidden xs:hidden' src={Flower2} alt="" />
        <h1 className='pb-[40px] xs:pb-[10px] text-headerText font-[700] xs:[600] text-[48px] sm:text-[40px] xs:text-[18px] leading-[58px] xs:leading-[22px]'>Почему именно мы?</h1>
        <AboutUs />
      </div>
      <div className="container relative bg-bodyBackground">
        <h1 className='pt-[80px] md:pt-[50px] sm:pt-[30px] xs:pt-[30px] pb-[40px] sm:pb-[20px] md:pb-[30px] text-headerText font-[700] sm:font-[600] xs:font-[600] text-[48px] sm:text-[30px] xs:text-[30px] leading-[58px] sm:leading-[22px] xs:leading-[20px] sm:text-center xs:text-center'>Каталог</h1>
        <div className="block sm:hidden xs:hidden">
          <HomeCatalog />
        </div>
        <div className="hidden sm:block xs:block  ">
          <HomeCatalogSM />
        </div>
      </div>
    </section>
  )
}

export default Main