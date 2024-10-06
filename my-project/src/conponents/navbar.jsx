import logo from "../assets/kevinRushLogo.png";
import {FaLinkedin}from "react-icons/fa";
import {FaGithub}from "react-icons/fa";
// import {FaSquaretwitter}from "react-icons/fa6";
import {FaInstagram}from "react-icons/fa";
const navbar = () => {
  return (
  
      <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
       <img className="mx-2 w-10" src={logo} alt="logo"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <FaLinkedin/>
          <FaGithub/>
         { /* <FaSquaretwitter/> */}
          <FaInstagram/>
        </div>
      </nav>
    
  );
};

export default navbar;