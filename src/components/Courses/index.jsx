import React from "react";

import Card from "./../UI/Card/Card";
import './style.scss'
const index = () => {
  return (
    <div className="course">
      <div className="container">
        <div className="course__wrapper">
          <h1 className="cousrce__title">
            Featured <span>Course</span>
          </h1>
          <p className="course__about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do
            eiusmod temporidunt ut labore veniam...
          </p>

          <div className="course__cards">
            {"123456".split("").map((e) => {
              return <Card />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
