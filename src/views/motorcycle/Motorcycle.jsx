import React from "react";
import { Link } from "react-router-dom";

const Motorcycle = () => {
  return (
    <div className="flex-1 md:p-5">
      <div className="flex justify-between mb-5">
        <h2 className="text-3xl font-bold">Motors</h2>
        <Link
          to={"/addMotor"}
          className="bg-slate-500 text-white p-2 rounded-md"
        >
          add new motor
        </Link>
      </div>
      <table className="table-auto border w-full border-collapse">
        <tr className="border">
          <th className="border">owner</th>
          <th className="border">type</th>
          <th className="border">model</th>
          <th className="border">plate number</th>
          <th className="border">plate code</th>
          <th className="border">out door</th>
          <th className="border">monthly subscription</th>
        </tr>
        <tr key="" className="border">
          <td className="border text-center">elsayed</td>
          <td className="border text-center">hyndai</td>
          <td className="border text-center">2011</td>
          <td className="border text-center">3000</td>
          <td className="border text-center">ق ب ح</td>
          <td className="border text-center">true</td>
          <td className="border text-center">valid</td>
        </tr>
      </table>
    </div>
  );
};

export default Motorcycle;
