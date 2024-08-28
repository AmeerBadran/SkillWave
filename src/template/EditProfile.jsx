import { useEffect, useState } from 'react';
import { useFormik } from 'formik';

import { IoMdCloudUpload } from 'react-icons/io';

import avatarPreview2 from '../assets/images/user1.jpg'
const EditProfile = () => {
  const [avatarPreview, setAvatarPreview] = useState('');
  const [ourAvatar, setOurAvatar] = useState('');
  const formik = useFormik({
    initialValues: {
      username: 'Eugene Andre',
      phoneNumber: '90154-91036',
      designation: 'Web Development',
      avatar: null,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  useEffect(() => {
    if (!avatarPreview) {
      setOurAvatar(avatarPreview2);
    } else {
      setOurAvatar(avatarPreview);
    }
  }, [avatarPreview])


  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      formik.setFieldValue('avatar', file);

      // Update the avatar preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className="p-6 mx-auto bg-white rounded-lg ">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <div className="mb-4 border-b pb-4">
        <label className="block text-gray-700">Your Avatar</label>
        <div className="flex items-center space-x-4 ">
          <img
            src={ourAvatar}
            alt="Avatar Preview"
            className="w-20 h-20 rounded-full my-4 object-cover  border-4 border-base-color"
          />
          <label
            htmlFor="avatar"
            className="cursor-pointer bg-base-color w-12 h-12 flex justify-center items-center hover:bg-second-color text-white  rounded-md transition-all duration-300"
          >
            <IoMdCloudUpload className='text-2xl' />
          </label>
          <input
            id="avatar"
            name="avatar"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={handleAvatarChange}
            className="hidden"
          />
        </div>
        <p className="text-gray-500 mt-2">PNG or JPG no bigger than 800px width and height</p>
      </div>

      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700">User Name</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number</label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="designation" className="block text-gray-700">Designation</label>
        <input
          id="designation"
          name="designation"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.designation}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <button type="submit" className=" bg-base-color hover:bg-second-color text-white py-2 px-4 rounded-md transition-all duration-300">Update Profile</button>
    </form>
  );
};

export default EditProfile;
