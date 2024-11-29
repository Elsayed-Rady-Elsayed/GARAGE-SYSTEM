import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const linkStyle =
    "bg-slate-200 p-2 rounded-md border border-transparent hover:bg-transparent hover:border hover:border-slate-200";
  return (
    <div className="flex flex-col gap-5 p-5 bg-slate-100 w-[20%] h-[100vh]">
      <Link to={"/"} className={linkStyle}>
        home
      </Link>
      <Link to={"/cars"} className={linkStyle}>
        cars
      </Link>
      <Link to={"/motorcycle"} className={linkStyle}>
        motorcycle
      </Link>
      <Link to={"/customers"} className={linkStyle}>
        customers
      </Link>
      <Link to={"/"} className={linkStyle}>
        home
      </Link>
    </div>
  );
};

export default SideBar;
