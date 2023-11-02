import React, { useEffect, useState } from "react";
import { Table, Button, Space, Input, Modal, Form, Breadcrumb } from "antd";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import moment from "moment";
import useServices from "../../service/services/useService";
import "./style.scss";

const index = () => {
  const [current, setCurrent] = useState([]);

  const allServices = () => {
    useServices
      .getServices()
      .then((res) => {
        if (res.status === 200) {
          setCurrent(res?.data?.services);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    allServices();
  }, []);
  console.log(current);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
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
  const token = localStorage.getItem("token");

  return (
    <div className="xizmatlar">
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
                <Link to="/dashboard/xizmatlar" className="text-[#000] ">
                  Xizmatlar
                </Link>
              ),
            },
          ]}
        />
        <button onClick={showModal}>
          <i className="bx bx-plus-circle text-[32px] text-[#287c36] hover:text-[#4dff6b]"></i>
        </button>
      </div>

      <div class="relative overflow-x-auto">
        {token ? (
          <>
            <table class="w-full text-sm text-left text-gray-500 ">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    #
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Kurs id
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Kurs nomi
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Buyurtmachilar Soni
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Yaratilgan vaqti
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Tahrirlash
                  </th>
                </tr>
              </thead>
              <tbody>
                {current.length &&
                  current.map((e, index) => {
                    return (
                      <>
                        <tr class="bg-white border-b ">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                          >
                            {index + 1}
                          </th>
                          <td class="px-6 py-4">{e?.id}</td>
                          <td class="px-6 py-4">{e?.title}</td>
                          <td class="px-6 py-4">{e?.users?.length}</td>
                          <td class="px-6 py-4">{e?.updatedAt}</td>
                          <td class="px-6 py-4">
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
            {" "}
            <table class="w-full text-sm text-left text-gray-500 ">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    #
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Kurs id
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Kurs nomi
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Buyurtmachilar Soni
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Yaratilgan vaqti
                  </th>
                  <th scope="col" class="px-6 py-3">
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
            placeholder="Tartib raqami"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          />

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
