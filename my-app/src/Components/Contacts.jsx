import React from 'react'
import './Contacts.css'


const Contacts = () => {
  return (
    <div>
        <h1>CONTACTS </h1>
       <h1 className='contact_head' >   ​For general correspondence/ queries, please feel free to contact with following officers:</h1>

<div className="contacts_div">

<div className="contacts">
  <h2 style={{fontSize:"3rem",margin:"1rem auto"}}>Contact Information</h2>
  <h3 style={{fontStyle:"italic",margin:"1rem auto"}} >Head Office, Sector H-9, East Service Road, Islamabad
   Phone: UAN: (051) 111-119-432</h3>

<h2>
<h3> Ms. Afeefa Irshad </h3>
Deputy Director (R&D)
HEC, H-9 Islamabad {<br/>}
​Ph# 051-90401919 {<br/>}
E-mail: airshad@hec.gov.pk​
</h2>
<h2> {<br/>}

 <h3 >Mr. Aijaz Ahmed </h3>
​Assistant Director (R&D)​
​HEC, H-9 Islamabad {<br/>}
​Ph#  051-90401945 {<br/>}
​E-mail: aiahmed@hec.gov.pk   {<br/>}
                               {<br/>}
 <h3 >Mr. Naeem Bhatti </h3>
​Associate Director (R&D)​
​HEC, H-9 Islamabad {<br/>}
​Ph#  051-880401213 {<br/>}
​E-mail: bhatti@hec.gov.pk
</h2>

</div>
<img width={795} src="contactpic2.jpg" alt="" />



</div>







        </div>
  
  )
}

export default Contacts