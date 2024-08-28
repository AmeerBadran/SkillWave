import heroImg from "../assets/images/hero-img.png"
import svg1 from '../assets/svg/course-01.svg';
import svg2 from '../assets/svg/course-02.svg';
import svg3 from '../assets/svg/course-03.svg';
import svg4 from '../assets/svg/course-04.svg';
import { PiStarFourFill } from "react-icons/pi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AuthButton from "../components/atoms/AuthBotton"
import { MdOutlineVideoLabel } from "react-icons/md";
import HomeInfoCard from "../components/molecule/HomeInfoCard"
import coursesCardsData from "../constants/coursesCardsData";
import CourseCard from "../components/organism/CourseCard";
import InstructorSection from "../components/organism/InstructorSection ";
import MyCarousel from "../components/organism/MultiCardCarousel";
// ..
AOS.init();
export default function Home() {
  return (
    <div className="bg-white">
      <div className="bg-home-bg bg-no-repeat bg-center slg:bg-right bg-cover pt-20">
        <div className="grid grid-cols-1 max-w-[1300px] mx-auto justify-between items-center pt-10 px-[15px] slg:grid-cols-2">
          <div data-aos="fade-down" data-aos-duration="1200" className="w-full pb-5 mb-5 flex flex-col">
            <div className="flex items-center mb-5">
              <p className="p-[10px] bg-base-color text-white rounded-full text-sm font-semibold">The Leader in Online Learning</p>
            </div>
            <h1 className="text-4xl leading-tight font-black text-black">Engaging<span className="text-base-color"> &</span> Accessible Online Courses For All</h1>
            <p className=" text-black mt-5">Enroll in our advanced courses and acquire new skills through our premium learning platform.Our expert-led programs are designed to help you grow, offering flexibility and high-quality content to enhance your learning experience.</p>

            <div className={`grid grid-cols-2 gap-5 rounded-md w-full  mt-7 transition-all duration-500 ease-out overflow-hidden`}>

              <AuthButton
                label="All Courses"
                icon={MdOutlineVideoLabel}
                bgType="yellow"
              />
            </div>
          </div>
          <img src={heroImg} alt="heroImg" data-aos="fade-up" data-aos-duration="1200" className="max-h-[550px] justify-self-center hidden slg:block" />

        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1200" className="max-w-[1300px] mx-auto z-10 grid lg:grid-cols-4 2xmobile:grid-cols-2 2xmobile:px-2 gap-4 mt-4 slg:-mt-14">
        <HomeInfoCard imgSrc={svg1} title="20" description="Online Courses" titleColor="#7B1FFE" />
        <HomeInfoCard imgSrc={svg2} title="4" description="Expert Tutors" titleColor="#FED700" />
        <HomeInfoCard imgSrc={svg3} title="10" description="Workshops" titleColor="#1CBEEF" />
        <HomeInfoCard imgSrc={svg4} title="100" description="Certifications" titleColor="#0DD3A3" />
      </div>
      <InstructorSection />

      {/*Courses Section*/}
      <div className="w-full py-20 px-4 bg-banner bg-no-repeat bg-center slg:bg-right bg-cover">
        <div className="max-w-[1300px] mx-auto flex flex-col mb-20 text-center">
          <p className="flex justify-center items-center gap-3 text-second-color"><PiStarFourFill />Explore Our Courses</p>
          <h1 className="my-7 text-6xl font-extrabold">Discover<span className="text-base-color"> Our Range</span> of Courses</h1>
          <p className="text-gray-600">Find the perfect course to enhance your skills and knowledge. </p>
        </div>
        <div className="max-w-[1300px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-7">
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
      </div>
      <div className="max-w-[1300px] mx-auto px-5 my-20">
        <div className="max-w-[1300px] mx-auto flex flex-col mb-20 text-center">
          <p className="flex justify-center items-center gap-3 text-second-color"><PiStarFourFill />Reviews Section</p>
          <h1 className="my-6 text-5xl font-extrabold">Explore What <span className="text-base-color"> Our Students</span>  Are Saying</h1>
          <p className="text-gray-600">Learn about our customers experiences and benefit from their opinions</p>
        </div>
        <MyCarousel />
      </div>
    </div>
  )
}
