import React from "react";

const AddCustomer = () => {
  return (
    <div className="p-5 w-full">
      <h2 className="text-3xl font-bold">add new motor</h2>
      <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-7">
        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="capitalize font-semibold">
            owner name
          </label>
          <input
            id="name"
            type="text"
            placeholder="owner"
            className="border p-1 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="type" className="capitalize font-semibold">
            motor type
          </label>{" "}
          <input
            id="type"
            type="text"
            placeholder="motor type"
            className="border p-1 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="model" className="capitalize font-semibold">
            motor model
          </label>{" "}
          <input
            id="model"
            type="text"
            placeholder="motor model"
            className="border p-1 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="plateNumber" className="capitalize font-semibold">
            plate number
          </label>{" "}
          <input
            id="plateNumber"
            type="text"
            placeholder="motor plate"
            className="border p-1 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="plateCode" className="capitalize font-semibold">
            plate code
          </label>{" "}
          <input
            id="plateCode"
            type="text"
            placeholder="plate code"
            className="border p-1 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="subscripation" className="capitalize font-semibold">
            monthly subscription
          </label>{" "}
          <input
            id="subscripation"
            type="text"
            placeholder="monthly subscription"
            className="border p-1 rounded-md"
          />
        </div>
        <input
          type="submit"
          className="bg-slate-500 p-2 rounded-md text-white cursor-pointer w-1/2"
        />
      </form>
    </div>
  );
};

export default AddCustomer;
