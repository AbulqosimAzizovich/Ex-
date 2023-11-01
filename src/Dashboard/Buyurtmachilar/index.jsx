import React from "react";
import { Link } from "react-router-dom";
import { Space, Table, Tag, Breadcrumb } from "antd";

import "./style.scss";
import moment from "moment";

const { Column, ColumnGroup } = Table;
const data = [
  {
    key: "1",
    number: "1",
    fish: "Brown",
    telephone: 32,
    address: "Web site yaratish",
    time: moment().format("YYYY-MM-DD HH:mm:ss"),
  },
  {
    key: "2",
    number: "2",
    fish: "Green",
    telephone: 42,
    address: "Web site yaratish",
    time: moment().format("YYYY-MM-DD HH:mm:ss"),
  },
  {
    key: "3",
    number: "3",
    fish: "Black",
    telephone: 32,
    address: "Web site yaratish",
    time: moment().format("YYYY-MM-DD HH:mm:ss"),
  },
];
const index = () => {
  return (
    <div className="buyurtmachilar">
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
                <Link to="/dashboard/buyurtmachilar" className="text-[#000] ">
                  Buyurtmachilar
                </Link>
              ),
            },
          ]}
        />
      </div>

      <Table dataSource={data}>
        <Column title="#" dataIndex="number" key="number" />
        <Column title="F.I.SH" dataIndex="fish" key="fish" />
        <Column title="Telefon" dataIndex="telephone" key="telephone" />
        <Column title="Xizmat" dataIndex="address" key="address" />
        <Column title="Yaratilgan vaqti" dataIndex="time" key="time" />
      </Table>
    </div>
  );
};

export default index;
