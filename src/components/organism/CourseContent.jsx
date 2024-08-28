import { useState } from "react";
import lectureImage from "../../assets/svg/download.svg"
import { IoIosArrowDown } from "react-icons/io";
const CourseContent = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [index]: !prevOpenSections[index],
    }));
  };

  const lectures = [
    {
      section: "In which areas do you operate?",
      items: [
        { title: "Lecture1.1 Introduction to the User Experience Course", duration: "02:53" },
        { title: "Lecture1.2 Exercise: Your first design challenge", duration: "02:53" },
        { title: "Lecture1.3 How to solve the previous exercise", duration: "02:53" },
        { title: "Lecture1.4 How to use text layers effectively", duration: "02:53" }
      ]
    },
    {
      section: "The Brief",
      items: [
        { title: "Lecture1.1 Introduction to the User Experience Course", duration: "02:53" },
        { title: "Lecture1.2 Exercise: Your first design challenge", duration: "02:53" },
        { title: "Lecture1.3 How to solve the previous exercise", duration: "02:53" },
        { title: "Lecture1.4 How to use text layers effectively", duration: "02:53" },

      ]
    },
    {
      section: "Wireframing Low Fidelity",
      items: []
    },
    {
      section: "Type, Color & Icon Introduction",
      items: []
    }
  ];

  return (
    <div data-aos="fade-up" data-aos-duration="1200" className="max-w-4xl mx-auto p-8 bg-white shadow rounded-lg">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold text-base-color mb-4">Course Content</h2>
        <p className=" text-gray-500">92 Lectures 10:56:11</p>
      </div>

      {lectures.map((section, index) => {
        // Ensure each section has at least one item
        if (section.items.length === 0) {
          section.items = [{ title: "No Title", duration: "00:00" }];
        }

        return (
          <div key={index} className="mb-3">
            <div
              className="bg-purple-50 px-4 py-3 rounded-md text-purple-900 font-semibold cursor-pointer flex justify-between items-center"
              onClick={() => toggleSection(index)}
            >
              <span>{section.section}</span>
              <span className={`${openSections[index] ? 'rotate-180' : 'rotate-0'} transition-all duration-300`}>
                <IoIosArrowDown />
              </span>
            </div>

            <ul className={`transition-all duration-500 ease-in-out ${openSections[index] ? 'max-h-[750px] overflow-y-auto ' : 'max-h-0 overflow-hidden '}`}>
              {section.items.map((item, idx) => (
                <li key={idx} className="flex flex-col 2xmobile:flex-row justify-between items-center py-4 ml-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <span className="mr-4 text-orange-500 min-w-7"><img src={lectureImage} alt="Lecture" /></span>
                    <p className="text-gray-700 xmobile:text-base text-sm">{item.title}</p>
                  </div>
                  <div className="flex mobile:gap-5 mobile:mt-2 items-center text-sm text-gray-500">
                    <span className="mr-4 text-blue-600">Preview</span>
                    <span>{item.duration}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );

};

export default CourseContent;
