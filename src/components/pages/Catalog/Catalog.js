import React, { useContext } from 'react'
import { Contexts } from '../../../Context/Context';

function Catalog(props) {
  console.log(props);
  const {openClose,setOpenClose}=useContext(Contexts)
  const handleMenuBody=()=>{
    setOpenClose('translate-x-[-1000px]')
  }
  return (
    

    <section onClick={()=>handleMenuBody()} className={`${openClose === 'translate-x-[0px]' ? 'blur' : 'blur-none'} duration-500`} >

    <div className='pt-[100px]'>Catalog</div>
    </section>
  )
}

export default Catalog