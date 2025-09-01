import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './Components/About'
import Form from './Components/Form'
import Contacts from './Components/Contacts'
import Home from './Components/Home'

function App() {
   const router=createBrowserRouter(
    [

      {
        path:"/home",
        element: <> <Navbar/> <Home />  </>  
      },
      {
        path:"/about",
        element: <> <Navbar/> <About /> </>  
      },
      {
        path:"/contacts",
        element: <> <Navbar/> <Contacts /> </>  
      },
      {
        path:"/form",
        element: <> <Navbar/> <Form /> </>  
      },
     
    ])
  
    
  

  return (
    <> 
       <RouterProvider router={router} /> 


    </>
  )
}

export default App
