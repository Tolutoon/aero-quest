import React from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import Logo from '../../assets/images/logoo.png';
function Navbar() {
  return (
    <div className="flex navBar">
      <div className="flex navBarOne">
        <div>
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

        <div className="flex">
            <span>Sign In</span>
            <span>Sign Out</span>
        </div>
      </div>

      <div className="navBarTwo">
        <div className="logoDiv">
            <img src={Logo} className='Logo' alt=""/>
        </div>

        <div className="navBarmenu">
            <ul className="menu flex">
                <li>Home</li>
                <li>About</li>
                <li>Offers</li>
                <li>Seats</li>
                <li>Destinations</li>
            </ul>

            <button className="btn flex btnOne">
                Contact
            </button>

            <button className="btn flex btnTwo">
                Contact
            </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
