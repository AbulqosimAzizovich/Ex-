import React, { useEffect, useState } from "react";
import useCourse from "../../service/course/useCourse";
import Card from "../UI/Card/Card";
import "./style.scss";

const index = () => {
  const [current, setCurrent] = useState([]);

  const courses = () => {
    useCourse
      .getCourse()
      .then((res) => {
        if (res.status === 200) {
          setCurrent(res?.data?.courses);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  useEffect(() => {
    courses();
  }, []);

  console.log(current);
  return (
    <div className="course" id="course">
      <div className="container">
        <div className="course__wrapper">
          <h1 className="cousrce__title">
            Featured <span>Course</span>
          </h1>
          <p className="course__about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />{" "}
            do eiusmod temporidunt ut labore veniam...
          </p>

          <div className="course__cards">
            {current.length &&
              current.map((e) => {
                return (
                  <>
                    <Card
                      title={e.title}
                      desc={e.description}
                      image={e.image}
                    />
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
