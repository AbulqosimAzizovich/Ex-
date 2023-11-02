import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Space, Table, Tag, Breadcrumb } from "antd";
import useCustomers from "../../service/buyurtmachilar";
import moment from "moment";
import "./style.scss";

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
  const [current, setCurrent] = useState([]);

  const Customers = () => {
    useCustomers
      .getCustomers()
      .then((res) => {
        if (res.status === 200) {
          setCurrent(res?.data?.users);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    Customers();
  }, []);

  const token = localStorage.getItem("token");

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

      <div class="relative overflow-x-auto">
        {token ? (
          <>
            {" "}
            <table class="w-full text-sm text-left text-gray-500 ">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    #
                  </th>
                  <th scope="col" class="px-6 py-3">
                    F.I.Sh
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Telefon
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Xizmat
                  </th>

                  <th scope="col" class="px-6 py-3">
                    Ro'yxatdan o'tgan vaqti
                  </th>
                </tr>
              </thead>
              <tbody>
                {current.length &&
                  current.map((e, index) => {
                    return (
                      <>
                        <tr class="bg-white border-b">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            {index + 1}
                          </th>
                          <td class="px-6 py-4">{e?.fullName}</td>
                          <td class="px-6 py-4">{e?.phoneNumber}</td>
                          <td class="px-6 py-4">{e?.serviceId?.title}</td>
                          <td class="px-6 py-4">{e?.createdAt}</td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        ) : (
          <>
            <table class="w-full text-sm text-left text-gray-500 ">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    #
                  </th>
                  <th scope="col" class="px-6 py-3">
                    F.I.Sh
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Telefon
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Xizmat
                  </th>

                  <th scope="col" class="px-6 py-3">
                    Ro'yxatdan o'tgan vaqti
                  </th>
                </tr>
              </thead>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default index;
