import React from 'react'
import PersonalAreaMenu from './PersonalAreaMenu'
import iconFixOne from '../../../../assets/img/imgonline-com-ua-HueSatLum-22AfGeH0Ba 1.png'
import iconFixTwo from '../../../../assets/img/imgonline-com-ua-HueSatLum-AjF7sCF4zQoHZf 1.png'

function AddressBook() {
  return (
    <section className='bg-bodyBackground relative pt-[88px] pb-[80px]'>
      <div>
        <div className='absolute top-[35px]'>
          <img src={iconFixOne} alt="" />
        </div>
        <div className='absolute top-[387px] right-0'>
          <img src={iconFixTwo} alt="" />
        </div>
      </div>
      <div className="container flex">
        <PersonalAreaMenu/><div className="h1">qale</div>

      </div>
    </section>
  )
}

export default AddressBook