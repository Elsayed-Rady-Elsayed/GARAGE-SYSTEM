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
        </tr>
      </table>
    </div>
  );
};

export default Cars;
