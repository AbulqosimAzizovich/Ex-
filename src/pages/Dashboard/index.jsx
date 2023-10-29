import React from "react";
import "./style.scss";

const index = () => {
  return (
    <>
      <div className="ssss">
        <header className="flex items-center justify-between h-[80px] px-[50px] head">
          <a href="#">Logo</a>

          <div className="flex items-center gap-5 login">
            <button className="flex items-center">
              <i className="bx bx-menu text-[30px]"></i>
            </button>
            <div className="flex items-center gap-1 user">
              <i className="bx bxs-user-circle text-[30px]"></i>
              <p>User Name</p>
            </div>
          </div>
        </header>
        <div className="down ">
          <div className="sidebar">
            <ul>
              <li>
                <a href="#">
                  <i className="bx bxs-home text-[24px] text-[#1b2336]"></i>
                  <p>Dashboard</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bx-child text-[24px] text-[#1b2336]"></i>
                  <p>O'quvchilar</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxs-book-alt text-[24px] text-[#1b2336]"></i>
                  <p>Kurslar</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxs-user-voice text-[24px] text-[#1b2336]"></i>
                  <p>Buyurtmachilar</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxs-taxi text-[24px] text-[#1b2336]"></i>
                  <p>Xizmatlar</p>
                </a>
              </li>
            </ul>
          </div>
          <main className="bg-[#000]">
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
          </main>
        </div>
      </div>
    </>
  );
};

export default index;
