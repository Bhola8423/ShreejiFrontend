import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Faculty from './pages/Faculty';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Career from './pages/Career';
import './styles/animations.css';
import TeacherList from './pages/TeacherList';
import StudentList from './pages/StudentList';
import InquiryList from './pages/InquiryList';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/jamwantteacherList" element={<TeacherList />}/>
          <Route path="/jamwantstudentList" element={<StudentList />}/>
          <Route path="/jamwantinquiryList" element={<InquiryList />}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;