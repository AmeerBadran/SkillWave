/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const AuthButton = ({ label, icon: Icon, bgType, onClick, to }) => {
  const styles = {
    yellow: {
      bgClass: "bg-yellow-400",
      textColor: "text-black hover:text-second-color"
    },
    blue: {
      bgClass: "bg-second-color",
      textColor: "text-white hover:text-second-color"
    },
    rose: {
      bgClass: "bg-rose-400",
      textColor: "text-white hover:text-second-color"
    }

  };

  const { bgClass, textColor } = styles[bgType] || {};

  const buttonContent = (
    <>
      <div className={`absolute left-0 -bottom-1 ${bgClass} w-full h-[calc(100%+20px)] rounded-xl group-hover:h-0 transition-all duration-700`} />
      <p className="z-10">{label}</p>
      <Icon className="w-5 h-5 min-w-5 min-h-5 z-10" />
    </>
  );

  const baseClasses = `group flex h-12 gap-5 items-center bg-white px-8 font-semibold rounded-xl relative duration-300 border hover:border-second-color hover:text-second-color ${textColor} overflow-hidden`;

  const linkStyles = {
    default: `${baseClasses} border-second-color text-white`,
    signUp: `${baseClasses} border-yellow-400 hover:border-second-color`
  };

  if (label === "SignUp" || label === "LogIn" || label === "Back To Home Page") {
    return (
      <Link to={to} className={label === "SignUp" ? linkStyles.signUp : linkStyles.default}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={`${baseClasses} py-[10px] bg-second-color flex justify-center `}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
};

export default AuthButton;
