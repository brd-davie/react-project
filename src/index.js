import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import LoginPage from "./routes/LoginPage";
import PopAnime, { loader as animeLoader } from './routes/PopAnime';
import AnimeDetails, { loader as animeDetailsLoader } from './routes/AnimeDetails'
import Root, { loader as rootLoader, action as rootAction } from "./routes/root";
import Home from './routes/Home'
import AnimeMovies, { loader as animeMoviesLoader } from "./routes/AnimeMovies";
import AnimeMoviesDetails, { loader as animeMoviesDetailsLoader } from "./routes/AnimeMoviesDetails";
import AnimeList from "./routes/AnimeList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "anime",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "popular-anime",
        element: <PopAnime />,
        loader: animeLoader,
      },
      {
        path: "anime-movies",
        element: <AnimeMovies />,
        loader: animeMoviesLoader,
      },
      {
        path: "popular-anime/:animeId/details",
        element: <AnimeDetails />,
        loader: animeDetailsLoader,
      },
      {
        path: "anime-movies/:animeId/details",
        element: <AnimeMoviesDetails />,
        loader: animeMoviesDetailsLoader,
      },
    ]
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