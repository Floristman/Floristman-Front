import React from 'react'
import Header from '../../Header/Header'
import Discount from './Discount'
import Footer from '../../Footer/Footer'
import Main from './Main/Main'
import ForWhom from './ForWhom'
import Delivery from './Delivery'
import Offers from './Offers'

function Home(props) {
  return (
    <div>
        <Header h1='Подарите ощущение праздника' pStart='Собираем букеты,' pEnd='созданные для Вас' btn='Выбрать букет' />
        <Discount/>
        <Main/>
        <ForWhom/>
        <Delivery/>
        <Offers/>
        <Footer/>
    </div>
  )
}

export default Home