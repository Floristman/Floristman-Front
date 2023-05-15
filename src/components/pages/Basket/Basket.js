import React, { useContext, useEffect, useState } from 'react'
import Header from '../../Header/Header'
import { icons } from '../../../utilits/icons/icons'
import minus from '../../../assets/svg/icons8-subtract-100 1.svg'
import plus from '../../../assets/svg/icons8-plus-math-100 1.svg'
import Footer from '../../Footer/Footer'
import { useDeleteProductMutation, useProductsQuery, useUpdateProductMutation } from '../../../redux/ProductSlice'
import { Contexts } from '../../../Context/Context'

function Basket() {
  const [updateProduct] = useUpdateProductMutation();
  const { data, isSuccess } = useProductsQuery()
  var res = isSuccess && data.filter(element => element.userId === +localStorage.getItem('userid') && element.isLoading)
  const [price, setPrice] = useState(0)
  useEffect(() => {
    if (res) {
      let price = res.reduce((index, item) => {

        index += (item.priceTwo * item.count)
        return index
      }, 0)
      setPrice(price)
    }
  }, [res])


  const minusCounter = async (e) => {
    console.log(e);
    const minus = isSuccess && res.find(element => element.id === e.id)
    if (minus.count <= 1) {
      const product = {
        textOne: minus.textOne,
        textTwo: minus.textTwo,
        textThree: minus.textThree,
        textFour: minus.textFour,
        img: minus.img,
        productNameOne: minus.productNameOne,
        productNameTwo: minus.productNameTwo,
        priceOne: minus.priceOne,
        priceTwo: minus.priceTwo,
        productId: minus.productId,
        userId: minus.userId,
        isLoading: minus.isLoading,
        id: minus.id,
        count: minus.count
      };
      updateProduct(product);
    } else {
      const product = {
        textOne: minus.textOne,
        textTwo: minus.textTwo,
        textThree: minus.textThree,
        textFour: minus.textFour,
        img: minus.img,
        productNameOne: minus.productNameOne,
        productNameTwo: minus.productNameTwo,
        priceOne: minus.priceOne,
        priceTwo: minus.priceTwo,
        productId: minus.productId,
        userId: minus.userId,
        isLoading: minus.isLoading,
        id: minus.id,
        count: minus.count - 1
      };
      updateProduct(product);
    }

  }
  const plusCounter = async (e) => {
    const plus = isSuccess && res.find(element => element.id === e.id)

    const product = {
      textOne: plus.textOne,
      textTwo: plus.textTwo,
      textThree: plus.textThree,
      textFour: plus.textFour,
      img: plus.img,
      productNameOne: plus.productNameOne,
      productNameTwo: plus.productNameTwo,
      priceOne: plus.priceOne,
      priceTwo: plus.priceTwo,
      productId: plus.productId,
      userId: plus.userId,
      isLoading: plus.isLoading,
      id: plus.id,
      count: plus.count + 1
    };
    updateProduct(product);

  }
  const [deleteProduct] = useDeleteProductMutation();
  const productDelate = (e) => {
    const productDelete = isSuccess && res.find(element => element.id === e.id)
    deleteProduct(productDelete.id);
  }

  const [paymentOne, setPaymentOne] = useState(true)
  const [paymentTwo, setPaymentTwo] = useState(false)
  const [paymentThree, setPaymentThree] = useState(false)

  const handleCheckPayment = (e) => {
    if (e === 'paymentOne') {
      setPaymentTwo(false)
      setPaymentThree(false)
      setPaymentOne(true)
    } else if (e === 'paymentTwo') {
      setPaymentOne(false)
      setPaymentThree(false)
      setPaymentTwo(true)
    } else {
      setPaymentOne(false)
      setPaymentTwo(false)
      setPaymentThree(true)
    }
  }

  const [deliveryOne, setDeliveryOne] = useState(true)
  const [deliveryTwo, setDeliveryTwo] = useState(false)

  const handleCheckDelivery = (e) => {
    console.log(e);
    if (e === 'deliveryOne') {
      setDeliveryOne(true)
      setDeliveryTwo(false)
    } else {
      setDeliveryOne(false)
      setDeliveryTwo(true)
    }
  }
  const {openClose,setOpenClose}=useContext(Contexts)

  const handleMenuBody=()=>{
    setOpenClose('translate-x-[-1000px]')
  }
  return (
    <div onClick={()=>handleMenuBody()} className={`${openClose === 'translate-x-[0px]' ? 'blur' : 'blur-none'} duration-500`}>
      <Header className='text-[20px]' pStart='Корзина' />
      <div className='bg-bodyBackground  mt-[150px] xs:mt-[30px] pt-[35px] pb-[50px] xs:pb-[20px]'>
        <div className="container relative z-[11]">
          {
            isSuccess && res.map((element, value) => {
              return (
                <div key={value} className='grid mb-[32px]' style={{ gridTemplateColumns: '1fr 2fr' }}>
                  <div className='max-w-[330px]'>
                    <img className='w-full max-h-[330px]' src={element.img} alt="" />
                  </div>
                  <div className='flex flex-col justify-between'>
                    <div className='flex items-center justify-between'>
                      <h1 className='text-[36px] leading-[44px] font-[500] text-headerText'>{element.productNameOne}</h1>
                      <div onClick={() => productDelate(element)} className='cursor-pointer '>
                        {icons.personalDelete}
                      </div>
                    </div>
                    <div className='flex justify-between items-center'>
                      <div className=" mt-[28px]">
                        <p className='text-[#8e8d6f] text-[18px] leading-[22px] font-[500] line-through'>{element.priceOne} грн</p>
                        <p className='text-discountColor text-[30px] leading-[36px] font-[500] mt-[15px]'>{element.priceTwo} грн</p>
                      </div>
                      <div className="flex items-center justify-between gap-[20px] bg-[#FFF6F2] rounded-[55px] py-[21px] px-[11px]">
                        <button onClick={(e) => minusCounter(element)}><img src={minus} alt="" /></button>
                        <p className='w-[40px] text-center text-[36px] font-[400] leading-[43px]'>{element.count}</p>
                        <button onClick={() => plusCounter(element)}><img src={plus} alt="" /></button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
          <div>
            <h2 className='text-[48px] xs:text-[13px] font-[600] leading-[59px] xs:leading-[16px] text-[#272626] text-center xs:text-left mb-[36px] xs:mb-[10px] mt-[50px] xs:mt-[20px]'>Сумма заказов</h2>
            <div className="flex justify-between">
              <h2 className='text-[24px] xs:text-[10px] font-[500] leading-[29px] xs:leading-[12px] text-[#272626]'>Общая сумма заказов:</h2>
              <p className='text-[18px] xs:text-[10px] font-[500] leading-[22px] xs:leading-[11px] text-[#272626]'>{price} грн</p>
            </div>
            <div className="flex justify-between mt-[18px] xs:mt-[12px] mb-[64px] xs:mb-[10px]">
              <h2 className='text-[24px] xs:text-[10px] font-[500] leading-[29px] xs:leading-[12px] text-[#272626]'>Способ оплаты:</h2>
              <div>
                <div className="flex justify-end items-center gap-[10px] xs:gap-[5px]">
                  <div onClick={() => handleCheckPayment('paymentOne')} className={`${paymentOne ? 'border-[#FD4F79]' : 'border-[#272626]'}  border-[0.4px] cursor-pointer  rounded-[50%] w-[22px] h-[22px] xs:w-[15px] xs:h-[15px] flex items-center justify-center`}>
                    <span className={`${paymentOne ? 'bg-[#FD4F79]' : 'bg-[#FFF6F2]'} border-[3px] border-[#FFF6F2] rounded-[50%] w-full h-full`}></span>
                  </div>
                  <span className={`${paymentOne ? 'text-[#FD4F79]' : 'text-[#272626]'} text-[18px] xs:text-[10px] font-[500] leading-[22px] xs:leading-[11px]`}>Оплата при доставке</span>
                </div>
                <div className="flex justify-end items-center gap-[10px] xs:gap-[5px] my-[5px] xs:my-[7px]">
                  <div onClick={() => handleCheckPayment('paymentTwo')} className={`${paymentTwo ? 'border-[#FD4F79]' : 'border-[#272626]'}  border-[0.4px] cursor-pointer rounded-[50%] w-[22px] h-[22px] xs:w-[15px] xs:h-[15px] flex items-center justify-center`}>
                    <span className={`${paymentTwo ? 'bg-[#FD4F79]' : 'bg-[#FFF6F2]'} border-[3px] border-[#FFF6F2] rounded-[50%] w-full h-full`}></span>
                  </div>
                  <span className={`${paymentTwo ? 'text-[#FD4F79]' : 'text-[#272626]'} text-[18px] xs:text-[10px] font-[500] leading-[22px] xs:leading-[11px]`}>Оплата картой</span>
                </div>
                <div className="flex justify-end items-center gap-[10px] xs:gap-[5px] ">
                  <div onClick={() => handleCheckPayment('paymentThree')} className={`${paymentThree ? 'border-[#FD4F79]' : 'border-[#272626]'}  border-[0.4px] cursor-pointer  rounded-[50%] w-[22px] h-[22px] xs:w-[15px] xs:h-[15px] flex items-center justify-center`}>
                    <span className={`${paymentThree ? 'bg-[#FD4F79]' : 'bg-[#FFF6F2]'} border-[3px] border-[#FFF6F2] rounded-[50%] w-full h-full`}></span>
                  </div>
                  <span className={`${paymentThree ? 'text-[#FD4F79]' : 'text-[#272626]'} text-[18px] xs:text-[10px] font-[500] leading-[22px] xs:leading-[11px]`}>Оплата на карту ПриватБанк</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="grid grid-cols-[repeat(2,max-content)]">
                <h2 className='text-[24px] xs:text-[10px] font-[500] leading-[29px] xs:leading-[12px] text-[#272626] mr-[18px] xs:mr-[4px]'>Доставка:</h2>
                <h2 className='text-[24px] xs:text-[10px] font-[500] leading-[29px] xs:leading-[12px] text-[#272626] '>Самовызов:</h2>
                <h2 className='col-[2/2] text-[24px] xs:text-[10px] font-[500] leading-[29px] xs:leading-[12px] text-[#272626] '>Курьером:</h2>
              </div>
              <div className='grid'>
                <div className="flex justify-end items-center gap-[10px] xs:gap-[5px]">
                  <div onClick={() => handleCheckDelivery('deliveryOne')} className={`${deliveryOne ? 'border-[#FD4F79]' : 'border-[#272626]'}  border-[0.4px]  rounded-[50%] w-[22px] h-[22px] xs:w-[15px] xs:h-[15px] flex items-center justify-center`}>
                    <span className={`${deliveryOne ? 'bg-[#FD4F79]' : 'bg-[#FFF6F2]'} border-[3px] border-[#FFF6F2] cursor-pointer rounded-[50%] w-full h-full`}></span>
                  </div>
                  <span className={`${deliveryOne ? 'text-[#FD4F79]' : 'text-[#272626]'} text-[18px] xs:text-[10px] xs:leading-[11px] font-[500] leading-[22px]`}>Бесплатно</span>
                </div>
                <div className="flex justify-end items-center gap-[10px] xs:gap-[5px]">
                  <div onClick={() => handleCheckDelivery('deliveryTwo')} className={`${deliveryTwo ? 'border-[#FD4F79]' : 'border-[#272626]'}  border-[0.4px] cursor-pointer rounded-[50%] w-[22px] h-[22px] xs:w-[15px] xs:h-[15px] flex items-center justify-center`}>
                    <span className={`${deliveryTwo ? 'bg-[#FD4F79]' : 'bg-[#FFF6F2]'} border-[3px] border-[#FFF6F2] rounded-[50%] w-full h-full`}></span>
                  </div>
                  <span className={`${deliveryTwo ? 'text-[#FD4F79]' : 'text-[#272626]'} text-[18px] xs:text-[10px] xs:leading-[11px]  font-[500] leading-[22px]`}>000 грн</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between my-[18px] xs:my-[10px]">
              <h2 className='text-[24px] font-[500] leading-[29px] text-[#272626] mr-[18px] xs:text-[10px] xs:leading-[12px]'>Скидка:</h2>
              <p className='text-[18px] font-[500] leading-[22px] text-[#272626] xs:text-[10px] xs:leading-[12px]'>-10%</p>
            </div>
            <div className="flex justify-between">
              <h2 className='text-[24px] font-[500] leading-[29px] text-[#272626] mr-[18px]  xs:text-[10px] xs:leading-[12px]'>Итого к оплате:</h2>
              <p className='text-[24px] font-[700] leading-[29px] text-[#7EA048] xs:text-[10px] xs:leading-[12px]'>{price} грн</p>
            </div>
          </div>
          <div>
            <h2 className='text-[48px] font-[600] leading-[59px] text-[#272626] text-center mb-[36px] mt-[80px] xs:text-[16px] xs:leading-[20px] xs:mt-[20px]'>Оформление заказа</h2>
            <div className="flex flex-col max-w-[770px] xs:max-w-[320px] mx-auto justify-center gap-[20px] xs:gap-[5px]">
              <input className='py-[24px] px-[45px] xs:py-[10px] xs:px-[20px] outline-none text-[36px] xs:text-[10px] rounded-[45px] xs:leading-[12px]' type="text" placeholder='Имя' />
              <input className='py-[24px] px-[45px] xs:py-[10px] xs:px-[20px] outline-none text-[36px] xs:text-[10px] rounded-[45px] xs:leading-[12px]' type="number" placeholder='Телефон' />
              <input className='py-[24px] px-[45px] xs:py-[10px] xs:px-[20px] outline-none text-[36px] xs:text-[10px] rounded-[45px] xs:leading-[12px]' type="text" placeholder='Адрес доставки' />
            </div>
            <div className='flex justify-center mt-[50px] xs:mt-[14px]'>
              <button className='py-[23px] px-[45px] xs:py-[10px] xs:px-[22px] bg-buttonBackground hover:bg-buttonBackgroundHover text-[24px] xs:text-[14px] text-white font-[600] leading-[29px] xs:leading-[16px] rounded-[37px] xs:rounded-[21px]'>Подтверждение заказа</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Basket