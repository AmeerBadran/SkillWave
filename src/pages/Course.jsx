
import { MdOutlineFavoriteBorder, MdOutlineMenuBook, MdTimer } from "react-icons/md";
import user1 from "../assets/images/user1.jpg"
import course from "../assets/images/course-20-768x512.jpg"
import { FaPeopleGroup } from "react-icons/fa6";
import { PiVideo } from "react-icons/pi";
import { FaBook, FaCertificate, FaChartLine, FaClock, FaDownload, FaKey, FaMobileAlt, FaPlay, FaShareAlt, FaTasks, FaUsers, FaVideo } from "react-icons/fa";
import CourseContent from "../components/organism/CourseContent";
import ReviewSection from "../components/organism/ReviewSection";
import { Link } from "react-router-dom";
import RenderStars from "../components/atoms/RenderStars";
const Course = () => {
  return (
    <div className="bg-[#FAFAFA] mt-20 ">
      <div className="relative w-full min-h-72">
        <div className="absolute inset-0 bg-inner-banner bg-cover bg-no-repeat"></div>
        <div className="absolute inset-0 bg-third-color bg-opacity-70"></div>
        <div data-aos="fade-right" data-aos-duration="1000" className="relative z-10 max-w-4xl 2xl:max-w-[1300px] mx-auto py-10 px-5 2xl:pl-5 2xl:pr-10 text-white">
          <div className="flex flex-col md:flex-row justify-between 2xl:w-2/3 ">
            <div className="flex flex-col md:flex-row text-center gap-4 text-white justify-start items-center">
              <img className="w-14 h-14 rounded-full border-4 mr-1" src={user1} alt="Rounded avatar" />
              <div className="flex flex-col md:mr-7 md:text-start">
                <h1>Nicole Brown</h1>
                <p>UX/UI Designer</p>
              </div>
              <RenderStars ratingNumber={3.5} />
            </div>
            <div className="flex justify-center items-center mt-4 md:mt-0">
              <p className="bg-base-color rounded-full py-2 px-4 font-semibold text-gray-100 text-sm">WEB DEVELPMENT</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-8 2xl:w-2/3">
            <h1 className="text-[27px]">The Complete Web Developer Course 2.0</h1>
            <p className="text-sm">Learn Web Development by building 25 websites and mobile apps using HTML, CSS, Javascript, PHP, Python, MySQL & more!</p>
            <div className="flex flex-col md:flex-row gap-4">
              <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="300" className="flex gap-2 items-center"><MdOutlineMenuBook className="text-red-400 text-xl" /><p>12+ Lesson</p></div>
              <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="600" className="flex gap-2 items-center"><MdTimer className="text-yellow-400 text-xl" /><p>9hr 30min</p></div>
              <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="900" className="flex gap-2 items-center"><FaPeopleGroup className="text-red-400 text-xl" /><p>32 students enrolled</p></div>
            </div>
          </div>
        </div>
      </div>

      {/* right section */}
      <div className="grid grid-cols-1 2xl:grid-cols-3 max-w-[1300px] mx-auto px-4">
        <div className=" 2xl:col-span-2 2xl:mr-7 my-10">
          <div data-aos="fade-up" data-aos-duration="1200" className="max-w-4xl mx-auto p-8 mb-10 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">Overview</h2>
            <div>
              <h3 className="text-lg font-semibold mb-2">Course Description</h3>
              <p className="ml-4 text-gray-700 text-sm mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
              <p className="ml-4 text-gray-700 text-sm mb-4">
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">What you will learn</h3>
              <div className="grid text-sm 2md:grid-cols-2 sm:grid-cols-2 gap-4">
                <ul className="ml-4 text-gray-700">
                  <li>Become a UX designer.</li>
                  <li>You will be able to add UX designer to your CV.</li>
                  <li>Become a UI designer.</li>
                  <li>Build & test a full website design.</li>
                  <li>Build & test a full mobile app.</li>
                </ul>
                <ul className="ml-4 2md:ml-0 text-gray-700">
                  <li>Learn to design websites & mobile phone apps.</li>
                  <li>You will learn how to choose colors.</li>
                  <li>Prototype your designs with interactions.</li>
                  <li>Export production ready assets.</li>
                  <li>All the techniques used by UX professionals.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">Requirements</h3>
              <ul className="ml-4 text-sm text-gray-700">
                <li>You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.</li>
                <li>No previous design experience is needed.</li>
                <li>No previous Adobe XD skills are needed.</li>
              </ul>
            </div>
          </div>
          <CourseContent />
          <ReviewSection />
        </div>
        <div data-aos="fade-left" data-aos-duration="1200" className=" z-20 mx-auto 2xl:max-w-[433px] 2xl:-mt-[260px]  space-y-10 mb-20">
          {/* First Card */}
          <div className="bg-white border p-5 rounded-xl shadow-lg">
            <div className=" relative">
              <img src={course} alt="course image" className="mx-auto" />
              <div className="w-full h-full bg-black bg-opacity-35 top-0 absolute"></div>
              <div className="absolute top-1/2 left-1/2 transform scale-110 origin-center -translate-x-1/2 -translate-y-1/2">
                <button className="h-20 w-20 bg-black bg-opacity-55 rounded-full flex justify-center items-center hover:bg-opacity-70 transition-all duration-300"><PiVideo className="text-5xl text-white" /></button>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-black text-green-600">FREE</h1>
                <p className="text-sm text-gray-500">$99.00 50% off</p>
              </div>
              <div className="flex flex-col xmobile:flex-row gap-4 mt-4">
                <button className="flex xmobile:w-1/2 justify-center items-center gap-1 text-red-400 border py-2 px-5 rounded-full border-red-400 hover:bg-red-400 hover:text-white transition-all duration-300">
                  <MdOutlineFavoriteBorder className="text-lg" />
                  <p>Add to Wishlist</p>
                </button>
                <button className="flex xmobile:w-1/2 justify-center items-center gap-1 text-red-400 border py-2 px-5 rounded-full border-red-400 hover:bg-red-400 hover:text-white transition-all duration-300">
                  <FaShareAlt />
                  <p>Share</p>
                </button>
              </div>
              <div className="mt-5">
                <Link to="/CheckOut" className="flex w-full justify-center items-center gap-1 text-white text-base hover:text-green-500 border-2 py-3 px-5 rounded-full border-green-500 bg-green-500 hover:bg-white transition-all duration-300">
                  <p className="font-black">Enroll Now</p>
                </Link>
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div className="bg-white p-6 border rounded-xl shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Includes</h2>
            <ul className="space-y-2">
              <li className="flex items-center space-x-3">
                <FaPlay className="text-rose-400" />
                <span>11 hours on-demand video</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaDownload className="text-rose-400" />
                <span>69 downloadable resources</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaKey className="text-rose-400" />
                <span>Full lifetime access</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaMobileAlt className="text-rose-400" />
                <span>Access on mobile and TV</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaTasks className="text-rose-400" />
                <span>Assignments</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaCertificate className="text-rose-400" />
                <span>Certificate of Completion</span>
              </li>
            </ul>
          </div>

          {/* Third Card */}
          <div className="bg-white p-6 rounded-xl border shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Includes</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <FaUsers className="text-purple-400" />
                <span>Enrolled: <strong>32 students</strong></span>
              </li>
              <li className="flex items-center space-x-3">
                <FaClock className="text-purple-400" />
                <span>Duration: <strong>20 hours</strong></span>
              </li>
              <li className="flex items-center space-x-3">
                <FaBook className="text-purple-400" />
                <span>Chapters: <strong>15</strong></span>
              </li>
              <li className="flex items-center space-x-3">
                <FaVideo className="text-purple-400" />
                <span>Video: <strong>12 hours</strong></span>
              </li>
              <li className="flex items-center space-x-3">
                <FaChartLine className="text-purple-400" />
                <span>Level: <strong>Beginner</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Course;
