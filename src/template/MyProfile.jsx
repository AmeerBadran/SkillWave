import DashboardCard from "../components/atoms/DashboardCard";
import coursesData from "../constants/coursesData";

export default function MyProfile() {
  return (
    <div className=" col-span-3 w-full mx-auto ml-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-lg">
        {coursesData.map((course) => (
          <DashboardCard key={course.id} title={course.title} count={course.count} />
        ))}
      </div>
      <div className="bg-white p-6 rounded-lg divide-y border">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">My Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <div>
            <p className=" text-gray-900 font-semibold">User Name</p>
            <p className="text-lg text-gray-600">studentdemo</p>
          </div>
          <div>
            <p className=" text-gray-900 font-semibold">Email</p>
            <p className="text-lg text-gray-600">studentdemo@example.com</p>
          </div>
          <div>
            <p className=" text-gray-900 font-semibold">Phone Number</p>
            <p className="text-lg text-gray-600">90154-91036</p>
          </div>
        </div>
      </div>
    </div>
  )
}
