import React, {useState} from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";

import Logo from "../../assets/images/logoo.png";
function Navbar() {

    //Hide the NavBar on Smaller Screen Widths
    const [active, setActive] = useState('navBarMenu');

    const showNavBar = () => {
        setActive('navBarMenu showNavBar')
    }
    const removeNavBar = () => {
        setActive('navBarMenu')
    }


  return (
    <div className="flex navBar">
      <div className="flex navBarOne">
        <div className="icon">
          <SiConsul />
        </div>
        <div className="flex help">
          <li className="flex box">
            <BsPhoneVibrate />
            <span style={{fontSize: 11}}>Support</span>
          </li>
          <li className="flex box">
            <AiOutlineGlobal />
            <span style={{fontSize: 11}}>Languages</span>
          </li>
        </div>

        <div className="flex atb">
          <span className="signBtn">Sign In</span>
          <span className="signBtn">Sign Out</span>
        </div>
      </div>

      <div className="flex navBarTwo">
        <div className="logoDiv">
          <img src={Logo} className="logo" alt="" />
        </div>

        <div className={`flex column ${active}`}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listitem">Home</li>
            <li onClick={removeNavBar} className="listitem">About</li>
            <li onClick={removeNavBar} className="listitem">Offers</li>
            <li onClick={removeNavBar} className="listitem">Seats</li>
            <li onClick={removeNavBar} className="listitem">Destinations</li>
          </ul>

          <button onClick={removeNavBar}className="btn flex btnOne">Contact</button>

        </div>
          <button className="btn flex btnTwo">
                Contact
            </button> 
            <div onClick={showNavBar} className="toggleIcon">
                <CgMenuGridR className="icon"/>
            </div>
      </div>
    </div>
  );
}

export default Navbar;
