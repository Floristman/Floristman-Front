import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useAddUserMutation, useUsersQuery } from '../../../../redux/UserSlice';
import { Contexts } from '../../../../Context/Context';

function Register() {
  const [phoneNumber, setPhoneNumber] = useState(false)
  const [name, setName] = useState(false)
  const [email, setEmail] = useState(false)
  console.log(phoneNumber, name, email);
  // 
  const [phoneNumberError, setPhoneNumberError] = useState('укажите номер телефона')
  const [nameError, setNameError] = useState('Укажите имя')
  const [emailError, setEmailError] = useState('Email не может быть пустым')
  // 
  const [phoneNumberDirty, setPhoneNumberDirty] = useState(false)
  const [nameDirty, setNameDirty] = useState(false)
  const [emailDirty, setEmailDirty] = useState(false)

  // onChange
  const phoneHandle = (e) => {
    setPhoneNumberDirty(true)
    setPhoneNumber(e)
    // console.log(e);
    if (e.length < 12) {
      setPhoneNumberError('укажите номер телефона')
      setPhoneNumber(false)
    } else {
      setPhoneNumberDirty(false)
      setPhoneNumberError('')
    }
  }
  const nameHandle = (e) => {
    setNameDirty(true)
    setName(e.target.value)
    if (e.target.value.length === 1) {
      setNameError('Имя не может содержать одну букву')
    } else if (e.target.value === '') {
      setNameError('Укажите имя')
      setName(false)
    } else {
      setNameDirty(false)
      setNameError('')
    }
  }
  const emailHandle = (e) => {
    setEmailDirty(true)
    setEmail(e.target.value)
    console.log(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (e.target.value === '') {
      setEmailError('Email не может быть пустым')
      setEmail(false)
    } else if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError('Некорректный email')
      setEmail(false)
    } else {
      setEmailDirty(false)
      setEmailError('')
    }
  }

  // onClickButton

  const [addTask] = useAddUserMutation()
  const navigate = useNavigate()
  const { data, isSuccess } = useUsersQuery();
  const examination = isSuccess && data.find(element => element.email === email)

  const register = async (e) => {
    e.preventDefault()
    if (!examination && phoneNumber && name && email) {
      const user = {
        phoneNumber,
        name,
        email,
        isLoading: false,
      };
      await addTask(user);
      localStorage.setItem('email', email)
      navigate('/checkingemail')
    }else if(examination){
      setEmailDirty(true)
      setEmailError('Этот email уже используется')
    } else {
      setPhoneNumberDirty(true)
      setNameDirty(true)
      setEmailDirty(true)
    }
  }

  const {openClose,setOpenClose}=useContext(Contexts)
  const handleMenuBody=()=>{
    setOpenClose('translate-x-[-1000px]')
  }

  return (
    <section onClick={()=>handleMenuBody()} className={`${openClose === 'translate-x-[0px]' ? 'blur' : 'blur-none'} duration-500 bg-headerBg bg-cover bg-no-repeat bg-center h-screen w-[100%]`}>
      <div className="container h-screen flex justify-center items-center">
        <div className="register text-center py-[34px] px-[10px] bg-registerBackground rounded-[10px] ">
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

              />
              <div className='text-[15px] leading-[18px]  font-[400] text-red h-[18px]'>{nameDirty && nameError}</div>
              <input name='name' type="text" onChange={(e) => nameHandle(e)} placeholder='Имя' className='py-[14px] pl-[20px] rounded-[17px] outline-none text-[15px] leading-[18px] font-[400] ' />
              <div className='text-[15px] leading-[18px]  font-[400] text-red h-[18px]'>{emailDirty && emailError}</div>
              <input name='email' onChange={(e) => emailHandle(e)} type="email" placeholder='E-mail' className='py-[14px] pl-[20px] rounded-[17px] outline-none text-[15px] leading-[18px]  font-[400]' />
            </div>
            <button className='mt-[20px] px-[25px] py-[10px] bg-buttonBackground rounded-[22px] outline-none text-[16px] font-[600] leading-[20px] text-white'>Отправить пароль на почту</button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Register