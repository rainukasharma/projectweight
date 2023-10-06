import priyanka from "../assets/priyanka.jpg";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faTruck,
  faCircleExclamation,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const NavigationDrawer = ({ selectedButton }) => {
  return (
    <div className="w-1/4 h-full p-6 ">
      <div className="flex flex-row h-1/5 items-center">
        <img
          src={priyanka}
          alt="Priyanka"
          className="w-24 h-24 rounded-full m-3"
        />
        <span>
          <h4>Priyanka Chopra</h4>
          <p>priyankachopra@gmail.com</p>
        </span>
      </div>

      <div className="w-full flex flex-col items-start">
        <div className="p-3 flex justify-center flex-row rounded-lg w-full bg-[#6759FF] mb-4 ">
          <FontAwesomeIcon icon={faLocationDot} className="text-white" />
          <button
            className={`ml-8 text-black bg-transparent ${
              selectedButton === "ZoneTracker" ? "bg-[#6759FF] text-white" : ""
            } hover:bg-[#6759FF] hover:text-white focus:bg-[#6759FF] focus:text-white active:bg-[#6759FF] active:text-white`}
          >
            <Link to="ZoneTracker"> Zone Tracker </Link>
          </button>
        </div>
        <div className="p-3 flex justify-center flex-row mb-4">
          <FontAwesomeIcon icon={faTruck} />
          <button
            className={`ml-8 text-black bg-transparent ${
              selectedButton === "VehicleWeighting" ? "bg-[#6759FF] text-white" : ""
            } hover:bg-[#6759FF] hover:text-white focus:bg-[#6759FF] focus:text-white active:bg-[#6759FF] active:text-white`}
          >
            <Link to="VehicleWeighting">VehicleWeighting </Link>
          </button>
        </div>
        <div className="p-3 flex justify-center mb-4 flex-row">
          <FontAwesomeIcon icon={faUser} />
          <button
            className={`ml-8 text-black ${
              selectedButton === "UserTracker" ? "bg-[#6759FF] text-white" : ""
            }`}
          >
            <Link to="UserTracker">User Tracker </Link>
          </button>
        </div>
        <div className="p-3 flex justify-center mb-4 flex-row">
          <FontAwesomeIcon icon={faCircleExclamation} />
          <button
            className={`ml-8 text-black ${
              selectedButton === "Report" ? "bg-[#6759FF] text-white" : ""
            }`}
          >
            <Link to="Report">Report </Link>
          </button>
        </div>
        <div className="p-3 flex justify-center mb-4 flex-row ">
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className="text-red-500"
          />
          <button
            className={`ml-8 text-black ${
              selectedButton === "LogOut" ? "bg-[#6759FF] text-white" : ""
            }`}
          >
            <Link to="LogOut">LogOut </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationDrawer;
