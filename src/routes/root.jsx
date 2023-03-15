import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function Root() {
  return (
    <>
      <Nav />
      <div id="container" className="relative">
        <div className="main-container overflow-auto md:flex md:flex-row h-5/6 max-w-7xl mx-auto mb-5">
          <div id="sidebar" className="hidden overflow-auto p-3 sticky w-64 outline-grey-500 bg-neutral my-5 h-4/5">
            <nav className="">
            </nav>
          </div>
          <div id="detail" className="w-full overflow-auto bg-transparent pt-5 md:pt-6 px-3 pb-20 relative">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

