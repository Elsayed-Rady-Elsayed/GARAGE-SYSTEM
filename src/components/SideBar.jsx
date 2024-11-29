import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex flex-col gap-5 p-5 bg-slate-100 w-[20%]">
      <Link to={"/"}>home</Link>
      <Link to={"/cars"}>cars</Link>
      <Link to={"/motorcycle"}>motorcycle</Link>
      <Link to={"/customers"}>customers</Link>
      <Link to={"/"}>home</Link>
    </div>
  );
};

export default SideBar;
