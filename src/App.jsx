import { useState } from 'react'

import './App.css'
import Home from './components/pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/pages/RootLayout'
import Product from './components/pages/Product'
const router= createBrowserRouter(
  [{
    path:"/",
    element: <RootLayout/>,
    children:[
      {path:'/', element:<Home/>},
    
    ]
  }
    
  ]
)

function App() {


  return <RouterProvider router={router}/>;
}

export default App
