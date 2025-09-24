import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourseList = async () => {
            try {
                setError(null);

                const response = await fetch('http://localhost:5000/api/courses');
                if(!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                const courseList = await response.json();
                setCourses(courseList);
            } catch (err) {
                setError(err.message);
            }
        }

        fetchCourseList();
    }, []);
    
    console.log(courses)

    if(error) {
        return (
            <main>
                <div className="wrap">
                    <div className="validation--errors">
                        <h3>Error Loading Courses</h3>
                        <p>{error}</p>
                        <button onClick={() => window.location.reload()}>
                            Try Again 
                        </button>
                    </div>

                </div>
            </main>
        );
    };

    if (courses.length == 0) {
        return (
            <main>
                <div className="wrap">
                    <p>No courses available</p>
                </div>
            </main>
        );
    }

    return (
        <main>
            <div className="wrap main--grid">
                {courses.map(course => (
                    <div key={course.id} className="course--module">
                        <h2 className="course--label">Course</h2>
                        <h3 className="course--title">{course.title}</h3>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Courses;