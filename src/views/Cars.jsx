import React from "react";

const Cars = () => {
  return (
    <div className="flex-1 md:p-5">
      <h2>cars</h2>
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
          <th className="border text-center">valid</th>
        </tr>
      </table>
    </div>
  );
};

export default Cars;
