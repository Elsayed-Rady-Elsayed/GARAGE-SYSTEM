const AddCustomer = () => {
  return (
    <div className="p-5 w-full">
      <h2 className="text-3xl font-bold">add new motor</h2>
      <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-7">
        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="capitalize font-semibold">
            name
          </label>
          <input
            id="name"
            type="text"
            placeholder="name"
            className="border p-1 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="id" className="capitalize font-semibold">
            id
          </label>{" "}
          <input
            id="id"
            type="text"
            placeholder="id"
            className="border p-1 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="gender" className="capitalize font-semibold">
            gender
          </label>
          <select
            name="gender"
            id="gender"
            placeholder="motor model"
            className="border p-1 rounded-md"
          >
            <option value="male">male</option>
            <option value="female">female</option>{" "}
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="vehicleType" className="capitalize font-semibold">
            vehicle type
          </label>{" "}
          <input
            id="vehicleType"
            type="text"
            placeholder="vehicle type"
            className="border p-1 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="vehiclebrand" className="capitalize font-semibold">
            vehicle brand
          </label>{" "}
          <input
            id="vehiclebrand"
            type="text"
            placeholder="vehicle brand"
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
        <div className="flex flex-col gap-3">
          <label
            htmlFor="subscriptiondate"
            className="capitalize font-semibold"
          >
            subscription date
          </label>{" "}
          <input
            id="subscriptiondate"
            type="text"
            placeholder="subscription date"
            className="border p-1 rounded-md"
          />
        </div>
        <div></div>
        <input
          type="submit"
          className="bg-slate-500 p-2 rounded-md text-white cursor-pointer w-1/2"
        />
      </form>
    </div>
  );
};

export default AddCustomer;
