import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PageHeader from '../components/molecule/PageHeader';

// Arrays for months, days, and years
const months = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
const years = Array.from({ length: 20 }, (_, i) => String(new Date().getFullYear() + i));

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');

  const initialValues = {
    cardNumber: '',
    month: '',
    year: '',
    cvv: '',
    nameOnCard: '',
    rememberCard: false,
  };

  const validationSchema = Yup.object({
    cardNumber: Yup.string()
      .required('Card number is required')
      .matches(/^\d{16}$/, 'Card number must be 16 digits'),
    month: Yup.string().required('Month is required'),
    year: Yup.string().required('Year is required'),
    cvv: Yup.string()
      .required('CVV code is required')
      .matches(/^\d{3,4}$/, 'CVV code must be 3 or 4 digits'),
    nameOnCard: Yup.string().required('Name on card is required'),
  });

  const handleSubmit = (values) => {
    console.log('Payment Info Submitted', values);
  };

  return (
    <div className="bg-white">
      <PageHeader
        title="Check Out"
        breadcrumbText="CheckOut"
        bgClass=""
        overlayColor="bg-gray-900 bg-opacity-20"
        titleColor="text-base-color"
        breadcrumbColor="text-second-color"
        arrowColor="text-base-color"
        customTitleClasses="text-5xl 2xmobile:text-7xl"
      />
      <div className="max-w-[1300px] mx-auto p-6 bg-white shadow-md rounded-md  mb-20">
        <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4 flex items-center gap-6">
              <label className="block text-sm font-medium text-gray-700">
                <Field
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="mr-2"
                />
                Credit or Debit card
              </label>
              <label className="block text-sm font-medium text-gray-700">
                <Field
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={() => setPaymentMethod('paypal')}
                  className="mr-2"
                />
                PayPal
              </label>
            </div>

            
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Card Number
                  </label>
                  <Field
                    type="text"
                    name="cardNumber"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="XXXX XXXX XXXX XXXX"
                  />
                  <ErrorMessage name="cardNumber" component="div" className="text-red-500 text-sm" />
                </div>

                <div className="flex mb-4">
                  <div className="w-1/3 mr-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Month
                    </label>
                    <Field
                      as="select"
                      name="month"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Month</option>
                      {months.map((month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage name="month" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="w-1/3 mx-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Year
                    </label>
                    <Field
                      as="select"
                      name="year"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Year</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage name="year" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="w-1/3 ml-2">
                    <label className="block text-sm font-medium text-gray-700">
                      CVV Code
                    </label>
                    <Field
                      type="text"
                      name="cvv"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="XXXX"
                    />
                    <ErrorMessage name="cvv" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Name on Card
                  </label>
                  <Field
                    type="text"
                    name="nameOnCard"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Address"
                  />
                  <ErrorMessage name="nameOnCard" component="div" className="text-red-500 text-sm" />
                </div>

                <div className="flex items-center mb-4">
                  <Field
                    type="checkbox"
                    name="rememberCard"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-900">
                    Remember this card
                  </label>
                </div>
              </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-base-color text-white font-semibold rounded-md shadow-sm hover:bg-second-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Make a Payment
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default PaymentMethod;
