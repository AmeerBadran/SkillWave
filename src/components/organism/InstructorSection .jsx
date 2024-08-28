import career from '../../assets/images/career.png';
import BouncingImage from '../atoms/BouncingImage';
import { FaUserTie, FaCertificate, FaChalkboardTeacher, FaCloud } from 'react-icons/fa'; // استيراد الأيقونات من react-icons
import FeatureCard from '../atoms/FeatureCard';

const InstructorSection = () => {
  return (
    <div className="grid grid-cols-1 2md:grid-cols-2 max-w-[1300px] mx-auto gap-8 items-center p-8 rounded-lg my-20">
      {/* Image Section */}
      <div className="ml-4 justify-self-center">
        <BouncingImage image={career} />
      </div>

      {/* Text Section */}
      <div className=" justify-self-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Master the Skills to Advance Your Career
        </h2>
        <div className='-mt-2 mb-5 h-1 rounded-full w-1/5 bg-gradient-to-r from-base-color to-second-color'></div>
        <p className="text-gray-600 mb-6">
          Join our expert instructor, [Instructor Name], as they guide you
          through top-notch courses designed to take your skills to the next
          level. Whether you are just starting out or looking to refine your
          expertise, we have the right course for you.
        </p>

        <div className="grid 2xmobile:grid-cols-2 gap-6">
          <FeatureCard
            icon={<FaUserTie />}
            iconBgColor="bg-purple-200"
            iconColor="text-purple-600"
            text="Expert Instructor"
          />
          <FeatureCard
            icon={<FaCertificate />}
            iconBgColor="bg-yellow-200"
            iconColor="text-yellow-600"
            text="100+ Certification Courses"
          />
          <FeatureCard
            icon={<FaChalkboardTeacher />}
            iconBgColor="bg-blue-200"
            iconColor="text-blue-600"
            text="Engaging Content"
          />
          <FeatureCard
            icon={<FaCloud />}
            iconBgColor="bg-green-200"
            iconColor="text-green-600"
            text="Latest in Tech"
          />
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
