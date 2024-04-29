import { useState } from "react";
import { Home } from "./Pages/Home";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { LoginPopup } from "./components/LoginPopup";
import { BrowserRouter , Routes , Route   } from "react-router-dom";
import { Cart } from "./Pages/Cart";

const App = ()=> {
  const [isLogin , setIsLogin] = useState(false);
  return (
    <BrowserRouter>
    <>
    {isLogin ? <LoginPopup setIsLogin = {setIsLogin} /> : ''}
    <div className="app w-[85%] mx-auto">
      <Navbar setIsLogin = {setIsLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      
      
    </div>
    <Footer />
    </>
    </BrowserRouter>
  );
}

export default App;
