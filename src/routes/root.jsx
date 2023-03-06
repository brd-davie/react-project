import { Outlet, Link } from "react-router-dom";
import Nav from "./Nav";

export default function Root() {
  return (
    <>
      <Nav />
      <div id="container" className="relative">
        <div className="main-container overflow-auto md:flex md:flex-row-reverse h-5/6 max-w-7xl mx-auto">
          <div id="sidebar" className="hidden sticky w-64 pt-6 outline-grey-500 bg-black">
            <h1>React Router Contacts</h1>
            <div className="">
            </div>
            <nav>
              <ul className="text-success">
                <li className="text-md hover:text-white hover:bg-neutral">
                  <Link to='popular-anime' className="justify-center">
                    Popular
                  </Link>
                </li>
                <li className="text-md hover:text-white hover:bg-neutral">
                  <Link to='anime-movies' className="justify-center">
                    Movies
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div id="detail" className="w-full overflow-auto bg-transparent pt-5 md:pt-6 px-3 pb-20">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
