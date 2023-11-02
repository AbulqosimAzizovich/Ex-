import React, { useEffect, useState } from "react";
import { Breadcrumb, Space, Table, Tag, Modal, Select } from "antd";
import { Link } from "react-router-dom";
import useStd from "../../service/students/useStd";
import "./style.scss";

const handleChange = (value) => {
  console.log(value);
};
const index = () => {
  const [current, setCurrent] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const students = () => {
    useStd
      .getStudent()
      .then((res) => {
        if (res.status === 200) {
          setCurrent(res?.data?.students);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  useEffect(() => {
    students();
  }, []);
  console.log(current);

  const token = localStorage.getItem("token");
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

      {token ? (
        <>
          <div className="table">
            <div className="relative">
              <table className="w-full text-sm text-left text-gray-500 h-screen overflow-y-scroll">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      #
                    </th>
                    <th scope="col" className="px-6 py-3">
                      F.I.Sh
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Telefon
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Kurs
                    </th>

                    <th scope="col" className="px-6 py-3">
                      Ro'yxatdan o'tgan vaqti
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Holati
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Tahrirlash
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {current.length &&
                    current.map((e) => {
                      return (
                        <>
                          <tr className="bg-white border-b">
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                            >
                              {e._id}
                            </th>
                            <td className="px-6 py-4">{e.fullName}</td>
                            <td className="px-6 py-4">{e.phoneNumber}</td>
                            <td className="px-6 py-4">{e.courseId.title}</td>
                            <td className="px-6 py-4">{e.updatedAt}</td>
                            <td className="px-6 py-4">Active</td>
                            <td className="px-6 py-4">
                              <button
                                onClick={showModal}
                                className="text-[24px] text-white bg-yellow-500 p-2 rounded-lg"
                              >
                                <i className="bx bxs-edit"></i>
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="table">
            <div className="relative">
              <table className="w-full text-sm text-left text-gray-500 overflow-y-scroll">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      #
                    </th>
                    <th scope="col" className="px-6 py-3">
                      F.I.Sh
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Telefon
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Kurs
                    </th>

                    <th scope="col" className="px-6 py-3">
                      Ro'yxatdan o'tgan vaqti
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Holati
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Tahrirlash
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </>
      )}

      <Modal
        title="O'quvchi Statusini o'zgartirish"
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <h1 className="text-[#323a85] text-[24px] font-semibold my-5 border-t-[1px] border-[#0000001c]">
          Holatni tanlang
        </h1>

        <Select
          labelInValue
          defaultValue={{
            value: "tanlang",
            label: "Tanlang",
          }}
          style={{
            width: "100%",
          }}
          onChange={handleChange}
          options={[
            {
              value: "o'qiydi",
              label: "O'qiydi",
            },
            {
              value: "o'qimaydi",
              label: "O'qimaydi",
            },
          ]}
        />
        <button
          className="p-2 text-[32px] rounded-md"
          onClick={() => handleOk()}
        >
          <i className="bx bxs-save text-[#286b28]"></i>
        </button>
      </Modal>
    </div>
  );
};

export default index;
