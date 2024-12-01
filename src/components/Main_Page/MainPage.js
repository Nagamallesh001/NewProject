import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import CourseTypes from '../pagers/courseType/CourseTypes';
import StudentRegistrations from '../pagers/studentRegistration/StudentRegistrations';
import Courses from '../pagers/course/Courses';

function MainPage() {
  return (
    
    <Router>
      <div>
        <nav>     
               <ul>
            <li><Link to="/registrations">Student Registrations</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/course-types">Course Types</Link></li>
          </ul>     
             </nav>
        <Routes>
          <Route path="/course-types" element={<CourseTypes />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/registrations" element={<StudentRegistrations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default MainPage;
