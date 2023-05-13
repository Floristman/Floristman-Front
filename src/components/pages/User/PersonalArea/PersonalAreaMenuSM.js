import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function PersonalAreaMenuSM() {
  const local = useLocation()

  return (
    <div className='grid gap-[30px] xs:gap-[10px] grid-cols-[repeat(4,max-content)] mb-[20px]'>
      <Link to='/personalarea' className={`${local.pathname === '/personalarea' ? 'text-headerText border-b border-headerText' : 'text-[#8e8d6f]'} text-[10px] leading-[11px] font-[400] h-[15px]`}>
        Личные данные
      </Link>
      <Link to='/addresbook' className={`${local.pathname === '/addresbook' ? 'text-headerText border-b border-headerText' : 'text-[#8e8d6f]'} text-[10px] leading-[11px] font-[400] h-[15px]`}>
        Адресная книга
      </Link>
      <Link to='/reviews' className={`${local.pathname === '/reviews' ? 'text-headerText border-b border-headerText' : 'text-[#8e8d6f]'} text-[10px] leading-[11px] font-[400] h-[15px] w-max`}>
        Отзывы
      </Link>
      <Link to='/viewed' className={`${local.pathname === '/viewed' ? 'text-headerText border-b border-headerText' : 'text-[#8e8d6f]'} text-[10px] leading-[11px] font-[400] h-[15px]`}>
        Просмотренные
      </Link>
    </div>
  )
}

export default PersonalAreaMenuSM