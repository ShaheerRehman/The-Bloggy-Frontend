import { useState } from "react";
import axiosInstance from "axios";
import { Link, useNavigate } from "react-router-dom";
import ApiContext from "./ApiContext";
import { useContext } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [fusername, setFusername] = useState("");
  const [femail, setFemail] = useState("");
  const [fpassword, setFpassword] = useState("");
  const [api] = useContext(ApiContext);

  const submit = () => {
    axiosInstance
      .post(`${api}user/register/`, {
        email: femail,
        username: fusername,
        password: fpassword,
      })
      .then((res) => {
        navigate("/login");
        console.log(res);
        console.log(res.data);
      });
  };
  return (
    <>
      <div className="max-w-screen bg-gray-900 px-4 py-16 mx-auto sm:px-6 lg:px-8 text-white">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center text-teal-300 sm:text-3xl">
            Get started today
          </h1>

          <p className="max-w-md mx-auto mt-4 text-center text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p>

          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
            className="p-8 bg-gray-800 mt-6 mb-0 space-y-4 rounded-lg shadow-3xl"
          >
            <p className="text-lg font-medium">Register your account</p>

            <div>
              <label htmlFor="username" className="text-sm font-medium">
                Username
              </label>

              <div className="relative mt-1">
                <input
                  type="username"
                  id="username"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm text-black"
                  placeholder="Enter username"
                  onChange={(e) => setFusername(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>

              <div className="relative mt-1">
                <input
                  type="email"
                  id="email"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm text-black"
                  placeholder="Enter email"
                  onChange={(e) => setFemail(e.target.value)}
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>

              <div className="relative mt-1">
                <input
                  type="password"
                  id="password"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm text-black"
                  placeholder="Enter password"
                  onChange={(e) => setFpassword(e.target.value)}
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="block w-full px-5 py-3 text-sm font-medium text-white bg-teal-600 rounded-lg"
            >
              Sign up
            </button>

            <p className="text-sm text-center text-gray-400">
              Already have an account?{" "}
              <Link className="underline" to="/login">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
