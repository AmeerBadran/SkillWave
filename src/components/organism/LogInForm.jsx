import { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { RiEyeCloseFill } from 'react-icons/ri';
import { FaRegEye } from 'react-icons/fa';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleSubmit = (values) => {
    console.log(values);
    // Handle form submission
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ getFieldProps, isSubmitting }) => (
        <Form className="mt-6 flex flex-col gap-6">
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full min-h-12 p-3 pl-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-base-color"
              {...getFieldProps('email')}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div>
            <label className="block mt-4 mb-2 font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full p-3 pl-5 min-h-12 border rounded-md focus:outline-none focus:ring-2 focus:ring-base-color"
                {...getFieldProps('password')}
              />
              <button
                type="button"
                className="absolute right-2 top-2 w-10 h-10 text-2xl text-base-color"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaRegEye /> : <RiEyeCloseFill />}
              </button>
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="flex flex-col items-start gap-7 mt-4">
            <button
              type="button"
              className="text-sm text-black font-bold hover:underline hover:text-base-color"
            >
              Forgot Password?
            </button>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                {...getFieldProps('rememberMe')}
              />
              <span className="ml-2 text-sm">Remember me</span>
            </label>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-base-color text-white py-3 font-semibold rounded-md hover:bg-second-color transition-all duration-300"
          >
            Sign In
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
