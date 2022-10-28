import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../Shared/NewsSummary/CoursesDetails';

const Home = () => {
    const courses = useLoaderData()
    return (
        <div>
            <h3 className='text-center text-primary m-4'>Explore most demanded Courses</h3>
            <div>
                {
                    courses.map(course=><NewsSummary key={course._id} course={course}/>)
                }
            </div>
        </div>
    );
};

export default Home;