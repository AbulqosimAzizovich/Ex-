import { Button, Modal } from "antd";
import { useState } from "react";
import useCourse from "../../../service/course/useCourse";
import "./style.scss";

const Card = ({ title, desc, image }) => {
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
  return (
    <>
      <div className="card relative">
        <img
          src={`https://api.webhub.uz/${image}`}
          alt="Image"
          className=" rounded-t-[20px] bg-contain z-0 w-[511px] h-[314px]"
          onClick={showModal}
        />

        <div className="about__card absolute bottom-2 w-full z-30 bg-white">
          <div className="title__card--about">
            <p>5,957 Students</p>
            <p>01h 49m</p>
          </div>
          <h1>{title}</h1>
          <div className="card__price flex items-center justify-between">
            <p>$1999.99</p>
            <button onClick={showModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M22.75 4.33336H2.16663V6.50003H4.65829L8.21163 16.25C8.43513 16.8822 8.8487 17.4298 9.39564 17.8177C9.94258 18.2056 10.5961 18.4148 11.2666 18.4167H20.5833V16.25H11.2666C11.044 16.2499 10.8268 16.1812 10.6446 16.0533C10.4624 15.9254 10.324 15.7444 10.2483 15.535L9.74996 14.0834H19.8033C20.2735 14.0827 20.7307 13.9291 21.1059 13.6457C21.4811 13.3623 21.754 12.9646 21.8833 12.5125L23.8333 5.7092C23.8773 5.56694 23.8916 5.41712 23.8751 5.26912C23.8586 5.12111 23.8118 4.97809 23.7376 4.84898C23.6634 4.71987 23.5634 4.60744 23.4438 4.51873C23.3242 4.43001 23.1875 4.36691 23.0425 4.33336C22.9456 4.31759 22.8468 4.31759 22.75 4.33336ZM19.7708 11.9167H8.93746L6.96579 6.50003H21.3091L19.7708 11.9167Z"
                  fill="#5E6775"
                />
                <path
                  d="M11.375 22.75C12.2725 22.75 13 22.0225 13 21.125C13 20.2275 12.2725 19.5 11.375 19.5C10.4775 19.5 9.75 20.2275 9.75 21.125C9.75 22.0225 10.4775 22.75 11.375 22.75Z"
                  fill="#5E6775"
                />
                <path
                  d="M17.875 22.75C18.7725 22.75 19.5 22.0225 19.5 21.125C19.5 20.2275 18.7725 19.5 17.875 19.5C16.9775 19.5 16.25 20.2275 16.25 21.125C16.25 22.0225 16.9775 22.75 17.875 22.75Z"
                  fill="#5E6775"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        className=" relative"
      >
        <form>
          <div className="my-4">
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Ism familiya
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Ism-familiya"
              required
            />
          </div>

          <div className="mb-6">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Telefon
            </label>
            <input
              type="tel"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Telefon raqamingiz"
              required
            />
          </div>

          <button
            onClick={() => handleOk()}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-[6px] text-[14px] w-full sm:w-auto px-[15px] py-[4px] text-center absolute bottom-5 right-[6.5rem]"
          >
            Submit
          </button>
        </form>
      </Modal>
    </>
  );
};

export default Card;
