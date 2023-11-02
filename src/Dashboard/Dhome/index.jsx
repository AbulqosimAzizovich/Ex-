import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Breadcrumb } from "antd";
import useDhome from "../../service/dhome";
import "./style.scss";

const index = () => {
  const [current, setCurrent] = useState([]);
  const [course, setCourse] = useState([]);

  const dHome = () => {
    useDhome
      .getDhome()
      .then((res) => {
        if (res.status === 200) {
          setCurrent(res?.data?.summary);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    dHome();
  }, []);

  console.log(current);

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
                <p>{current?.student?.total}</p>
                <i className="bx bxs-user-rectangle"></i>
              </div>
            </div>

            <div className="d-card card2">
              <h3>Yangi o'quvchilar</h3>

              <div className="count card2">
                <p>{current?.student?.new}</p>
                <i className="bx bx-user-check"></i>
              </div>
            </div>

            <div className="d-card card3">
              <h3>O'qiydiganlar</h3>

              <div className="count card3">
                <p>{current?.student?.resolve}</p>
                <i className="bx bxs-user-check"></i>
              </div>
            </div>

            <div className="d-card card4">
              <h3>O'qimaydiganlar</h3>

              <div className="count card4">
                <p>{current?.student?.resolve}</p>
                <i className="bx bxs-user-x"></i>
              </div>
            </div>

            <div className="d-card card5">
              <h3>Buyurtmachilar</h3>

              <div className="count card5">
                <p>{current?.user?.total}</p>
                <i className="bx bx-child"></i>
              </div>
            </div>

            <div className="d-card card6">
              <h3>Xizmatlar</h3>

              <div className="count card6">
                <p>{current?.service?.total}</p>
                <i className="bx bx-taxi"></i>
              </div>
            </div>

            <div className="d-card card7">
              <h3>Kurslar</h3>

              <div className="count card7">
                <p>{current?.course?.total}</p>
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
