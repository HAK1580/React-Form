import React from 'react'
import './Form.css'
import { useForm } from 'react-hook-form'

const Form = () => {

  const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    reset();

  }

  const handleCNICChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // non-digits hatao

    if (value.length > 5 && value.length <= 12) {
      value = value.slice(0, 5) + "-" + value.slice(5);
    } 
    if (value.length > 12) {
      value = value.slice(0, 5) + "-" + value.slice(5, 12) + "-" + value.slice(12, 13);
    }

    e.target.value = value;
  };







  return (
    < div style={{ backgroundColor: "#d0dddafc", color: "black", }}  >

      <div className="formhead">
        <h1>ADMISSION FORM</h1>

        <div className="formdiv">

          <form onSubmit={handleSubmit(onSubmit)} action="">
            <input {...register("name", { minLength: { value: 3, message: "Enter Valid name" }, required: "Name required", pattern: { value: /^[A-Za-z]+([ '-][A-Za-z]+)*$/, message: "Only letters, spaces, apostrophes, and hyphens allowed" } })} type="text" placeholder='Enter your Name' />
            {errors.name && <p className='error'>*  {errors.name.message}  </p>}

            <input {...register("fatherName", {
              required: "Father's Name is required",
              minLength: { value: 3, message: "Enter valid name" },
              pattern: { value: /^[A-Za-z]+([ '-][A-Za-z]+)*$/, message: "Only letters allowed" }
            })} type="text" placeholder="Enter your Father's Name" />
            {errors.fatherName && <p className="error">* {errors.fatherName.message}</p>}


            <select className='select gender' {...register("gender", { required: " Select your Gender" })} defaultValue="">

              <option value="" disabled>--Select Gender--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && <p className='error'>* {errors.gender.message}  </p>}


            <input {...register("email", { required: "Email address required ", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, message: "Enter valid email address" } })} type="email" placeholder='Email address' />
            {errors.email && <p className='error'  >*  {errors.email.message}  </p>}

            <input {...register("phone", {
              required: "Phone number required",
              pattern: {
                value: /^[0-9+\-\s]{7,20}$/
                , message: "Enter valid Pakistani number e.g. 03001234567"
              },
              minLength: { value: 11, message: "Must be 11 digits" },
             maxLength: { value: 11, message: "Cannot exceed 11 digits" }

              })} type="tel" placeholder="Enter your Phone Number" maxLength={11} />
            {errors.phone && <p className="error">* {errors.phone.message}</p>}



            <input {...register("cnic", {
              required: "CNIC / B-Form is required",
              pattern: { value: /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/, message: "Format: 12345-1234567-1" }
            })} type="text" placeholder="Enter CNIC / B-Form Number" maxLength={15} onChange={handleCNICChange} />
            {errors.cnic && <p className="error">* {errors.cnic.message}</p>}



            <input {...register("age", { required: "Enter Age", pattern: { value: /^(?:1[01][0-9]|120|[1-9]?[0-9])$/, message: "Invalid age" }, min: { value: 18, message: "You are not eligible to apply" } })} type="number" placeholder=' Age' />
            {errors.age&&<p className="error">* {errors.age.message}  </p> }

               <select className='select' {...register("district", { required: "Enter your City/District" })} defaultValue="" >
              {/* DISTRICT NAMES BELOW  */}
              <option value="" disabled>-- Choose Your City/District --</option>
              <option value="Lahore">Lahore</option>
              <option value="Faisalabad">Faisalabad</option>
              <option value="Rawalpindi">Rawalpindi</option>
              <option value="Multan">Multan</option>
              <option value="Gujranwala">Gujranwala</option>
              <option value="Sialkot">Sialkot</option>
              <option value="Sargodha">Sargodha</option>
              <option value="Bahawalpur">Bahawalpur</option>
              <option value="Sheikhupura">Sheikhupura</option>
              <option value="Rahim Yar Khan">Rahim Yar Khan</option>
              <option value="Jhang">Jhang</option>
              <option value="Gujrat">Gujrat</option>
              <option value="Kasur">Kasur</option>

            </select>
            {errors.district && <p  className="error">* {errors.district.message}  </p>}




            <input {...register("MatricPercentage", { required: "Matric Percentage required", pattern: { value: /^(100(\.\d{1,2})?|(\d{1,2}(\.\d{1,2})?))$/, message: " Invalid Percentage" } })} type="number" step={"any"} placeholder='Percentage secured in Metric Exam' />
            {errors.MatricPercentage && <p className="error"  >* {errors.MatricPercentage.message}  </p>}

            <input {...register("FscPercentage", { required: "Intermediate Percentage required", pattern: { value: /^(100(\.\d{1,2})?|(\d{1,2}(\.\d{1,2})?))$/, message: " Invalid Percentage" } })} type="number" step={"any"} placeholder='Percentage secured in Intermediate Exam' />
            {errors.FscPercentage && <p className="error"  >* {errors.FscPercentage.message}  </p>}


            <select {...register("Institute", { required: "Pls select Institute" })} className='select' defaultValue="">
              <option value="" disabled>--Select your Institution--</option>
              <option value="Government Gordon College, Rawalpindi">
                Government Gordon College, Rawalpindi
              </option>
              <option value="Government Post Graduate College, Town Rawalpindi">
                Government Post Graduate College, Town Rawalpindi
              </option>
              <option value="Govt Post Graduate College for Women Satellite Town, Rawalpindi">
                Govt. Post Graduate College for Women, Satellite Town Rawalpindi
              </option>
              <option value="Government Viqar-un-Nisa Women University, Rawalpindi">
                Government Viqar-un-Nisa Women University, Rawalpindi
              </option>

              {/* Other major cities in Punjab */}
              <option value="Government Muhammadan Anglo Oriental College, Lahore">
                Government MAO College, Lahore
              </option>
              <option value="Government Postgraduate College, Sahiwal">
                Government Post Graduate College, Sahiwal
              </option>
              <option value="Government Islamia College, Gujranwala">
                Government Islamia College, Gujranwala
              </option>
              <option value="Government Postgraduate College, Chakwal">
                Government Post Graduate College, Chakwal
              </option>
              <option value="Government Graduate College, Attock">
                Government Graduate College, Attock
              </option>
              <option value="Government College University Lahore">
                Government College University (GCU), Lahore
              </option>
              <option value="Kinnaird College for Women Lahore">
                Kinnaird College for Women, Lahore
              </option>
              <option value="Government Islamia College Civil Lines Lahore">
                Government Islamia College, Civil Lines Lahore
              </option>
              <option value="Government M.A.O. College Lahore">
                Government M.A.O. College, Lahore
              </option>
              <option value="Queen Mary College Lahore">
                Queen Mary College, Lahore
              </option>
            </select>
            {errors.Institute && <p className="error"  >* {errors.Institute.message}  </p>}



            <select className='select' {...register("DegreeName", { required: "Choose your Degree programme" })} defaultValue="" >
              <option value="" disabled>--Choose your BS Degree</option>
              {/* Degree Programmes are below  */}
              <option value="BSCS">BS Computer Science (4 Years)</option>
              <option value="BSIT">BS Information Technology (4 Years)</option>
              <option value="BSEE">BS Electrical Engineering (4 Years)</option>
              <option value="BSSE">BS Software Engineering (4 Years)</option>
              <option value="BSDS">BS Data Science (4 Years)</option>
              <option value="BSBBA">BS Business Administration (4 Years)</option>
              <option value="BSBIO">BS Biotechnology (4 Years)</option>
              <option value="BSMATH">BS Mathematics (4 Years)</option>
              <option value="BSPHY">BS Physics (4 Years)</option>
              <option value="BSENG">BS English Literature (4 Years)</option>
            </select>
            {errors.DegreeName && <p className='error'> {errors.DegreeName.message}  </p>}



            <p className='cnic'>* Upload CNIC Img</p>
            <input className='upload'  {...register("documents")} type="file" placeholder='Upload your CNIC img ' accept=".pdf,.jpg,.png" />

            <input type="submit" className='submit' />
          </form>

        </div>


      </div>


    </div>
  )
}

export default Form