import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCourses } from "../services/CourseServices";



export default function Home() {
    const [courseData,setCourseData]=useState([]);

  useEffect(()=>{
  getAllCourses()
    .then(res=>{
      console.log(res.data);
      setCourseData(res.data);
    }).catch(err=> console.log(err));
  },[]);



  
  return (
    <div>
      <h1 className="App"> All Courses</h1>

   {courseData.map(course=>
       <div className="row container m-3" key={course.id}>

       <div className="col-sm-4" >
         <div className="card" style={{ width: "18rem" }}>
           <div className="card-body">
             <h5 className="card-title">{course.name}</h5>
             <p className="card-text"> Duration : {course.duration} months</p>
             <p className="card-text"> Description {course.description}</p>
             <Link to={`/courseEnquiry/${course.id}`} className="btn btn-success">Make Enquiry</Link>
             {/* <Link to={`/courseEnquiry/${props.id}`} className="btn btn-info">More</Link> */}
           
           </div>
         </div>
       </div>
       </div>)}

      </div>
   
  );
}
