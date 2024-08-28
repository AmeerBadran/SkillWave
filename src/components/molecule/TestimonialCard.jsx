

/* eslint-disable react/prop-types */

import RenderStars from "../atoms/renderStars";

const TestimonialCard = ({ image, name, title, review, rating }) => {
  return (
    <div className='pb-10 w-full px-2 h-full justify-self-center'>
      <div className="relative flex flex-col w-full rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none border p-4 h-full">
        <div className="relative flex flex-col xmobile:flex-row items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
          <img
            src={image}
            alt={name}
            className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
          />
          <div className="flex w-full flex-col xmobile:flex-row text-center xmobile:text-start gap-0.5 justify-between items-center">
            <div className=" items-center">
              <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {name}
              </h5>

              <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                {title}
              </p>

            </div>
            <div className="flex items-center gap-0 5">
              <RenderStars ratingNumber={rating} />
            </div>
          </div>
        </div>
        <div className="p-0 mb-6">
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {review}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;