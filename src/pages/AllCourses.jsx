import CountUp from 'react-countup';
import PageHeader from "../components/molecule/PageHeader";
import CourseCard from "../components/organism/CourseCard";
import coursesCardsData from "../constants/coursesCardsData";
import PaginationRounded from "../components/molecule/PaginationRounded";
const AllCourses = () => {
  const handelPagination = () => {
    console.log('object')
  }
  return (
    <div className="bg-white">
      <PageHeader
        title="Our Courses"
        breadcrumbText="Courses"
        bgClass=""
        overlayColor="bg-gray-900 bg-opacity-20"
        titleColor="text-base-color"
        breadcrumbColor="text-second-color"
        arrowColor="text-base-color"
        customTitleClasses="text-5xl 2xmobile:text-7xl"
      />
      <div className="bg-third-color h-48 -mt-20">
        <div className="flex max-w-[1300px] mx-auto justify-between items-center py-10 px-5 text-white">
          <div>
            <h2 className="text-4xl font-bold ">
              Achieve your Goals with DreamsLMS
            </h2>
          </div>
          <div className="flex space-x-10">
            <div className="text-center">
              <div className="text-3xl font-bold flex items-center justify-center">
                <CountUp end={35431} duration={2} separator="," />
                <span className="w-4 h-4 bg-purple-500 rounded-full ml-2"></span>
              </div>
              <p className="text-sm">Students Enrolled all over the World</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold flex items-center justify-center">
                <CountUp end={168} duration={2} />
                <span className="w-4 h-4 bg-blue-400 rounded-full ml-2"></span>
              </div>
              <p className="text-sm">Total Courses on our Platform</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold flex items-center justify-center">
                <CountUp end={7} duration={2} />
                <span className="w-4 h-4 bg-teal-400 rounded-full ml-2"></span>
              </div>
              <p className="text-sm">Countries of Students</p>
            </div>
          </div>
        </div>

      </div>
      <div className="w-full py-20 px-4 bg-banner bg-no-repeat bg-center slg:bg-right bg-cover">
        <div className="max-w-[1300px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-7 ">
          {coursesCardsData.map((course, index) => (
            <CourseCard
              key={index}
              courseImage={course.image}
              avatar={course.avatar}
              userName={course.userName}
              userRole={course.userRole}
              courseTitle={course.courseTitle}
              lessonsCount={course.lessonsCount}
              duration={course.duration}
              rating={course.rating}
              price={course.price}
            />
          ))}
        </div>
        <div className="mx-auto mt-20">
          <PaginationRounded count={5} onPageChange={handelPagination} />
        </div>
      </div>
    </div>
  );
};

export default AllCourses;