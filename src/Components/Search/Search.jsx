import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";

function Search() {
  return (
    <div className="search container section">
      <div className="sectionContainer grid">
        <div className="btns flex">
          <div className="singleBtn">
            <span>Economy</span>
          </div>
          <div className="singleBtn">
            <span>Business Class</span>
          </div>
          <div className="singleBtn">
            <span>First Class</span>
          </div>
        </div>

        <div className="searchInputs flex">
          {/* Single Input */}
          <div className="singleInput flex">
            <div className="IconDiv">
              <HiOutlineLocationMarker className="icon" />
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder="Where do you want to go?" />
            </div>
          </div>

          {/* Single Input */}
          <div className="singleInput flex">
            <div className="IconDiv">
              <RiAccountPinCircleLine className="icon" />
            </div>
            <div className="texts">
              <h4>Travelers</h4>
              <input type="text" placeholder="Add Guests" />
            </div>
          </div>

          {/* Single Input */}
          <div className="singleInput flex">
            <div className="IconDiv">
              <SlCalender className="icon" />
            </div>
            <div className="texts">
              <h4>Check In</h4>
              <input type="text" placeholder="Add Dates" />
            </div>
          </div>

          <button className="btn flex">Search Flight</button>
        </div>
      </div>
    </div>
  );
}

export default Search;
