import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Contexts } from '../../Context/Context';

function Menu() {
    const { openClose } = useContext(Contexts)
    console.log(openClose);
    return (
      
                  <div className={`${openClose} duration-500 w-[40%] bg-[#FFF0E4] h-[100vh] fixed bottom-0 left-0 z-[13] pt-[71px] overflow-y-scroll`}>
                    <div className='flex items-center justify-between p-[20px] border-[0.7px] border-[#EDD5C2]'>
                        <p>Цветы</p>
                        <AddIcon className='' />
                    </div>
                    <div className='flex items-center justify-between p-[20px] border-[0.7px] border-[#EDD5C2]'>
                        <p>Сладости</p>
                        <AddIcon className='' />
                    </div>
                    <div className='flex items-center justify-between p-[20px] border-[0.7px] border-[#EDD5C2]'>
                        <p>Воздушные шарики</p>
                        <AddIcon className='' />
                    </div>
                    <div className='flex items-center justify-between p-[20px] border-[0.7px] border-[#EDD5C2]'>
                        <p>Подарки</p>
                        <AddIcon className='' />
                    </div>
                    <div className='flex items-center justify-between p-[20px] border-[0.7px] border-[#EDD5C2]'>
                        <p>Аксессуары</p>
                        <AddIcon className='' />
                    </div>
                    <div className='flex items-center justify-between p-[20px] border-[0.7px] border-[#EDD5C2]'>
                        <p>Услуги</p>
                        <AddIcon className='' />
                    </div>
                    <div className='flex items-center justify-between p-[20px] border-[0.7px] border-[#EDD5C2]'>
                        <p>Фруктовые корзины</p>
                        <AddIcon className='' />
                    </div>
                    <div className='flex items-center justify-between p-[20px] border-[0.7px] border-[#EDD5C2]'>
                        <p>Комнатные растения</p>
                        <AddIcon className='' />
                    </div>
                </div>
            
    )
}

export default Menu