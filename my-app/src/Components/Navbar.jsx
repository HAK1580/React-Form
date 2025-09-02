import React from 'react'
import { NavLink} from 'react-router-dom' 


const Navbar = () => {
  return (
    <div className='nav'>
       <a href="/home"> <img width={462} src="heclogo.png" alt="img not found" />  </a> 
     <ul>
        <li> <NavLink className={(e)=>e.isActive?"underline":""} to="/home" >Home</NavLink></li>
        <li> <NavLink className={(e)=>e.isActive?"underline":""} to="/form" >Admission Form</NavLink></li>
        <li> <NavLink className={(e)=>e.isActive?"underline":""} to="/about" >About</NavLink></li>
        <li> <NavLink className={(e)=>e.isActive?"underline":""} to="/contacts" >Contacts</NavLink></li> 
     </ul>

    </div>
  )
}

export default Navbar