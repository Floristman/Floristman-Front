import { Route, Routes } from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home/Home";
import Basket from "./components/pages/Basket";
import User from "./components/pages/User";
import Flowers from "./components/pages/Flowers/Flowers";


function App() {
  return (
    <div className="App font-font">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/flowers" element={<Flowers/>}/>
        <Route path="/*" element={'Error 404'}/>
      </Routes>
    </div>
  );
}

export default App;
