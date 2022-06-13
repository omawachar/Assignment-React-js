import React, { useEffect, useState } from "react";
import { getAllEnquiries, getCourseById } from "../services/CourseServices";

export default function Enquiries() {
  const [enquirydata, setEnquiryData] = useState([]);
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    getAllEnquiries()
      .then((res) => {
        console.log(res.data);
        setEnquiryData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);




const getPost=(id)=>{
getCourseById(id)
.then(res=>{
setCourseData(res.data);
}).catch(err=>console.log(err));
}

  return (
   
   <div>

{enquirydata.map(enquiry=>
       <div className="row container m-3" key={enquiry.id}>

       <div className="col-sm-8" >
         <div className="card" style={{ width: "48rem" }}>
           <div className="card-body">
             <h5 className="card-title">User Name : {enquiry.name}</h5>
             <p className="card-text"> User Email :{enquiry.email}</p>
             <p className="card-text"> User Experience: {enquiry.experience}</p>
             <p className="card-text"> Enquiry Course: {enquiry.course_id}</p>
           
           </div>
         </div>
       </div>
       </div>)}

   </div>
    );
}
