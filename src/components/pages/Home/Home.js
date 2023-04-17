import React from 'react'
import Header from '../Header'
import Discount from '../Discount'
import Flowers from '../Flowers/Flowers'
import MainPage from '../MainPage'

function Home(props) {
  return (
    <div>
        <Header h1='Подарите ощущение праздника' pStart='Собираем букеты,' pEnd='созданные для Вас' btn='Выбрать букет' />
        <Discount/>
        <MainPage/>
    </div>
  )
}

export default Home