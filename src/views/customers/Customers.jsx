import React from "react";
import { Link } from "react-router-dom";

const Customers = () => {
  return (
    <div className="flex-1 md:p-5">
      <div className="flex justify-between mb-5">
        <h2 className="text-3xl font-bold">customers</h2>
        <Link
          to={"/addCustomer"}
          className="bg-slate-500 text-white p-2 rounded-md"
        >
          add new customer
        </Link>
      </div>
      <table className="table-auto border w-full border-collapse">
        <tr className="border">
          <th className="border">name</th>
          <th className="border">id</th>
          <th className="border">gender</th>
          <th className="border">vehicle type</th>
          <th className="border">vehicle brand</th>
          <th className="border">monthly subscription</th>
          <th className="border">subscription date</th>
        </tr>
        <tr key="" className="border">
          <td className="border text-center">elsayed</td>
          <td className="border text-center">3232332</td>
          <td className="border text-center">male</td>
          <td className="border text-center">car</td>
          <td className="border text-center">hunda</td>
          <td className="border text-center">622</td>
          <td className="border text-center">25/12</td>
        </tr>
      </table>
    </div>
  );
};

export default Customers;
