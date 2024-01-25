import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-full flex-col justify-center px-6 mt-2 lg:px-8 font-main">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register your account
        </h2>
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="mb-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Name
          </label>
          <div className="mt-2">
            <input
              name="name"
              type="text"
              placeholder="Enter full name"
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-light focus:ring-1 focus:ring-inset focus:ring-indigo-600 focus:border-0 focus:outline-0 text-md"
            />
          </div>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Mobile No.
          </label>
          <div className="mt-2">
            <input
              name="contact"
              type="number"
              placeholder="Enter mobile no."
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-light focus:ring-1 focus:ring-inset focus:ring-indigo-600 focus:border-0 focus:outline-0 text-md"
            />
          </div>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Hospital Name
          </label>
          <div className="mt-2">
            <input
              name="hospital"
              type="text"
              placeholder="Enter hospital/clinic name"
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-light focus:ring-1 focus:ring-inset focus:ring-indigo-600 focus:border-0 focus:outline-0 text-md"
            />
          </div>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              name="email"
              type="email"
              placeholder="Enter email"
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-light focus:ring-1 focus:ring-inset focus:ring-indigo-600 focus:border-0 focus:outline-0 text-md"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          <div className="mt-2">
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-light focus:ring-1 focus:ring-inset focus:ring-indigo-600 focus:border-0 focus:outline-0 text-md"
            />
          </div>
        </div>
        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Register
        </button>

        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
