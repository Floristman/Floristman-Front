import React, { useContext } from 'react'
import Header from '../../Header/Header'
import Discount from './Discount'
import Footer from '../../Footer/Footer'
import Main from './Main/Main'
import ForWhom from './ForWhom'
import Delivery from './Delivery'
import Offers from './Offers'
import { Contexts } from '../../../Context/Context'

function Home(props) {
  const {openClose,setOpenClose}=useContext(Contexts)
  const handleMenuBody=()=>{
    setOpenClose('translate-x-[-1000px]')
  }
  return (
    <div onClick={()=>handleMenuBody()} className={`${openClose === 'translate-x-[0px]' ? 'blur' : 'blur-none'} duration-500`}>
      <Header h1='Подарите ощущение праздника' pStart='Собираем букеты,' pEnd='созданные для Вас' btn='Выбрать букет' />
      <Discount />
      <Main />
      <div className="block sm:hidden xs:hidden">
        <ForWhom />
      </div>
      <Delivery />
      <Offers />
      <Footer />
    </div>
  )
}

export default Home