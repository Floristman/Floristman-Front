import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import Basket from "./components/pages/Basket/Basket";
// import User from "./components/pages/User/User";
import CheckingEmail from "./components/pages/User/Register/CheckingEmail";
import PasswordSetting from "./components/pages/User/Register/PasswordSetting";
import PersonalArea from "./components/pages/User/PersonalArea/PersonalArea";
import AddressBook from "./components/pages/User/PersonalArea/AddressBook";
import Viewed from "./components/pages/User/PersonalArea/Viewed";
import Reviews from "./components/pages/User/PersonalArea/Reviews";
import Catalog from "./components/pages/Catalog/Catalog";
import Flowers from "./components/pages/Products/Flowers/Flowers";
import Login from "./components/pages/User/Register/Login";
import Register from "./components/pages/User/Register/Register";
import Menu from "./components/Menu/Menu";
import { Contexts } from "./Context/Context";
import { useState } from "react";
// import Personal from "./components/pages/User/PersonalArea/Personal";


function App() {
  const [openClose,setOpenClose]=useState('translate-x-[-1000px]')
  const[flowerId,setFlowerId]=useState('')
  
  return (
    <div  className="App font-font">
      <Contexts.Provider value={{setOpenClose,openClose,setFlowerId,flowerId,}}>

      <Navbar/>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path={`/flower/:id`} element={<Flowers/>}/>
        <Route path="/checkingemail" element={<CheckingEmail/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/passwordsetting" element={<PasswordSetting/>}/>
        <Route path="/personalarea" element={<PersonalArea/>}/>
        <Route path="/addresbook" element={<AddressBook/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/viewed" element={<Viewed/>}/>
        <Route path="/catalog/:id" element={<Catalog/>}/>
        <Route path="/viewed" element={<Viewed/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/*" element={'Error 404'}/>
      </Routes>
      </Contexts.Provider>
    </div>
  );
}

export default App;
