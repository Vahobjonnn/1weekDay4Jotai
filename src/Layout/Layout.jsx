import React from "react";
import { Link, Outlet } from "react-router";
const Layout = () => {
  return (
    <>    <div className="flex gap-4">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
    </div>
      <Outlet/>
      </>

  )
}

export default Layout