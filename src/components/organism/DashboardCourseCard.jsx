/* eslint-disable react/prop-types */

import { MdHeartBroken, MdOutlineMenuBook, MdTimer } from "react-icons/md";
import RenderStars from "../atoms/RenderStars";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardCourseCard = ({ title, lessons, duration, price, oldPrice, rating, reviews, instructor, courseImage, avatar, whishList, editCourse = false }) => {
  return (
    <div className=" p-6 mx-auto bg-white border border-gray-200 rounded-lg overflow-hidden relative">
      <div className="flex ">
        <div className="w-1/3 relative overflow-hidden rounded-lg">
          <img
            src={courseImage}
            alt="Course"
            className="object-cover w-full h-full rounded-lg hover:scale-110 transition-all duration-500"
          />
          <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded-md">
            <span className="text-red-600 font-bold text-lg">{price}</span>
            <span className="text-gray-500 line-through ml-2">{oldPrice}</span>
          </div>
        </div>
        <div className="w-2/3 p-4">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <div className="flex items-center mt-2 text-gray-500">
            <span className="mr-4 flex gap-1"><MdOutlineMenuBook className="text-orange-500 text-xl" /> {lessons}</span>
            <span className="flex gap-1"><MdTimer className="text-orange-500 text-xl" /> {duration}</span>
          </div>
          <div className="flex items-center mt-2">
            <div className="flex items-center text-yellow-500">
              <RenderStars ratingNumber={rating} />
            </div>
            <span className="ml-2 text-gray-600">({reviews})</span>
          </div>
          <div className="flex items-center mt-4">
            <img
              src={avatar}
              alt="Instructor"
              className="w-8 h-8 rounded-full"
            />
            <span className="ml-2 text-gray-700">{instructor}</span>
            <span className="text-gray-500 ml-1">Instructor</span>
          </div>
        </div>
      </div>
      {whishList && (
        <button className="absolute top-10 right-6 rounded-full">
          <MdHeartBroken className="hover:text-base-color text-2xl transition-all duration-300" />
        </button>
      )}
      {editCourse && (
        <Link to='editCourse' className="absolute top-10 right-6 rounded-full">
          <FaEdit className="hover:text-base-color text-2xl transition-all duration-300" />
        </Link>
      )}
    </div>
  );
};

export default DashboardCourseCard;