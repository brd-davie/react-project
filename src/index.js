import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader } from "./routes/contact";
import EditContact, { action as editAction } from "./routes/edit";
import LoginPage from "./routes/LoginPage";
import PopAnime, { loader as animeLoader } from './routes/PopAnime';
import AnimeDetails, { loader as animeDetailsLoader } from './routes/AnimeDetails'

import Root, { loader as rootLoader, action as rootAction } from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "popular-anime",
        element: <PopAnime />,
        loader: animeLoader,
      },
      {
        path: "popular-anime/:animeId/details",
        element: <AnimeDetails />,
        loader: animeDetailsLoader,
      },
    ],
  },
  {
    path: 'login',
    element: <LoginPage />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);