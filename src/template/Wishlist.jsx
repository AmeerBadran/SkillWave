import { useState, useEffect } from 'react';
import PaginationRounded from "../components/molecule/PaginationRounded";
import DashboardCourseCard from "../components/organism/DashboardCourseCard";
import courseData from "../constants/courseData";

export default function Wishlist() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const itemsPerPage = 3;

  const pageCount = Math.ceil(courseData.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const newSelectedCourses = courseData.slice(startIndex, startIndex + itemsPerPage);
    setSelectedCourses(newSelectedCourses);
  }, [currentPage]);

  const handelPagination = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="col-span-3 w-full mx-auto ml-6 bg-white rounded-lg mb-20">
      <div className='p-6 border rounded-t-lg'>
        <h1 className='text-2xl font-semibold text-blue-900 '>Wish List</h1>
      </div>
      <div className='p-6 space-y-6'>
        {selectedCourses.map(course => (
          <DashboardCourseCard
            key={course.id}
            title={course.title}
            lessons={course.lessons}
            duration={course.duration}
            price={course.price}
            oldPrice={course.oldPrice}
            rating={course.rating}
            reviews={course.reviews}
            instructor={course.instructor}
            courseImage={course.courseImage}
            avatar={course.avatar}
            whishList={true}
          />
        ))}
        <div className="mx-auto mt-20">
          <PaginationRounded count={pageCount} page={currentPage} onChange={handelPagination} />
        </div>
      </div>
    </div>
  );
}
