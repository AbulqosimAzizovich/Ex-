import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import "./style.scss";

const index = () => {
  return (
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

      <div className="down">
        <div className="sidebar">
          <ul>
            <li>
              <NavLink to="/dashboard" className="nav__link">
                <i className="bx bxs-home text-[24px] text-[#1b2336]"></i>
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/oquvchilar" className="nav__link">
                <i className="bx bx-child text-[24px] text-[#1b2336]"></i>
                <p>O'quvchilar</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/kurslar" className="nav__link">
                <i className="bx bxs-book-alt text-[24px] text-[#1b2336]"></i>
                <p>Kurslar</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/buyurtmachilar" className="nav__link">
                <i className="bx bxs-user-voice text-[24px] text-[#1b2336]"></i>
                <p>Buyurtmachilar</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/xizmatlar" className="nav__link">
                <i className="bx bxs-taxi text-[24px] text-[#1b2336]"></i>
                <p>Xizmatlar</p>
              </NavLink>
            </li>
          </ul>
        </div>

        <main className="">
          <div className="outlet">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default index;
