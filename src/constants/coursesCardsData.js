// coursesData.js
import avatar from '../assets/images/contact-us-img.jpg';
import course1 from '../assets/images/course-19-768x512.jpg';
import course2 from '../assets/images/course-18-768x512.jpg';
import course3 from '../assets/images/course-20-768x512.jpg';
import course4 from '../assets/images/course-13-5-768x512.jpg';
import course5 from '../assets/images/placeholder-image.jpg';
import course6 from '../assets/images/course-18-768x512.jpg';

const coursesCardsData = [
  {
    avatar: avatar,
    image: course1,
    userName: "Michael Morgan",
    userRole: "Instructor",
    courseTitle: "HTML, CSS and Javascript Course",
    lessonsCount: 25,
    duration: "30 mins",
    rating: 4.5,
    price: "$29.99",
  },
  {
    avatar: avatar,
    image: course2,
    userName: "Sarah Lee",
    userRole: "Senior Developer",
    courseTitle: "React and Redux Course",
    lessonsCount: 30,
    duration: "45 mins",
    rating: 4.8,
    price: "$39.99",
  },
  {
    avatar: avatar,
    image: course3,
    userName: "John Doe",
    userRole: "Full Stack Developer",
    courseTitle: "Node.js and Express Course",
    lessonsCount: 20,
    duration: "35 mins",
    rating: 4.2,
    price: "$24.99",
  },
  {
    avatar: avatar,
    image: course4,
    userName: "Emma Watson",
    userRole: "Web Designer",
    courseTitle: "UI/UX Design Course",
    lessonsCount: 28,
    duration: "40 mins",
    rating: 4.7,
    price: "$34.99",
  },
  {
    avatar: avatar,
    image: course5,
    userName: "James Smith",
    userRole: "Software Engineer",
    courseTitle: "Python Programming Course",
    lessonsCount: 22,
    duration: "50 mins",
    rating: 4.4,
    price: "$27.99",
  },
  {
    avatar: avatar,
    image: course6,
    userName: "Olivia Johnson",
    userRole: "Data Scientist",
    courseTitle: "Data Science and Machine Learning",
    lessonsCount: 35,
    duration: "60 mins",
    rating: 4.9,
    price: "$49.99",
  },
];

export default coursesCardsData;
