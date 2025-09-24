import { useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';

const CourseDetail = () => {
    const[courseData, setCourseData] = useState(null);
    const[error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                setError(null);

                const response = await fetch(`http://localhost:5000/api/courses/${id}`);
                if(!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                const courseDetail = await response.json();
                setCourseData(courseDetail);
            } catch (err) {
                setError(err.message);
            }
        }

        fetchCourseData();
    }, [id]);
    
    if(error) {
        return (
            <main>
                <div className="actions--bar">
                    <div className="wrap">
                        <Link className="button button-secondary" to="/">Return to List</Link>
                    </div>
                </div>
                <div className="wrap">
                    <h2>Error Loading Course Detail</h2>
                    <p>{error}</p>
                </div>
            </main>
        )
    }


    return (
        <main>
            <div className="actions--bar">
                <div className="wrap">
                    {/*add update link*/}
                    {/*add delete link*/}
                    <Link className="button button-secondary" to="/">Return to List</Link>
                </div>
            </div>
            <div className="wrap">
                <h2>Course Detail</h2>
                <div className="main--flex">
                    <div>
                        <h3 className="course--detail--title">Course</h3>
                        <h4 className="course--name">{courseData.title}</h4>
                        <p>By {courseData.user?.firstName} {courseData.user?.lastName}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CourseDetail

