import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CheckingEmail() {
  const [password, setPassword] = useState('')
  console.log(password);
  // 
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
  // 
  const [passwordDirty, setPasswordDirty] = useState(false)

  // onClickButton
  const navigate =useNavigate()
  const register = (e) => {
    e.preventDefault()
    navigate('/passwordsetting')
  }

// onBlur
  const blurHandle = (e) => {
    switch (e.target.name) {
        case 'password':
          setPasswordDirty(true)
          break
      default:
        break
    }

  }
  // onChange
  
  const passwordHandle = (e) => {
    setPasswordDirty(true)
    setPassword(e.target.value)
    if(e.target.value.length === 0) {
      setPasswordError('пароль не может быть пустым')
    }else if (e.target.value.length > 0 && e.target.value.length <=3 ) {
      setPasswordError('Пароль должен быть минимум 3 цифр')
    } else if (!isNaN(e.target.value)) {
      setPasswordError('пароль должен содержать прописную букву')
    } else {
      // setPasswordError('')
      setPasswordDirty(false)
      // setPasswordCheckDirty(false)
    }
  }
  return (
    <section className='bg-headerBg bg-cover bg-no-repeat bg-center h-screen w-[100%]'>
    <div className="container h-screen flex justify-center items-center">
      <div className="register text-center py-[34px] px-[10px] bg-registerBackground rounded-[10px]">
        <h1 className='text-[18px] font-[700] leading-[22px] text-headerText'>Введите пароль из почты</h1>
        <form action="" onSubmit={(e) => register(e)} >
          <div className="grid grid-cols-[repeat(1,305px)] gap-[5px]">
             <div className='text-[15px] leading-[18px]  font-[400] text-red h-[18px]'>{passwordDirty &&passwordError}</div>
            <input onBlur={(e) => blurHandle(e)} name='password' onChange={(e) => passwordHandle(e)} type="password" placeholder='Пароль' className='py-[14px] pl-[20px] rounded-[17px] outline-none text-[15px] leading-[18px] font-[400]  w-[100%]'  />
          </div>
          <button className='mt-[20px] px-[25px] py-[10px] bg-buttonBackground rounded-[22px] outline-none text-[16px] font-[600] leading-[20px] text-white'>Отправить пароль</button>
        </form>
      </div>
    </div>
  </section>
  )
}

export default CheckingEmail