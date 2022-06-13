import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import EnquiryCourse from './components/Enquiries';
import EnquiryForm from './components/AddEnquiryForm';
import AddEnquiryForm from './components/AddEnquiryForm';
import Enquiries from './components/Enquiries';

function App() {
  return (

    <main>
    <Router>
    <Nav/>
    <section className='container'>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/enquirycourse" element={<EnquiryCourse/>}/>
            <Route path="/courseenquiry/:id" element={<AddEnquiryForm/>}/>
            <Route path="/enquirycourse/" element={<Enquiries/>}/>
            <Route path="*" element={<h1 className='Text-align:center'>404 Page Not Found </h1>}/>
           
      
         </Routes>
    </section>
    </Router>
  </main>
  );
}

export default App;
