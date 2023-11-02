import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Breadcrumb } from "antd";
import useStd from "../../service/students/useStd";
import "./style.scss";

const index = () => {

  const [student, setStudent] = useState([]);
  const [buyurtmachilar, setBuyurtmachilar] = useState([]);
  const [xizmatlar, setXizmatlar] = useState([]);
  const [kurslar, setKurslar] = useState([]);

  const std = () => {
    useStd
      .getStudent()
      .then((res) => {
        if (res.status === 200) {
          setCurrent(res?.data);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    std();
  }, []);

  console.log(student);
  return (
    <>
      <div className="ssss1">
        <div className="main__up">
          <Breadcrumb
            items={[
              {
                title: (
                  <Link to="/dashboard" className="text-[#000] ">
                    Bosh sahifa{" "}
                  </Link>
                ),
              },
            ]}
          />
        </div>
        <div className="down1 ">
          <div className="d-cards">
            <div className="d-card card1">
              <h3>O'quvchilar</h3>

              <div className="count card1">
                <p>1</p>
                <i className="bx bxs-user-rectangle"></i>
              </div>
            </div>

            <div className="d-card card2">
              <h3>Yangi o'quvchilar</h3>

              <div className="count card2">
                <p>1</p>
                <i className="bx bx-user-check"></i>
              </div>
            </div>

            <div className="d-card card3">
              <h3>O'qiydiganlar</h3>

              <div className="count card3">
                <p>1</p>
                <i className="bx bxs-user-check"></i>
              </div>
            </div>

            <div className="d-card card4">
              <h3>O'qimaydiganlar</h3>

              <div className="count card4">
                <p>1</p>
                <i className="bx bxs-user-x"></i>
              </div>
            </div>

            <div className="d-card card5">
              <h3>Buyurtmachilar</h3>

              <div className="count card5">
                <p>1</p>
                <i className="bx bx-child"></i>
              </div>
            </div>

            <div className="d-card card6">
              <h3>Xizmatlar</h3>

              <div className="count card6">
                <p>1</p>
                <i className="bx bx-taxi"></i>
              </div>
            </div>

            <div className="d-card card7">
              <h3>Kurslar</h3>

              <div className="count card7">
                <p>1</p>
                <i className="bx bxs-book-open"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
