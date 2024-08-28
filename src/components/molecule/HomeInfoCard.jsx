/* eslint-disable react/prop-types */
import CountUp from 'react-countup';

export default function HomeInfoCard({ imgSrc, title, description, titleColor }) {
  return (
    <div className='flex gap-3 py-4 px-3 shadow-md bg-white hover:shadow-2xl hover:shadow-[#00000044] transition-all duration-500 z-10 rounded-md hover:-mt-5 hover:mb-5'>
      <img src={imgSrc} className='h-20 w-20 my-2' />
      <div className='flex flex-col justify-center'>
        <h1 className='text-2xl font-black' style={{ color: titleColor }}>
          <CountUp end={parseInt(title)} duration={4} />
        </h1>
        <p>{description}</p>
      </div>
    </div>
  );
}