import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourseList = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/courses');
                if(!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                const courses = await response.json();
                setCourses(courses);
            } catch (err) {
                setError(err.message);
            }
        }

        fetchCourseList();
    }, []);
    
    console.log(courses)

    return (
        <main>
            <div className="wrap main--grid">
                {courses.map(course => (
                    <>
                        <h2 className="course--label">Course</h2>
                        <h3 className="course--title">{course.title}</h3>
                    </>
                ))}
            </div>
        </main>
    );
};

export default Courses;