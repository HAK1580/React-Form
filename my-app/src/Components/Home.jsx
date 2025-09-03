import React from 'react'
import './Home.css'


const Home = () => {
  return (
    <div>
      <div className="header">
        <h1> WELCOME TO  HEC PAKISTAN </h1>

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
        <div className="achievements">
          <div className="achievement-text">
            <h1>Achievements of HEC</h1>
            <p>
              HEC has expanded access to higher education by increasing the number of universities and campuses across Pakistan.
              It has introduced scholarship programs for students to study both locally and abroad.
              The commission has implemented quality assurance measures to improve academic standards.
              HEC has promoted research culture through funding and publication support.
              It has advanced digital initiatives, including online libraries and connectivity for universities
              HEC has strengthened international collaborations, connecting Pakistani universities with global institutions.
              It has empowered youth through innovation and entrepreneurship programs.
              By focusing on modern technology and digital learning, HEC is shaping a smarter future for Pakistan.

            </p>

          </div>
          <img width={730} src="contactpic1.jpg" alt="" />

        </div>


        <h2 className='homeend'> <strong>"</strong>  Empowering Pakistan through Higher Education <strong>"</strong> </h2>

      </div>


    </div>
  )
}

export default Home