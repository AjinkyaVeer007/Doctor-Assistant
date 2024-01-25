import React from "react";

function MedicineForm() {
  return (
    <div className="my-6">
      <div className="flex items-end justify-center gap-6">
        <div>
          <label className="block text-sm font-medium leading-6 text-slate-600">
            Medicine Name
          </label>
          <div className="mt-2">
            <input
              name="name"
              type="text"
              placeholder="Enter medicine name"
              className="block rounded-md border-0 py-1 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-light focus:ring-1 focus:ring-inset focus:ring-indigo-600 focus:border-0 focus:outline-0 text-md"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium leading-6 text-slate-600">
            Brand Name
          </label>
          <div className="mt-2">
            <input
              name="name"
              type="text"
              placeholder="Enter brand name"
              className="block rounded-md border-0 py-1 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-light focus:ring-1 focus:ring-inset focus:ring-indigo-600 focus:border-0 focus:outline-0 text-md"
            />
          </div>
        </div>
        <button className="bg-indigo-600 px-4 py-1 rounded-lg text-white text-md">
          Save
        </button>
      </div>
    </div>
  );
}

export default MedicineForm;
