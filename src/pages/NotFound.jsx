import NotFoundImgae from "../assets/images/404-error-img.png"
import AuthButton from "../components/atoms/AuthBotton";
import { FiArrowUpRight } from "react-icons/fi";
const NotFound = () => {
  return (
    <div className="bg-not-found-bg-404 h-screen w-screen bg-no-repeat bg-center object-cover flex justify-center items-center">
      <div className="flex flex-col text-center gap-7">
        <img src={NotFoundImgae} alt="Not Found Image 404" className="" />
        <h1 data-aos="fade-up" className="mt-10 text-5xl font-black text-[#0E384C]"><span className="text-[#FF5364]">Oops!</span> Page Not Found</h1>
        <p data-aos="fade-up" className="font-normal text-[#94afbb]">The page you are looking for does not exist</p>
        <div data-aos="fade-up" className="mx-auto">
          <AuthButton label="Back To Home Page" icon={FiArrowUpRight} roundedPosition="full" bgType="rose" />
        </div>
      </div>

    </div>
  );
};

export default NotFound;