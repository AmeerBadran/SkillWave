import { useState } from "react";
import ChangePassword from "./ChangePassword";
import EditProfile from "./EditProfile";

export default function Settings() {
  const [activeTab, setActiveTab] = useState('editProfile');

  return (
    <div className="p-6 mx-auto bg-white rounded-lg border col-span-3 w-full ml-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="flex space-x-4 mb-6">
        <button
          className={`py-2 px-4 ${activeTab === 'editProfile' ? 'text-base-color border-b-2 border-base-color' : 'text-gray-500'}`}
          onClick={() => setActiveTab('editProfile')}
        >
          Edit Profile
        </button>
        <button
          className={`py-2 px-4 ${activeTab === 'changePassword' ? 'text-base-color border-b-2 border-base-color' : 'text-gray-500'}`}
          onClick={() => setActiveTab('changePassword')}
        >
          Change Password
        </button>
      </div>

      {activeTab === 'editProfile' && <EditProfile />}
      {activeTab === 'changePassword' && <ChangePassword />}
    </div>
  )
}
