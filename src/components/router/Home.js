import React from 'react'
import Header from '../pages/Header'
import Discount from '../pages/Discount'

function Home(props) {
  return (
    <div>
        <Header h1='Подарите ощущение праздника' p='Собираем букеты, созданные для Вас' btn='Выбрать букет' />
        <Discount/>
    </div>
  )
}

export default Home