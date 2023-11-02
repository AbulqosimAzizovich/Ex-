import React, { useEffect, useState } from "react";
import { Table, Button, Space, Input, Modal, Form, Breadcrumb } from "antd";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import moment from "moment";
import useCourse from "../../service/course/useCourse";
import "./style.scss";

const index = () => {
  const [current, setCurrent] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const allCourses = () => {
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
    allCourses();
  }, []);

  console.log(current);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal1 = () => {
    setIsModalOpen1(true);
  };
  const handleOk1 = () => {
    setIsModalOpen1(false);
  };
  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

  const [data, setData] = useState([]);
  const [order, setOrder] = useState("");
  const [about, setAbout] = useState("");
  const [name, setName] = useState("");
  const [imageLink, setimageLink] = useState("");
  const [editingRecord, setEditingRecord] = useState(null);
  const [editModalVisible, setEditModalVisible] = useState(false);

  const handleAdd = () => {
    const newData = [
      ...data,
      {
        order,
        about,
        name,
        imageLink,
        time: moment().format("YYYY-MM-DD HH:mm:ss"),
      },
    ];

    setData(newData);
    setOrder("");
    setAbout("");
    setName("");
    setimageLink("");
  };

  const handleEdit = (record) => {
    setEditingRecord(record);
    setOrder(record.order);
    setAbout(record.about);
    setName(record.name);
    setimageLink(record.imageLink);
    setEditModalVisible(true);
  };

  const handleSave = () => {
    const updatedData = data.map((item) =>
      item === editingRecord
        ? {
            ...item,
            order,
            about,
            name,
            imageLink,
          }
        : item
    );
    setData(updatedData);
    setEditingRecord(null);
    setOrder("");
    setAbout("");
    setName("");
    setimageLink("");
    setEditModalVisible(false);
  };

  const handleDelete = (record) => {
    const newData = data.filter((item) => item !== record);
    setData(newData);
  };

  const columns = [
    {
      title: "#",
      dataIndex: "order",
      key: "order",
    },
    {
      title: "Kurs Id",
      dataIndex: "",
      key: "",
      render: (_, record) => <p>{uuidv4()} </p>,
    },
    {
      title: "Kurs nomi",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "O'quvchilar soni",
      dataIndex: "",
      key: "",
    },
    {
      title: "Yaratilgan vaqti",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Tahrirlash",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="link" onClick={() => handleDelete(record)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  const token = localStorage.getItem("token");

  return (
    <div className="courses">
      <div className="main__up2">
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
                <Link to="/dashboard/kurslar" className="text-[#000] ">
                  Kurslar
                </Link>
              ),
            },
          ]}
        />
        <button onClick={showModal}>
          <i className="bx bx-plus-circle text-[32px] text-[#287c36] hover:text-[#4dff6b]"></i>
        </button>
      </div>
      <div className="relative overflow-x-auto">
        {token ? (
          <>
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Kurs Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Kurs nomi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    O'quvchilar soni
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Yaratilgan vaqti
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tahrirlash
                  </th>
                </tr>
              </thead>
              <tbody>
                {current.length &&
                  current.map((e, index) => {
                    return (
                      <>
                        <tr className="bg-white border-b">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            {index + 1}
                          </th>
                          <td className="px-6 py-4">{e._id}</td>
                          <td className="px-6 py-4">{e.title}</td>
                          <td className="px-6 py-4">{e.students.length}</td>
                          <td className="px-6 py-4">{e.updatedAt}</td>
                          <td className="px-6 py-4">
                            <button
                              onClick={showModal1}
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
          </>
        ) : (
          <>
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Kurs Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Kurs nomi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    O'quvchilar soni
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Yaratilgan vaqti
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tahrirlash
                  </th>
                </tr>
              </thead>
            </table>
          </>
        )}
      </div>
      <Modal
        title="Tahrirlash"
        open={isModalOpen1}
        onOk={handleOk1}
        onCancel={handleCancel1}
      >
        <Form layout="vertical">
          <Form.Item label="Tartib raqami">
            <Input value={order} onChange={(e) => setOrder(e.target.value)} />
          </Form.Item>
          <Form.Item label="Kurs haqida">
            <Input value={about} onChange={(e) => setAbout(e.target.value)} />
          </Form.Item>
          <Form.Item label="Kurs nomi">
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <Form.Item label="Rasm linki">
            <Input
              value={imageLink}
              onChange={(e) => setimageLink(e.target.value)}
            />
          </Form.Item>

          <button
            className="px-4 py-1 rounded-[15px] border-[1px] border-[#00000034]"
            onClick={() => handleSave()}
          >
            O'zgartirish
          </button>
        </Form>
      </Modal>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Space direction="vertical" style={{ marginBottom: 16, width: "100%" }}>
          <Input
            placeholder="Kurs nomi"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Kurs haqida"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
          <Input
            placeholder="Rasm linki"
            value={imageLink}
            onChange={(e) => setimageLink(e.target.value)}
          />
          <Button onClick={handleAdd}>Add</Button>
        </Space>
      </Modal>
    </div>
  );
};

export default index;
