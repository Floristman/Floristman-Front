import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useUpdateUserMutation, useUsersQuery } from '../../../../redux/UserSlice';

function Login() {
  const [password, setPassword] = useState(false)
  const [email, setEmail] = useState(false)
  // 
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
  const [emailError, setEmailError] = useState('Email не может быть пустым')
  // 
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [emailDirty, setEmailDirty] = useState(false)
  // onChange


  const emailHandle = (e) => {
    setEmailDirty(true)
    setEmail(e.target.value)
    console.log(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (e.target.value === '') {
      setEmailError('Email не может быть пустым')
    } else if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError('Некорректный email')
    } else {
      setEmailError('')
    }
  }

  const passwordHandle = (e) => {
    setPasswordDirty(true)
    setPassword(e.target.value)
    if (e.target.value.length === 0) {
      setPasswordError('пароль не может быть пустым')
    } else if (e.target.value.length > 0 && e.target.value.length <= 3) {
      setPasswordError('Пароль должен быть минимум 3 цифр')
    } else if (!isNaN(e.target.value)) {
      setPasswordError('пароль должен содержать прописную букву')
    } else {
      // setPasswordError('')
      setPasswordDirty(false)
      // setPasswordCheckDirty(false)
    }
  }
  const { data, isSuccess } = useUsersQuery();
  const examination = isSuccess && data.find(element => element.email === email && element.password === password)
  console.log(examination);

  const navigate = useNavigate()

  const [updateUser] = useUpdateUserMutation();

  const register = async (e) => {
    e.preventDefault()
    if(examination){
      const task = {
        name: examination.name,
        phoneNumber: examination.phoneNumber,
        email: examination.email,
        isLoading: true,
        id:examination.id
      };
      localStorage.setItem('userid',examination.id)
      updateUser(task);
      navigate('/')
    }else{
      setEmailError('Неверный логин или пароль')
    }
  }
  return (
    <section className='bg-headerBg bg-cover bg-no-repeat bg-center h-screen w-[100%]'>
      <div className="container h-screen flex justify-center items-center">
        <div className="register text-center py-[34px] px-[10px] bg-registerBackground rounded-[10px]">
          <h1 className='text-[18px] font-[700] leading-[22px] text-headerText'>Войти</h1>
          <h2 className='text-black text-[12px] font-[400] leading-[14px] mt-[24px] mb-[8px]'>Еще не зарегистрированы? <Link to='/register' className='text-registerColor underline'> Зарегистрируйтесь</Link></h2>
          <form action="" onSubmit={(e) => register(e)} >
            <div className="grid grid-cols-[repeat(1,305px)] gap-[5px]">
              <div className='text-[15px] leading-[18px]  font-[400] text-red h-[18px]'>{emailDirty && emailError}</div>
              <input name='email'  onChange={(e) => emailHandle(e)} type="email" placeholder='E-mail' className='py-[14px] pl-[20px] rounded-[17px] outline-none text-[15px] leading-[18px]  font-[400]' />
              <div className='text-[12px] leading-[18px]  font-[400] text-red h-[18px]'>{passwordDirty && passwordError}</div>
              <input  name='password' onChange={(e) => passwordHandle(e)} type="password" placeholder='Пароль' className='py-[14px] pl-[20px] rounded-[17px] outline-none text-[15px] leading-[18px] font-[400]  w-[100%]' />
            </div>
            <button className='mt-[20px] px-[85px] py-[10px] bg-buttonBackground rounded-[22px] outline-none text-[16px] font-[600] leading-[20px] text-white'>Войти</button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Login