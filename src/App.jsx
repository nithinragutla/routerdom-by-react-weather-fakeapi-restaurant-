import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Des from "./router.dom/des";
// import Menu from "./router.dom/menu";
// import Img from "./router.dom/img";
// import Address from "./router.dom/address";
// import Nav from "./router.dom/nav";
// import Res from "./router.dom/restaurant";


import Products from "./fakestore api/productsapi";
import See from "./fakestore api/see";
import Login from "./fakestore api/login";
import Weather from "./fakestore api/weatherapi";

// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Initial from "./routerdom/initial";
// import Display from "./routerdom/display";
// import First from "./routerdom/first";
// import Secound from "./routerdom/second";
// import Third from "./routerdom/third";

// import Memo from "./use memo/mem";

function App() {


  return (
    <>
{/* <BrowserRouter>
<Routes>

<Route path="/" element={<Display/>}/>
<Route path="/First" element={<First/>}/>
<Route path="/Second/:productid" element={<Secound/>}/>
<Route path="/Third" element={
  adminislogin ? <Third/> : <Navigate to="/"/>
}/>
</Routes>

    <Initial/>
    </BrowserRouter> */}

      {/* <BrowserRouter>
    <Nav/>
<Routes>
<Route path="/" element={<Res/>}/>
<Route path="/Description" element={<Des/>}/>
<Route path="/Menu" element={<Menu/>}/>
<Route path="/Images" element={<Img/>}/>
<Route path="/Address" element={<Address/> }/>
</Routes>
    </BrowserRouter> */}

    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Weather" element={<Weather/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<See/>}/>
    </Routes>
    </BrowserRouter>
    
  {/* <Memo/> */}


    </>
  )
}

export default App;
