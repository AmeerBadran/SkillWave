import mainLogo from "../../assets/images/projectMainLogo.png";
import { IoMdPersonAdd, IoMdClose } from "react-icons/io";
import { IoLogIn } from "react-icons/io5";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import NavLinks from "../atoms/NavLink";
import AuthButton from "../atoms/AuthBotton";
import user1 from "../../assets/images/user1.jpg"
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";

function Navbar() {
  const [isHalfScreen, setIsHalfScreen] = useState(window.innerWidth > 950);
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [accessToken, setAccessToken] = useState(true);
  const openImageDropdown = () => {
    setOpenDropdown(!openDropdown)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsHalfScreen(window.innerWidth > 950);
      if (isHalfScreen !== window.innerWidth > 950) {
        setOpenNav(false);
        setOpenDropdown(false)
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isHalfScreen]);

  const handleNavButton = () => {
    setOpenNav(!openNav);
    console.log('sdg')
  };

  return (
    <div className={`fixed w-full top-0 z-50 ${scrolled ? 'bg-white' : 'bg-[#FFFFFF00]'} transition-all duration-500`}>
      <header
        className={`max-w-[1300px] mx-auto flex items-center justify-between h-20 px-4 relative`}>
        <Link to="/">
          <img src={mainLogo} alt="Logo" className="w-40 min-w-24" />
        </Link>
        {isHalfScreen ? (
          <div className="flex w-full justify-between">
            <ul className="flex flex-1 gap-6 slg:gap-8 xl:gap-14 justify-center items-center p-4">
              <NavLinks linksLayout={"fullPage"} bgColor={'light'} />
            </ul>
            <div className="flex gap-4 items-center">
              {!accessToken ? (
                <>
                  <AuthButton
                    label="LogIn"
                    icon={IoLogIn}
                    bgType="blue"
                    to="logIn"
                  />
                  <AuthButton
                    label="SignUp"
                    icon={IoMdPersonAdd}
                    bgType="yellow"
                    to="signUp"
                  />
                </>
              ) : (
                <div>
                  <button type="button" onClick={openImageDropdown} className="relative"><img src={user1} alt="User dropdown" className="w-12 h-12 rounded-full relative border-4" /></button>
                  <div className={` absolute z-[100] bg-white divide-y divide-gray-200 rounded-lg shadow w-44 right-5 ${openDropdown ? 'block' : 'hidden'}`}>
                    <div className="px-4 py-3 text-sm text-gray-900 ">
                      <div>Bonnie Green</div>
                      <div className="font-medium truncate">name@flowbite.com</div>
                    </div>
                    <ul className="py-2 text-sm text-gray-700 " aria-labelledby="avatarButton">
                      <li>
                        <Link to='profile/myProfile' className="px-4 py-2 hover:bg-gray-100 flex gap-2 items-center"><CgProfile />Profile</Link>
                      </li>
                      <li>
                        <button className="px-4 py-2 hover:bg-gray-100 w-full text-start text-red-600 flex gap-2 items-center"><MdLogout />Log Out</button>
                      </li>
                    </ul>
                  </div>
                </div>
              )}


            </div>
          </div>
        ) : (
          <button type="button" onClick={handleNavButton} className="flex justify-center items-center w-10 h-10 min-w-10 rounded-md bg-base-color">
            {!openNav ? <FaBars className="text-white text-2xl" /> : <IoMdClose className="text-white text-3xl" />}
          </button>
        )}
        <div
          className={`absolute bg-white right-2 left-2 z-50 rounded-md p-5 border-2 border-base-color transition-all duration-300 ${openNav && !isHalfScreen ? "top-24 opacity-100" : "-top-96 opacity-0"}`}>
          <div className="flex flex-col w-full justify-between">
            <ul className="flex flex-col flex-1 gap-4 justify-start items-start w-full">
              <NavLinks linksLayout={"halfPage"} bgColor={'dark'} handleNavButton={handleNavButton} />
            </ul>
            <div className="flex gap-4 mt-5 flex-col xmobile:flex-row">
              {!accessToken ? (
                <>
                  <AuthButton
                    label="LogIn"
                    icon={IoLogIn}
                    bgType="blue"
                    to="logIn"
                  />
                  <AuthButton
                    label="SignUp"
                    icon={IoMdPersonAdd}
                    bgType="yellow"
                    to="signUp"
                  />
                </>
              ) : (
                <div>
                  <button type="button" onClick={openImageDropdown} className="relative"><img src={user1} alt="User dropdown" className="w-12 h-12 rounded-full relative border-4" /></button>
                  <div className={` absolute z-[100] bg-white divide-y divide-gray-200 rounded-lg shadow w-44 left-7 ${openDropdown ? 'block' : 'hidden'}`}>
                    <div className="px-4 py-3 text-sm text-gray-900 ">
                      <div>Bonnie Green</div>
                      <div className="font-medium truncate">name@flowbite.com</div>
                    </div>
                    <ul className="py-2 text-sm text-gray-700 " aria-labelledby="avatarButton">
                      <li>
                        <Link to='profile' className="block px-4 py-2 hover:bg-gray-100 ">Profile</Link>
                      </li>
                      <li>
                        <button className="block px-4 py-2 hover:bg-gray-100 w-full text-start text-red-600">Log Out</button>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div >
      </header >
    </div >
  );
}

export default Navbar;
