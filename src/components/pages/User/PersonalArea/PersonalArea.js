import React, { useEffect, useState } from 'react'
import iconFixOne from '../../../../assets/img/imgonline-com-ua-HueSatLum-22AfGeH0Ba 1.png'
import iconFixTwo from '../../../../assets/img/imgonline-com-ua-HueSatLum-AjF7sCF4zQoHZf 1.png'
import PersonalAreaMenu from './PersonalAreaMenu'
import { Link } from 'react-router-dom'
import { style } from '../../../../utilits/styleTailwind/style'
import Footer from '../../../Footer/Footer'
import { useUpdateUserMutation, useUsersQuery } from '../../../../redux/UserSlice'

function PersonalArea() {
  const { data, isSuccess } = useUsersQuery()
  const res = isSuccess && data.find(element => element.id === +localStorage.getItem('userid'))
  const [name, setName] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  useEffect(() => {
    if (res) {
      setName(res.name)
      setPhoneNumber(res.phoneNumber)
      setEmail(res.email)
      setPassword(res.password)
    }
  }, [res])

  const [updateUser] = useUpdateUserMutation()

  const handleSave = (e) => {
    e.preventDefault()
    const task = {
      name,
      phoneNumber,
      email,
      password,
      id: res.id,
      isLoading: true
    }
    updateUser(task)
  }

  return (
    <section>
      <div className='bg-bodyBackground relative pt-[88px] pb-[80px]'>
        <div>
          <div className='absolute top-[35px]'>
            <img src={iconFixOne} alt="" />
          </div>
          <div className='absolute top-[387px] right-0'>
            <img src={iconFixTwo} alt="" />
          </div>
        </div>
        <div className="container flex">
          <div >
            <PersonalAreaMenu />
          </div>
          <div className='ml-[50px] w-[100%]'>
            <div className={style.LinksCss}>
              <Link to='/'>Главная</Link> / <Link to='/personalarea'>Личный кабинет</Link>
            </div>
            <h1 className='mt-[16px] mb-[32px] text-headerText text-[36px] font-[600] leading-[44px]'>Личные данные</h1>
            <div className='flex gap-[22px]'>
              <div className='grid gap-[14px] text-[24px] font-[500] leading-[28px]'>
                <h2>ФИО</h2>
                <h2>Телефон</h2>
                <h2>E-mail</h2>
                <h2>Пароль</h2>
              </div>
              <form className='w-[100%] grid gap-[12px]  '>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} className={style.personalInpCss} />
                <input type='text' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className={style.personalInpCss} />
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} className={style.personalInpCss} />
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className={style.personalInpCss} />
              </form>

            </div>
            <div>
              <button onClick={(e) => handleSave(e)} className='py-[22px] px-[78px] bg-buttonBackground hover:bg-buttonBackgroundHover text-[24px] leading-[30px] font-[600] text-white rounded-[37px] mt-[40px]'>Сохранить</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default PersonalArea