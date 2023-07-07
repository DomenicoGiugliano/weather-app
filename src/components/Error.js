import React from "react";

const Error = ({ enterKeyPressed }) => {
  return (
    <div className="app" style={{ backgroundColor: "whitesmoke" }}>
      <div className="overlay">
        <div className="error">
          <div className="section section__inputs">
            <input
              onKeyDown={enterKeyPressed}
              type="text"
              name="city"
              placeholder="Enter city"
            />
            <button>°F</button>
          </div>
          <h1>City not found</h1>
        </div>
      </div>
    </div>
  );
};

export default Error;
