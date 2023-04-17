import React from 'react'
import { Link } from 'react-router-dom'

function PersonalAreaMenu() {
  return (
    <div className='bg-white p-[27px] rounded-[20px] grid gap-[22px]'>
          <Link to='/personalarea'>
            <h1>Личные данные</h1>
          </Link>
          <Link to='/addresbook'>
            <h1>Адресная книга</h1>
          </Link>
          <Link to='/reviews'>
            <h1>Отзывы</h1>
          </Link>
          <Link to='/viewed'>
            <h1>Просмотренные</h1>
          </Link>
          
        </div>
  )
}

export default PersonalAreaMenu