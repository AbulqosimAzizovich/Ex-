import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import {
  Breadcrumb,
  Table,
  Button,
  Space,
  Input,
  Modal,
  Form,
  message,
  Upload,
} from "antd";
import { Link } from "react-router-dom";
import "./style.scss";


const props = {
  name: "file",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const index = () => {
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
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [editingRecord, setEditingRecord] = useState(null);
  const [editModalVisible, setEditModalVisible] = useState(false);

  const handleAdd = () => {
    const newData = [...data, { name, surname, phone }];
    setData(newData);
    setName("");
    setSurname("");
    setPhone("");
  };

  const handleEdit = (record) => {
    setEditingRecord(record);
    setName(record.name);
    setSurname(record.surname);
    setPhone(record.phone);
    setEditModalVisible(true);
  };

  const handleSave = () => {
    const updatedData = data.map((item) =>
      item === editingRecord ? { ...item, name, surname, phone } : item
    );
    setData(updatedData);
    setEditingRecord(null);
    setName("");
    setSurname("");
    setPhone("");
    setEditModalVisible(false);
  };

  const handleDelete = (record) => {
    const newData = data.filter((item) => item !== record);
    setData(newData);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Action",
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

      <div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          rowKey={(record) => record.phone}
        />

        <Modal
          title="Edit Entry"
          visible={editModalVisible}
          onOk={handleSave}
          onCancel={() => setEditModalVisible(false)}
        >
          <Form layout="vertical">
            <Form.Item label="Name">
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Item>
            <Form.Item label="Surname">
              <Input
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Phone Number">
              <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
            </Form.Item>
          </Form>
        </Modal>
      </div>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Space direction="vertical" style={{ marginBottom: 16 }}>
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <Input
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button type="dashed" onClick={handleAdd}>
            Add
          </Button>
        </Space>
      </Modal>
    </div>
  );
};

export default index;
