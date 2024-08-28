import avatar from '../assets/images/contact-us-img.jpg';
import course1 from '../assets/images/course-19-768x512.jpg';
import course2 from '../assets/images/course-18-768x512.jpg';
import course3 from '../assets/images/course-20-768x512.jpg';
import course4 from '../assets/images/course-13-5-768x512.jpg';
import course5 from '../assets/images/placeholder-image.jpg';
import course6 from '../assets/images/course-18-768x512.jpg';

const courseData = [
  {
    id: 1,
    title: "Introduction to UI/UX Design",
    lessons: "10+ Lessons",
    duration: "8hr 20min",
    price: "$250",
    oldPrice: "$79.99",
    rating: 4,
    reviews: 25,
    instructor: "John Doe",
    courseImage: course1,
    avatar: avatar,
  },
  {
    id: 2,
    title: "Advanced React Development",
    lessons: "15+ Lessons",
    duration: "12hr 45min",
    price: "$300",
    oldPrice: "$99.00",
    rating: 5,
    reviews: 40,
    instructor: "Jane Smith",
    courseImage: course2,
    avatar: avatar,
  },
  {
    id: 3,
    title: "Data Science Essentials",
    lessons: "20+ Lessons",
    duration: "15hr 10min",
    price: "$400",
    oldPrice: "$150.00",
    rating: 4,
    reviews: 30,
    instructor: "Alice Johnson",
    courseImage: course3,
    avatar: avatar,
  },
  {
    id: 4,
    title: "Web Development Bootcamp",
    lessons: "25+ Lessons",
    duration: "20hr 5min",
    price: "$350",
    oldPrice: "$120.00",
    rating: 3,
    reviews: 35,
    instructor: "Bob Brown",
    courseImage: course4,
    avatar: avatar,
  },
  {
    id: 5,
    title: "Machine Learning Basics",
    lessons: "18+ Lessons",
    duration: "14hr 30min",
    price: "$450",
    oldPrice: "$180.00",
    rating: 5,
    reviews: 45,
    instructor: "Charlie Green",
    courseImage: course5,
    avatar: avatar,
  },
  {
    id: 6,
    title: "Cybersecurity Fundamentals",
    lessons: "22+ Lessons",
    duration: "18hr 40min",
    price: "$500",
    oldPrice: "$200.00",
    rating: 4,
    reviews: 50,
    instructor: "Dave White",
    courseImage: course6,
    avatar: avatar,
  },
];

export default courseData;