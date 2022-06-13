import axios from "axios";

const APIURL = "http://localhost:3001/";

function getAllCourses() {
  return axios.get(`${APIURL}courses`);
}

function getCourseById(id){
  return axios.get(`${APIURL}courses/${id}`);
}
function addEnquiry(data) {
  return axios.post(`${APIURL}enquiries/`, data);
}


function getAllEnquiries(){
return axios.get(`${APIURL}enquiries`)
}


export{getAllCourses,addEnquiry,getAllEnquiries,getCourseById};