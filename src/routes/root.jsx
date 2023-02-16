import { Outlet, Link, useLoaderData, Form } from "react-router-dom";
import { getContacts, createContact } from "../contacts";
import Nav from "./Nav";


export default function Root() {
  const { contacts } = useLoaderData();
  return (
    <>
      <Nav />
      <div id="container" className="relative">
        <div className="main-container md:flex md:flex-row-reverse h-5/6 max-w-screen-lg	mx-auto">
          <div id="sidebar" className="sticky px-3 w-1/5 hidden md:flex md:flex-col shadow-md">
            <h1>React Router Contacts</h1>
            <div className="">
              {/* <form id="search-form" role="search">
                <input
                  className="input input-bordered input-accent w-full max-w-xs"
                  id="q"
                  aria-label="Search contacts"
                  placeholder="Search"
                  type="search"
                  name="q"
                  style={{
                    color: '#fff',
                    height: '40px',
                  }}
                />
                <div
                  id="search-spinner"
                  aria-hidden
                  hidden={true}
                />
                <div
                  className="sr-only"
                  aria-live="polite"
                ></div>
              </form> */}
              {/* <Form method="post">
            <button className="btn  btn-sm btn-accent" type="search" style={{ height: '40px' }}>New</button>
          </Form> */}
            </div>
            {/* <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav> */}
            <nav>
              <ul>
                <Link to='popular-anime'>
                  <li>
                    Popular Anime
                  </li>
                </Link>
              </ul>
            </nav>
          </div>
          <div id="detail" className="w-full overflow-auto bg-transparent">
            <Outlet />
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