import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import user from "../../service/auth/Auth";

const login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();
    const newUser = {
      username,
      password,
    };

    if (username.trim().length > 0) {
      user
        .login(newUser)
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            setTimeout(() => {
              navigate("/dashboard");
            }, 1000);
          }
        })
        .catch(() => {
          console.log("login failed");
        });
    } else {
      console.log("else");
    }
  };
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto ">
          <div className="h-[75px] flex items-center px-[70px]">
            <Link
              to="/"
              className="px-5 py-2 bg-blue-600 rounded-lg text-white"
            >
              Back
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-[36px] font-semibold text-gray-900 dark:text-white"
          >
            Logo
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleForm}
              >
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default login;
