import React from "react";
import group from "../../assets/icons/LearnGroup.svg";
import Learn from "../../assets/icons/Learn";
import Graduate from "../../assets/icons/Graduate";
import Work from "../../assets/icons/Work";
import "./style.scss";

const index = () => {
  return (
    <section className="learnsection">
      <div className="container">
        <div className="learnsection-wrapper">
          <div className="learnBlur"></div>
          <img className="learnImg" src={group} alt="" />

          <h2 className="learnsection-wrapper-h2">
            Why <span className="h2-span">learn</span> with our courses?
          </h2>
          <p className="learnsection-wrapper-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temporidunt ut labore veniam...
          </p>
          <div className="learncardswrapper">
            <div className="learnCardOne">
              <Learn />
              <h3 className="learnCardOne-h3">01. Learn</h3>
              <p className="learnCardOne-p">
                Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                elit. Felis donec massa aliqua.
              </p>
            </div>
            <div className="learnCardTwo">
              <Graduate />
              <h3 className="learnCardTwo-h3">02. Graduate</h3>
              <p className="learnCardTwo-p">
                Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                elit. Felis donec massa aliqua.
              </p>
            </div>
            <div className="learnCardThree">
              <Work />
              <h3 className="learnCardThree-h3">03. Work</h3>
              <p className="learnCardThree-p">
                Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                elit. Felis donec massa aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
