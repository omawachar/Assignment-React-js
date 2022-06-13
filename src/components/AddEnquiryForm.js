import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { addEnquiry, getCourseById } from '../services/CourseServices';

export default function AddEnquiryForm() {
  const {id}=useParams();

  const [state,setState]=useState({name:'',email:'',experience:'',course_id:id});
  const navigate=useNavigate();
  const handler=(event)=>{
    const {name,value}=event.target;
    setState({...state,[name]:value});
  }
  const postData=(event)=>{
    event.preventDefault();
    addEnquiry(state)
    .then(res=>{
        if(res.data){
            alert("Success");
            navigate("/");
        }
    })
    .catch(err=> console.log(err))
}

const [courseData,setCourseData]=useState([]);
useEffect(()=>{
  getCourseById(id)
    .then(res=>{
      console.log(res.data);
      setCourseData(res.data);
    }).catch(err=> console.log(err));
  },[]);

  return (
    <div>
        <h1> Add Enquiry</h1>
        <form onSubmit={postData}>
        <div className='form-group'>
                <label>Course Name</label>
                <input type="text" placeholder='Course Name' name="course_name" className='form-control' value={courseData.name}/>
            </div>
            <div className='form-group'>
                <label>Course Duration</label>
                <input type="text" placeholder='Course Duration' name="course_duration" className='form-control' value={courseData.duration} />
            </div>
            <div className='form-group'>
                <label>Course Description</label>
                <input type="text" placeholder='Description' name="description" className='form-control' value={courseData.description}/>
            </div>

            <div className='form-group'>
                <label> Name</label>
                <input type="text" placeholder='Enter your Name' name="name" className='form-control' onChange={handler} required/>
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input type="email" placeholder='xyz@abc.com' name="email" className='form-control' onChange={handler} required/>
            </div>
            <div className='form-group'>
                <label> Experience</label>
                <input type="text" placeholder='Experience in Months' name="experience" className='form-control' onChange={handler} required/>
            </div>
     
            <input type="submit" value="Submit" className='btn btn-success mt-3 '/>
        </form>
    </div>
  )
}
