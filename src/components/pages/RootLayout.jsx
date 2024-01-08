import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Login from "../Login";
import { useState } from "react";

 function RootLayout(){
    const [logscreen, setLogScreen] = useState(false);


    const handleLogScreen=( )=>{
setLogScreen(!logscreen)
console.log(logscreen)
    }
return(

<>
<Navbar handleLogScreen={handleLogScreen} />
{logscreen && <Login handleLogScreen={handleLogScreen}/>}

<Outlet/>
</>
)
 }

 export default RootLayout;