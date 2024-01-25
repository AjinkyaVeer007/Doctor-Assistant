import React from "react";
import Select from "react-select";

function DoctorDashboard() {
  const options = [
    { value: "1", label: "Tablet 1 | Himalaya" },
    { value: "2", label: "Tablet 2 | Himalaya" },
    { value: "3", label: "Tablet 3 | Himalaya" },
    { value: "4", label: "Tablet 4 | Himalaya" },
    { value: "5", label: "Syrup 1 | Himalaya" },
    { value: "6", label: "Syrup 2 | Himalaya" },
    { value: "7", label: "Syrup 3 | Himalaya" },
    { value: "8", label: "Syrup 4 | Himalaya" },
  ];

  return (
    <div className="mx-10 mt-5 font-main">
      <div className="flex items-end gap-4 mb-3">
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Select patient name
          </label>
          <div className="mt-2">
            <select className="border py-1.5 px-4 rounded-lg text-md text-slate-600 focus:outline-0 focus:ring-1 focus:ring-inset focus:ring-indigo-600">
              <option value="">Select patient</option>
              <option value="saab">Ajinkya</option>
              <option value="mercedes">Bhavesh</option>
              <option value="audi">Rutik</option>
              <option value="ro">Rohan</option>
            </select>
          </div>
        </div>
        <div className="border-l h-10"></div>
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Enter patient name
          </label>
          <div className="mt-2">
            <input
              name="text"
              type="name"
              placeholder="Enter name"
              className="block rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-light focus:ring-1 focus:ring-inset focus:ring-indigo-600 focus:border-0 focus:outline-0 text-md"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Assign medicines
        </label>
        <div className="mt-2">
          <Select
            className="customInputBoxText"
            placeholder="Select medicines"
            options={options}
            isMulti
          />
        </div>
      </div>
      <button className="bg-indigo-600 px-4 py-1 rounded-lg text-white text-md">
        Save
      </button>
    </div>
  );
}

export default DoctorDashboard;
