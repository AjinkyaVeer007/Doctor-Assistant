import React from "react";
import MedicineTable from "../components/tables/MedicineTable";
import MedicineForm from "../components/forms/MedicineForm";

function MedicineStore() {
  return (
    <div className="font-main mx-4">
      <MedicineForm />
      <div className="text-xl font-medium text-slate-600">Medicine List</div>
      <MedicineTable />
    </div>
  );
}

export default MedicineStore;
