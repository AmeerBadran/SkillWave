
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { IoIosAddCircle, IoMdCloudUpload } from 'react-icons/io';

const EditCourse = () => {
  const [step, setStep] = useState(1);

  const initialData = {
    coverImage: '../assets/images/course-18-768x512.jpg',
    price: '100',
    description: 'This is a sample course description.',
    whatYoullLearn: ['Learn point 1', 'Learn point 2'],
    requirements: ['Requirement 1', 'Requirement 2'],
    sections: [
      { title: 'Section 1', videos: [], files: [] },
      { title: 'Section 2', videos: [], files: [] },
    ],
  };

  const [sections, setSections] = useState(initialData.sections || []);
  const [coverImagePreview, setCoverImagePreview] = useState(initialData.coverImage || '');

  // Formik with Yup validation
  const formik = useFormik({
    initialValues: {
      coverImage: initialData.coverImage || null,
      price: initialData.price || '',
      description: initialData.description || '',
      whatYoullLearn: initialData.whatYoullLearn || [''],
      requirements: initialData.requirements || [''],
    },
    validationSchema: Yup.object({
      price: Yup.number().required('Price is required').typeError('Price must be a number'),
      description: Yup.string().required('Description is required'),
      // Additional validation can be added here
    }),
    onSubmit: (values) => {
      const courseData = {
        generalInfo: values,
        sections,
      };
      console.log('Course data updated:', courseData);
      // Send updated courseData to backend API
    },
  });

  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      formik.setFieldValue('coverImage', file);

      // Update the cover image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle adding/removing "What you'll learn" and "Requirements" points
  const addPoint = (type) => {
    formik.setFieldValue(type, [...formik.values[type], '']);
  };

  const handlePointChange = (index, type, value) => {
    const updatedPoints = [...formik.values[type]];
    updatedPoints[index] = value;
    formik.setFieldValue(type, updatedPoints);
  };

  // Handle adding/removing sections
  const addSection = () => {
    setSections([...sections, { title: '', videos: [], files: [] }]);
  };

  const handleSectionChange = (index, value) => {
    const updatedSections = [...sections];
    updatedSections[index].title = value;
    setSections(updatedSections);
  };

  // Handle adding videos/files to sections
  const addMedia = (index, type, media) => {
    const updatedSections = [...sections];
    updatedSections[index][type].push(media);
    setSections(updatedSections);
  };

  return (
    <div className="col-span-3 w-full mx-auto p-6 bg-white rounded-lg ml-6 border">
      <form onSubmit={formik.handleSubmit} className="w-full mx-auto">
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Step 1: General Information</h2>
            <div className="mb-4 border-b pb-4">
              <label className="block text-gray-700">Course Cover Image</label>
              <div className="flex items-center space-x-4">
                <img
                  src={coverImagePreview}
                  alt="Cover Image Preview"
                  className="max-w-96 rounded-lg my-4 object-cover border-4 border-base-color"
                />
                <label
                  htmlFor="coverImage"
                  className="cursor-pointer bg-base-color w-12 h-12 flex justify-center items-center hover:bg-second-color text-white rounded-md transition-all duration-300"
                >
                  <IoMdCloudUpload className="text-2xl" />
                </label>
                <input
                  id="coverImage"
                  name="coverImage"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={handleCoverImageChange}
                  className="hidden"
                />
              </div>
              <p className="text-gray-500 mt-2">PNG or JPG no bigger than 800px width and height</p>
            </div>
            <input
              type="text"
              name="price"
              placeholder="Course Price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mb-4 block w-full px-4 py-2 border ${formik.touched.price && formik.errors.price ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
            {formik.touched.price && formik.errors.price ? (
              <div className="text-red-500 text-sm">{formik.errors.price}</div>
            ) : null}
            <textarea
              name="description"
              placeholder="Course Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mb-4 block w-full px-4 py-2 border ${formik.touched.description && formik.errors.description ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="text-red-500 text-sm">{formik.errors.description}</div>
            ) : null}
            <div className="mb-4">
              <h4 className="font-semibold mb-2">What you will learn</h4>
              {formik.values.whatYoullLearn.map((point, index) => (
                <input
                  key={index}
                  type="text"
                  value={point}
                  onChange={(e) => handlePointChange(index, 'whatYoullLearn', e.target.value)}
                  className="mb-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              ))}
              <button
                type="button"
                onClick={() => addPoint('whatYoullLearn')}
                className="text-indigo-600 flex items-center gap-1 hover:text-indigo-900 mt-2"
              >
                Add Another Point <IoIosAddCircle className="text-xl" />
              </button>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Requirements</h4>
              {formik.values.requirements.map((req, index) => (
                <input
                  key={index}
                  type="text"
                  value={req}
                  onChange={(e) => handlePointChange(index, 'requirements', e.target.value)}
                  className="mb-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              ))}
              <button
                type="button"
                onClick={() => addPoint('requirements')}
                className="text-indigo-600 flex items-center gap-1 hover:text-indigo-900 mt-2"
              >
                Add Another Requirement <IoIosAddCircle className="text-xl" />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Step 2: Add Sections</h2>
            {sections.map((section, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  placeholder={`Section ${index + 1} Title`}
                  value={section.title}
                  onChange={(e) => handleSectionChange(index, e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addSection}
              className="text-indigo-600 flex items-center gap-1 hover:text-indigo-900 mt-2"
            >
              Add Another Section <IoIosAddCircle className="text-xl" />
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Step 3: Add Content to Sections</h2>
            {sections.map((section, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-semibold mb-2">{section.title}</h4>
                <input
                  type="file"
                  className="mb-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                  onChange={(e) => addMedia(index, 'videos', e.target.files[0])}
                />
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-between mt-4">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
            >
              Back
            </button>
          )}
          {step < 3 && (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Next
            </button>
          )}
          {step === 3 && (
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
              Save
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default EditCourse;
