import React, { useContext } from 'react'
import PersonalAreaMenu from './PersonalAreaMenu'
import iconFixOne from '../../../../assets/img/imgonline-com-ua-HueSatLum-22AfGeH0Ba 1.png'
import iconFixTwo from '../../../../assets/img/imgonline-com-ua-HueSatLum-AjF7sCF4zQoHZf 1.png'
import { Link } from 'react-router-dom'
import { style } from '../../../../utilits/styleTailwind/style'
import { icons } from '../../../../utilits/icons/icons'
import Footer from '../../../Footer/Footer'
import { useProductsQuery } from '../../../../redux/ProductSlice'
import { useDeleteProductMutation } from '../../../../redux/ProductSlice'
import PersonalAreaMenuSM from './PersonalAreaMenuSM'
import { Contexts } from '../../../../Context/Context'

function Viewed() {
  const { data, isSuccess } = useProductsQuery()
  const res = isSuccess && data.filter(element => element.userId === +localStorage.getItem('userid') && !element.isLoading)

  const [deleteProduct] = useDeleteProductMutation()
  const handleDelete = (e) => {
    console.log(e);
    deleteProduct(e.id)
  }
  const {openClose,setOpenClose}=useContext(Contexts)
  const handleMenuBody=()=>{
    setOpenClose('translate-x-[-1000px]')
  }
  return (
    <section onClick={()=>handleMenuBody()} className={`${openClose === 'translate-x-[0px]' ? 'blur' : 'blur-none'} duration-500`}>
      <div className='bg-bodyBackground relative pt-[88px] pb-[50px] xs:pb-[20px]'>
        <div className='xs:hidden'>
          <div className='absolute top-[35px]'>
            <img src={iconFixOne} alt="" />
          </div>
          <div className='absolute top-[387px] right-0'>
            <img src={iconFixTwo} alt="" />
          </div>
        </div>
        <h1 className='hidden text-center mb-[14px] text-[18px] font-[700] leading-[22px] xs:block'>Личный кабинет</h1>
        <div className="hidden justify-center xs:flex ">
          <PersonalAreaMenuSM />
        </div>
        <div className="container flex">
          <div className='xs:hidden'>
            <PersonalAreaMenu />
          </div>
          <div className='ml-[50px] xs:ml-[0px]'>
            <div className="xs:hidden">
              <div className={style.LinksCss}>
                <Link to='/'>Главная</Link> / <Link to='/viewed'>Просмотренные</Link>
              </div>
            </div>
            <h1 className='mt-[16px] xs:mt-[0px] mb-[20px] xs:mb-[10px] text-[24px] leading-[30px] xs:text-[16px] xs:leading-[20px] font-[600] text-headerText'>Просмотренные</h1>
            {
              res && res.map((element, value) => {
                return (
                  <div key={value} className='flex mb-[30px]'>
                    <div>
                      <img src={element.img} alt="" />
                    </div>
                    <div className='ml-[10px] flex flex-col justify-between'>
                      <div className='flex items-center justify-between'>
                        <h1 className='text-[24px] leading-[30px] font-[500] text-headerText'>{element.productNameOne}</h1>
                        <div onClick={() => handleDelete(element)}>
                          {icons.personalDelete}
                        </div>
                      </div>
                      <div>
                        <h2 className='text-[20px] leading-[25px] font-[600] text-headerText mb-[5px]'>Повод: <span className='text-[18px] leading-[22px] font-[400] text-headerText'>8 марта. 9 мая. Любовь</span></h2>
                        <h2 className='text-[20px] leading-[25px] font-[600] text-headerText'>Кому:: <span className='text-[18px] leading-[22px] font-[400] text-headerText'>Маме. Девушке. Женщине. Учителю. Теще. Друзьям</span></h2>
                        <div className="grid grid-cols-[repeat(2,auto)] mt-[28px]">
                          <p className='text-[#8e8d6f] text-[18px] leading-[22px] font-[500] line-through'>{element.priceOne} грн</p>
                          <p className='text-discountColor text-[24px] leading-[29px] font-[500]'>{element.priceTwo} грн</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Viewed