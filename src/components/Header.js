import React from "react";

const Header = ({ enterKeyPressed, handleUnitsClick }) => {
  return (
    <div className="section section__inputs">
      <input
        onKeyDown={enterKeyPressed}
        type="text"
        name="city"
        placeholder="Enter city"
      />
      <button onClick={(e) => handleUnitsClick(e)}>°F</button>
    </div>
  );
};

export default Header;
