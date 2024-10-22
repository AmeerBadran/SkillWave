import PageHeader from "../components/molecule/PageHeader";
import user1 from "../assets/images/user1.jpg"
import { Link, Outlet, useLocation } from "react-router-dom";
import { MdOutlineAddToPhotos, MdOutlineFavorite } from "react-icons/md";
import { FaBookOpenReader } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { GoPersonFill } from "react-icons/go";
import { RiGraduationCapFill } from "react-icons/ri";
export default function Profile() {
  const location = useLocation();
  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="My Profile"
        breadcrumbText="Profile"
        bgClass=""
        overlayColor="bg-gray-900 bg-opacity-20"
        titleColor="text-base-color"
        breadcrumbColor="text-second-color"
        arrowColor="text-base-color"
        customTitleClasses="text-5xl 2xmobile:text-7xl"
      />
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 gap-0 gap-y-6 lg:gap-6 lg:grid-cols-4 py-20 px-5">
        <div className=" space-y-6">
          <div className="w-full border pb-4 rounded-md bg-white">
            <div className="h-28 bg-base-color bg-opacity-90 rounded-t-md flex justify-center items-end">
            </div>
            <div className="flex flex-col items-center -mt-16 gap-1">
              <img src={user1} alt="user image" className="size-32 rounded-full border-4 border-white" />
              <h1 className="font-semibold text-xl mt-3">Rolands Richard</h1>
              <p className="text-gray-500">Student</p>
            </div>
          </div>
          <div className="w-full border rounded-md p-4 divide-y divide-gray-300 bg-white">
            <div className="pb-4">
              <h1 className="text-lg font-semibold">Dashboard</h1>
              <div className="flex flex-col mt-3 space-y-3 pl-1">
                <Link to="myProfile" className={`flex items-center gap-2 ${location.pathname === "/profile/myProfile" ? 'hover:text-gray-500 text-base-color' : 'text-gray-500 hover:text-base-color'} `}><GoPersonFill />My Profile</Link>
                <Link to="enrolledCourses" className={`flex items-center gap-2 ${location.pathname === "/profile/enrolledCourses" ? 'hover:text-gray-500 text-base-color' : 'text-gray-500 hover:text-base-color'} `}><FaBookOpenReader />Enrolled Courses</Link>
                <Link to="wishlist" className={`flex items-center gap-2 ${location.pathname === "/profile/wishlist" ? 'hover:text-gray-500 text-base-color' : 'text-gray-500 hover:text-base-color'} `}><MdOutlineFavorite />Wishlist</Link>
                <Link to="settings" className={`flex items-center gap-2 ${location.pathname === "/profile/settings" ? 'hover:text-gray-500 text-base-color' : 'text-gray-500 hover:text-base-color'} `}><IoSettingsSharp />Settings</Link>
              </div>
            </div>
            <div className="pt-4">
              <h1 className="text-lg font-semibold">Admin Links</h1>
              <div className="flex flex-col mt-3 space-y-3 pl-1">
                <Link to="adminAllCourses" className={`flex items-center gap-2 ${location.pathname === "/profile/adminAllCourses" || location.pathname === "/profile/adminAllCourses/editCourse" ? 'hover:text-gray-500 text-base-color' : 'text-gray-500 hover:text-base-color'} `}><RiGraduationCapFill />All Courses</Link>
                <Link to="addCourse" className={`flex items-center gap-2 ${location.pathname === "/profile/addCourse" ? 'hover:text-gray-500 text-base-color' : 'text-gray-500 hover:text-base-color'} `}><MdOutlineAddToPhotos />Add Course</Link>

              </div>
            </div>
          </div>
        </div>
        <Outlet />

      </div>
    </div>
  )
}
