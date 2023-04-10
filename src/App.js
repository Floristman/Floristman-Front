import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./router/Home";
import Basket from "./components/Basket";
import User from "./components/User";


function App() {
  return (
    <div className="App font-font">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/user" element={<User/>}/>
      </Routes>
    </div>
  );
}

export default App;
