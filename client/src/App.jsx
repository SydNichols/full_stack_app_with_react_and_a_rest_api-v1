import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Courses from '../components/Courses.jsx';
import CourseDetail from '../components/CourseDetail.jsx'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>
    </Router>
  )
}

export default App