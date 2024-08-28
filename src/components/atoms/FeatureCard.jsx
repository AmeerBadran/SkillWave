/* eslint-disable react/prop-types */
const FeatureCard = ({ icon, iconBgColor, iconColor, text }) => {
  return (
    <div className="flex flex-col items-start space-x-2 p-5 gap-4 border border-gray-200 shadow hover:shadow-lg rounded-lg hover:-mt-2 hover:mb-2 transition-all duration-500">
      <span className={`shadow-md p-2 rounded-md border ${iconBgColor}`}>
        <span className={`${iconColor} w-6 h-6`}>{icon}</span>
      </span>
      <span className="text-gray-600">{text}</span>
    </div>
  );
};

export default FeatureCard;
