import React from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";

import Logo from "../../assets/images/logoo.png";
function Navbar() {
  return (
    <div className="flex navBar">
      <div className="flex navBarOne">
        <div className="icon">
          <SiConsul />
        </div>
        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrate /> Support
          </li>
          <li className="flex">
            <AiOutlineGlobal />
            Languages
          </li>
        </div>

        <div className="flex atb">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>

      <div className="flex navBarTwo">
        <div className="logoDiv">
          <img src={Logo} className="logo" alt="" />
        </div>

        <div className="navBarMenu">
          <ul className="menu flex">
            <li className="listitem">Home</li>
            <li className="listitem">About</li>
            <li className="listitem">Offers</li>
            <li className="listitem">Seats</li>
            <li className="listitem">Destinations</li>
          </ul>

          <button className="btn flex btnOne">Contact</button>

          {/* <button className="btn flex btnTwo">
                Contact
            </button> */}

        </div>
            <div className="toggleIcon icon">
                <CgMenuGridR/>
            </div>
      </div>
    </div>
  );
}

export default Navbar;
