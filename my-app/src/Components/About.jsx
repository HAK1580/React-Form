import React from 'react'
import { Links } from 'react-router-dom' 
import './About.css'


const About = () => {

  return (
    <div className='about-div'  > 
        {/* <h1 style={{fontSize:"3.5rem ",marginLeft:"1rem",margin:"4rem auto"}} > ABOUT HEC </h1> */}
   
        <a target='_blank' href="https://www.hec.gov.pk/english/aboutus/Pages/aboutus.aspx "> 
           <img src="about.PNG" alt="" />
          </a> 
         <img  src="about2.PNG" alt="" />

    </div>

  )
}

export default About