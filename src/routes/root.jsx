import { Outlet, Link } from "react-router-dom";
import { getContacts, createContact } from "../contacts";
import AnimeList from "./AnimeList";
import AnimeMovies from "./AnimeMovies";
import Nav from "./Nav";


export default function Root() {
  return (
    <>
      <Nav />
      <div id="container" className="relative">
        <div className="main-container md:flex md:flex-row-reverse h-5/6 max-w-screen-lg	mx-auto">
          <div id="sidebar" className="hidden sticky px-3 w-1/5">
            <h1>React Router Contacts</h1>
            <div className="">
            </div>
            <nav>
              <ul>
                <Link to='popular-anime'>
                  <li>
                    Popular Anime
                  </li>
                </Link>
                <Link to='anime-movies'>
                  <li>
                    Anime Movies
                  </li>
                </Link>
              </ul>
            </nav>
          </div>
          <div id="detail" className="w-full overflow-auto bg-transparent md:mt-16">
            <Outlet />
            <AnimeList />
          </div>
        </div>
      </div>
    </>
  );
}

export async function loader({ params }) {
  const contacts = await getContacts();
  console.log(params);
  return { contacts };
}

export async function action() {
  const contact = await createContact();
  return { contact };
}