import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useAddUserMutation } from '../../../../redux/UserSlice';

function Register() {
  const [phoneNumber, setPhoneNumber] = useState(false)
  const [name, setName] = useState(false)
  const [email, setEmail] = useState(false)
  // 
  const [phoneNumberError, setPhoneNumberError] = useState('укажите номер телефона')
  const [nameError, setNameError] = useState('Укажите имя')
  const [emailError, setEmailError] = useState('Email не может быть пустым')
  // 
  const [phoneNumberDirty, setPhoneNumberDirty] = useState(false)
  const [nameDirty, setNameDirty] = useState(false)
  const [emailDirty, setEmailDirty] = useState(false)


  // onBlur
  const blurHandle = (e) => {
    // console.log(e.target.name);
    switch (e.target.name) {
      case '':
        setPhoneNumberDirty(true)
        break
      case 'name':
        setNameDirty(true)
        break
      case 'email':
        setEmailDirty(true)
        break
      // case 'password':
      //   setPasswordDirty(true)
      //   break
      default:
        break
    }

  }
  // onChange
  const phoneHandle = (e) => {
    setPhoneNumber(e)
    console.log(e);
    if (e.length < 4) {
      setPhoneNumberError('укажите номер телефона')
    } else {
      setPhoneNumberError(true)

    }
  }
  const nameHandle = (e) => {
    setName(e.target.value)
    if (e.target.value.length > 1) {
      setNameError(true)
    } else if (e.target.value == '') {
      setNameError('Укажите имя')
    } else {
      setNameError('Имя не может содержать одну букву')
    }
  }
  const emailHandle = (e) => {
    setEmail(e.target.value)
    console.log(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (e.target.value == '') {
      setEmailError('Email не может быть пустым')
    } else if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError('Некорректный email')
    } else {
      setEmailError(true)
    }
  }

  // onClickButton

  const [addTask, result] = useAddUserMutation()
  const navigate =useNavigate()

  const register = async (e) => {
    e.preventDefault()
    if (phoneNumber && name && email) {

      const user = {
        phoneNumber,
        name,
        email,
        isLoading: false,
      };
      await addTask(user);
      localStorage.setItem('email',email)
      navigate('/checkingemail')
    } else {
      alert()
    }
  }



  return (
    <section className='bg-headerBg bg-cover bg-no-repeat bg-center h-screen w-[100%]'>
      <div className="container h-screen flex justify-center items-center">
        <div className="register text-center py-[34px] px-[10px] bg-registerBackground rounded-[10px]">
          <h1 className='text-[18px] font-[700] leading-[22px] text-headerText'>Регистрация</h1>
          <h2 className='text-black text-[12px] font-[400] leading-[14px] mt-[24px] mb-[8px]'>Есть аккаунт? <Link to='/login' className='text-registerColor underline'> Войдите</Link></h2>
          <form action="" onSubmit={(e) => register(e)} >
            <div className="grid grid-cols-[repeat(1,305px)] gap-[5px]">
              <div className='text-[15px] leading-[18px] h-[18px]  font-[400] text-red'>{phoneNumberDirty && phoneNumberError}</div>
              <PhoneInput
                country={'uz'}
                onChange={(e) => phoneHandle(e)}
                inputClass="bg-black text-[24px]"
                name='phone'
                onBlur={(e) => blurHandle(e)}
              />
              <div className='text-[15px] leading-[18px]  font-[400] text-red h-[18px]'>{nameDirty && nameError}</div>
              <input onBlur={(e) => blurHandle(e)} name='name' type="text" onChange={(e) => nameHandle(e)} placeholder='Имя' className='py-[14px] pl-[20px] rounded-[17px] outline-none text-[15px] leading-[18px] font-[400] ' />
              <div className='text-[15px] leading-[18px]  font-[400] text-red h-[18px]'>{emailDirty && emailError}</div>
              <input name='email' onBlur={(e) => blurHandle(e)} onChange={(e) => emailHandle(e)} type="email" placeholder='E-mail' className='py-[14px] pl-[20px] rounded-[17px] outline-none text-[15px] leading-[18px]  font-[400]' />
              {/* <div className='text-[15px] leading-[18px]  font-[400] text-red h-[18px]'>{passwordDirty &&passwordError}</div> */}
              {/* <input onBlur={(e) => blurHandle(e)} name='password' onChange={(e) => passwordHandle(e)} type="password" placeholder='Пароль' className='py-[14px] pl-[20px] rounded-[17px] outline-none text-[15px] leading-[18px] font-[400]  w-[100%]'  /> */}
            </div>
            <button className='mt-[20px] px-[25px] py-[10px] bg-buttonBackground rounded-[22px] outline-none text-[16px] font-[600] leading-[20px] text-white'>Отправить пароль на почту</button>
          </form>
        </div>
        
      </div>
    </section>
  )
}

export default Register