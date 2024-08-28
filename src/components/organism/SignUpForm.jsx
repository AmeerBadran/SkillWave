import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';

const options = ['School Student', 'University Student'];

const SignUpForm = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const initialValues = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    singleOption: '',
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
    singleOption: Yup.string().required('Required'),
  });

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ getFieldProps, isSubmitting, setFieldValue, touched, errors }) => (
        <Form className="flex flex-col gap-4">
          <div>
            <label htmlFor="fullName" className="block mb-2 font-medium">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              {...getFieldProps('fullName')}
              className="w-full min-h-12 p-3 pl-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-base-color"
            />
            <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...getFieldProps('email')}
              className="w-full min-h-12 p-3 pl-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-base-color"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="password" className="block mb-2 font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                {...getFieldProps('password')}
                className="w-full min-h-12 p-3 pl-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-base-color"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block mb-2 font-medium">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                {...getFieldProps('confirmPassword')}
                className="w-full min-h-12 p-3 pl-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-base-color"
              />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
            </div>
          </div>

          <div className="mt-3">
            <label htmlFor="singleOption" className="block mb-2 font-medium">
              Add a new option if the desired one is not listed.
            </label>
            <Autocomplete
              id="singleOption"
              options={options}
              getOptionLabel={(option) => option}
              value={selectedOption}
              onChange={(event, newValue) => {
                setSelectedOption(newValue || '');
                setFieldValue('singleOption', newValue || '');
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  placeholder="Choose..."
                  error={touched.singleOption && Boolean(errors.singleOption)}
                  helperText={touched.singleOption && errors.singleOption}
                />
              )}
            />
          </div>

          <div className="flex justify-between text-center mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-base-color text-white py-3 font-semibold rounded-md hover:bg-second-color transition-all duration-300"
            >
              Sign In
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
