import React, { useState } from 'react'
import 'react-phone-input-2/lib/style.css'
import { useUpdateUserMutation, useUsersQuery } from '../../../../redux/UserSlice'
import { useNavigate } from 'react-router-dom'

function PasswordSetting() {
  const [passwordCheck, setPasswordCheck] = useState(false)
  const [password, setPassword] = useState(true)
  console.log(password);
      console.log(passwordCheck);
  const navigate=useNavigate()
  // 
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
  // 
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [passwordCheckDirty, setPasswordCheckDirty] = useState(false)
  // onClickButton
  const [updateTask] = useUpdateUserMutation();
  const { data, isSuccess } = useUsersQuery();
  const user = isSuccess && data.find((element) => element.email === localStorage.getItem('email'))
  console.log(user);
  const register = async (e) => {
    e.preventDefault();
    if (password === passwordCheck && !passwordCheckDirty && !passwordDirty) {
      const passwordUpdate = {
        phoneNumber: user.phoneNumber,
        name: user.name,
        email: user.email,
        isLoading: true,
        id: user.id,
        password
      };
      localStorage.setItem('userid',user.id)
      await updateTask(passwordUpdate);
      navigate('/')
    }else{
      setPasswordCheckDirty(true)
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

  const passwordCheckHandle =  (e) => {
    setPasswordCheck(e.target.value)
    if(password === e.target.value){
      setPasswordCheckDirty(false)
    }else{
      setPasswordCheckDirty(true)

    }
   
  }


  return (
    <section className='bg-headerBg bg-cover bg-no-repeat bg-center h-screen w-[100%]'>
      <div className="container h-screen flex justify-center items-center">
        <div className="register text-center py-[34px] px-[10px] bg-registerBackground rounded-[10px]">
          <h1 className='text-[18px] font-[700] leading-[22px] text-headerText'>Создайте пароль</h1>
          <form action="" onSubmit={(e) => register(e)} >
            <div className="grid grid-cols-[repeat(1,305px)] gap-[5px]">
              <div className='text-[12px] leading-[18px]  font-[400] text-red h-[18px]'>{passwordDirty && passwordError}</div>
              <input  name='password' onChange={(e) => passwordHandle(e)} type="password" placeholder='Новый пароль' className='py-[14px] pl-[20px] rounded-[17px] outline-none text-[15px] leading-[18px] font-[400]  w-[100%]' />
              <div className='text-[12px] leading-[18px]  font-[400] text-red h-[18px]'>{passwordCheckDirty && 'Пароли не совпадают'}</div>
              <input  onChange={(e) => passwordCheckHandle(e)} type="password" placeholder='Подтвердите пароль' className='py-[14px] pl-[20px] rounded-[17px] outline-none text-[15px] leading-[18px] font-[400]  w-[100%]' />
            </div>
            <button className='mt-[20px] px-[25px] py-[10px] bg-buttonBackground rounded-[22px] outline-none text-[16px] font-[600] leading-[20px] text-white'>Зарегистрироваться</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default PasswordSetting