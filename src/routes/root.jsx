import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function Root() {
  return (
    <>
      <Nav />
      <div id="container" className="relative pt-[60px]">
        <div className="main-container overflow-auto md:flex md:flex-row h-5/6 max-w-7xl mx-auto mb-5">
          <div id="detail" className="w-full overflow-auto bg-transparent pt-5 md:pt-6 px-3 relative">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

