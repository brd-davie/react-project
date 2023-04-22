import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Root() {
  return (
    <>
      <Nav />
      <div id="container" className="relative">
        <div className="main-container md:flex md:flex-row h-5/6 max-w-7xl mx-auto pb-5">
          <div id="detail" className="w-full bg-transparent pt-5 md:pt-6 px-3 relative">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

