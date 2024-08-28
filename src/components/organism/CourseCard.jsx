/* eslint-disable react/prop-types */
import {
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
  MdOutlineMenuBook,
} from "react-icons/md";
import { MdTimer } from "react-icons/md";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

const CourseCard = ({
  avatar,
  userName,
  courseImage,
  userRole,
  courseTitle,
  lessonsCount,
  duration,
  rating,
  price,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500 text-xl" />
        ))}
        {hasHalfStar && <FaRegStarHalfStroke className="text-yellow-500 text-xl" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={i} className="text-yellow-500 text-xl" />
        ))}
      </>
    );
  };

  return (
    <div className="group p-4 hover:bg-base-color rounded-xl transition-all duration-500 text-black hover:text-white bg-white">
      <div className="rounded-xl overflow-hidden relative">
        <img
          src={courseImage}
          alt={courseTitle}
          className="w-full hover:scale-125 ease-in-out transition-all duration-700"
        />
        <div className=" absolute right-4 bottom-4 py-2 px-4 bg-[#ffffffe9] rounded-md">
          <p className="font-semibold text-green-500">{price}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img className="w-12 h-12 rounded-full border-4" src={avatar} alt={userName} />
            <div className="font-medium">
              <div>{userName}</div>
              <div className="text-xs font-light text-gray-500 group-hover:text-gray-200 transition-all duration-500">
                {userRole}
              </div>
            </div>
          </div>
          <button
            type="button"
            className="h-full text-red-500 group-hover:text-white transition-all duration-500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? (
              <MdOutlineFavorite className="text-2xl" title="save this course" />
            ) : (
              <MdOutlineFavoriteBorder className="text-2xl" title="unsave this course" />
            )}
          </button>
        </div>
        <Link to='/course'>
          <h1 className="text-lg font-semibold hover:text-second-color">{courseTitle}</h1>
        </Link>
        <div className="flex justify-between border-b pb-4">
          <p className="flex items-center gap-3">
            <MdOutlineMenuBook className="text-orange-500 text-xl group-hover:text-white transition-all duration-500" />
            {lessonsCount} Lessons
          </p>
          <p className="flex items-center gap-3">
            <MdTimer className="text-orange-500 text-xl group-hover:text-white transition-all duration-500" />
            {duration}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {renderStars()}
          </div>

          <Link
            to='/course'
            className="border-2 rounded-full px-4 py-2 hover:bg-gray-300 hover:text-base-color hover:font-semibold"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
