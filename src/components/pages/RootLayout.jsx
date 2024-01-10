import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Login from "../Login";
import { useState } from "react";
import {CartContextProvider} from "../Store/CartContext";
import Cartdialogbox from "../Cartdialogbox";
import Footer from "../Footer";

 function RootLayout(){
    const [logscreen, setLogScreen] = useState(false);

    const [cartOpen,setCartOpen]=useState(false)
    const toggleCart = () => {
    
    setCartOpen(!cartOpen);
    console.log(cartOpen);
  };
    const handleLogScreen=( )=>{
setLogScreen(!logscreen)

    }
return(

<>
<CartContextProvider>
<Navbar handleLogScreen={handleLogScreen} toggleCart={toggleCart} />
{logscreen && <Login handleLogScreen={handleLogScreen}/>}
{cartOpen && <Cartdialogbox toggleCart={toggleCart}/>}

<Outlet/>


<Footer/>
</CartContextProvider>
</>
)
 }

 export default RootLayout;