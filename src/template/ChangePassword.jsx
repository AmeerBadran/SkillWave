import { useFormik } from 'formik';

const ChangePassword = () => {
  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission here
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-6 mx-auto bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Change Password</h2>

      <div className="mb-4">
        <label htmlFor="currentPassword" className="block text-gray-700">Current Password</label>
        <input
          id="currentPassword"
          name="currentPassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.currentPassword}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="newPassword" className="block text-gray-700">New Password</label>
        <input
          id="newPassword"
          name="newPassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.newPassword}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-gray-700">Re-type New Password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <button type="submit" className="bg-base-color hover:bg-second-color text-white py-2 px-4 rounded-md">Reset Password</button>
    </form>
  );
};

export default ChangePassword;
