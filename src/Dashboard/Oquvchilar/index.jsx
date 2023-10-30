import React from "react";
import { Breadcrumb, Space, Table, Tag } from "antd";
import { Link } from "react-router-dom";
import "./style.scss";

const columns = [
  {
    title: "#",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "F.I.Sh",
    dataIndex: "fish",
    key: "fish",
  },
  {
    title: "Telefon",
    dataIndex: "telefon",
    key: "telefon",
  },
  {
    title: "Kurs",
    dataIndex: "kurs",
    key: "kurs",
  },
  {
    title: "Ro'yxatdan o'tgan vaqt",
    dataIndex: "register",
    key: "register",
  },
  {
    title: "Holat",
    dataIndex: "holat",
    key: "x",
    render: () => <a>Active</a>,
  },
  {
    title: "Tahrirlash",
    dataIndex: "",
    key: "x",
    render: () => <a>Edit</a>,
  },
];

const data = [
  {
    key: 1,
    number: 1,
    fish: "Tohirova Shirin",
    telefon: "+998900666571",
    kurs: "Bootcamp Fountdation",
    register: "10.10.2023",
  },
  {
    key: 2,
    number: 2,
    fish: "John Doe",
    telefon: "+998200026639",
    kurs: "Bootcamp Fountdation",
    register: "10.10.2023",
  },
  {
    key: 3,
    number: 3,
    fish: "Elon Musk",
    telefon: "+998930016639",
    kurs: "Bootcamp Fountdation",
    register: "10.10.2023",
  },
  {
    key: 4,
    number: 4,
    fish: "George Sting",
    telefon: "+998993086639",
    kurs: "Bootcamp Fountdation",
    register: "10.10.2023",
  },
];

const index = () => {
  return (
    <div className="std">
      <div className="main__up">
        <Breadcrumb
          items={[
            {
              title: (
                <Link to="/dashboard" className="text-[#000] ">
                  Bosh sahifa
                </Link>
              ),
            },
            {
              title: (
                <Link to="/dashboard/oquvchilar" className="text-[#000] ">
                  O'quvchilar
                </Link>
              ),
            },
          ]}
        />
      </div>

      <div className="table">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default index;
