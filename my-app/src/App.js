import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Products from "./Products";

function App() {
  return (
    <>      
       <BrowserRouter>
         <Routes>  
            <Route path="" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
         </Routes>
       </BrowserRouter>
    </>   
  );
}

export default App;
