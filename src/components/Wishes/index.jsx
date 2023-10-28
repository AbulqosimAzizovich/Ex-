import React from "react";
import "./style.scss";

import iphone from "../../assets/images/iphone.png";
import icon from "../../assets/icons/polyglon.svg";

const index = () => {
  return (
    <section id="wishes">
      <div className="container">
        <div className="wrapper">
          <div className="all">
            <div className="image">
              <img src={iphone} alt="" />
            </div>

            <div className="texts">
              <div className="h_text">
                <p className="first">The number one factor in</p> <br />
                <p className="second">relevance drives out resistance.</p>
              </div>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla <br /> pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt <br /> mollit anim id est laborum.
              </p>
              <button className="wish">Learn More</button>
              <img className="icon" src={icon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
