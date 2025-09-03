import React from 'react'
import './Home.css'


const Home = () => {
  return (
    <div>
      <div className="header">
        <h1> WELCOME TO  HEC PAKISTAN </h1>
        <h2> Empowering Pakistan through Higher Education </h2>

      </div>
      <div className="project-head">
        <h1>University Admission Forms <small>(Practice Project by M.Hassan Ali)</small></h1>
      </div>

      <div className="main">

        <div className="chairman">
          <div className="chairmanhead">

            <h1>Chairman HEC Pakistan</h1>
            <h2> <strong>"</strong> Dr. Mukhtar Ahmed Assumed the charge of Chairman, Higher Education Commission (HEC) on August 1, 2022.
              The Chairman of HEC Pakistan oversees higher education policy and development in the country.
              He is responsible for ensuring quality standards in universities and promoting research initiatives.  
              <strong>"</strong>
            </h2>
          </div>
          <div className="ytvideo">
            <iframe width="705" height="375" src="https://www.youtube.com/embed/y5Ed3DVwWKc?si=Mh3isGAGcMomiwJ5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>


      </div>


    </div>
  )
}

export default Home