import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useUpdateUserMutation, useUsersQuery } from '../../../../redux/UserSlice';

function PersonalAreaMenu() {
  const local = useLocation()

  const navigate =useNavigate()

  const { data, isSuccess } = useUsersQuery();
  const examination = isSuccess && data.find(element => element.email === localStorage.getItem('email') && element.isLoading )

  const [updateUser] = useUpdateUserMutation();

  const register = async (e) => {
    e.preventDefault()
    if(examination){
      const task = {
        name: examination.name,
        phoneNumber: examination.phoneNumber,
        email: examination.email,
        isLoading: false,
        id:examination.id
      };
      updateUser(task);
      localStorage.removeItem('email')
      navigate('/')
    }
  }
  return (
    <div className='grid gap-[22px] grid-cols-[repeat(1,max-content)] bg-white p-[27px] pr-[73px] rounded-[20px] '>
      <Link to='/personalarea' className={`${local.pathname === '/personalarea' ? 'text-headerText border-b border-headerText' : 'text-[#8e8d6f]'} text-[18px] leading-[21px]   font-[400] h-[24px]`}>
        Личные данные
      </Link>
      <Link to='/addresbook' className={`${local.pathname === '/addresbook' ? 'text-headerText border-b border-headerText' : 'text-[#8e8d6f]'} text-[18px] leading-[21px]   font-[400] h-[24px]`}>
        Адресная книга
      </Link>
      <Link to='/reviews' className={`${local.pathname === '/reviews' ? 'text-headerText border-b border-headerText' : 'text-[#8e8d6f]'} text-[18px] leading-[21px]   font-[400] h-[24px] w-max`}>
        Отзывы
      </Link>
      <Link to='/viewed' className={`${local.pathname === '/viewed' ? 'text-headerText border-b border-headerText' : 'text-[#8e8d6f]'} text-[18px] leading-[21px]   font-[400] h-[24px]`}>
        Просмотренные
      </Link>
      <div className='mt-[50px] text-buttonBackground text-[18px] leading-[21px]  font-[400]'>
        <button onClick={(e)=>register(e)}>Выйти</button>
      </div>

    </div>
  )
}

export default PersonalAreaMenu