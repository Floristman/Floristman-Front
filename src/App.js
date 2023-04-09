import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Discount from "./components/Discount";


function App() {
  return (
    <div className="App bg-bodyBackground font-font">
      <Navbar/>
        <Header/>
        <Discount/>
      <Routes>
        {/* <Route path="" element={}/> */}
      </Routes>
    </div>
  );
}

export default App;
