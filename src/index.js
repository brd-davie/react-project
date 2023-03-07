import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/error-page";
import LoginPage from "./routes/LoginPage";
import PopAnime from './routes/TrendingAnime';
import PopAnimeDetails, { loader as popAnimeLoader } from './routes/TrendingAnimeDetails'
import Root from "./routes/root";
import Home from './routes/Home'
import AnimeMovies from "./routes/PopAnime";
import AnimeMoviesDetails, { loader as animeMoviesDetailsLoader } from "./routes/PopAnimeDetails";
import TopCharactersDetails from "./routes/TopCharactersDetails";
import TopCharacters from "./routes/TopCharacters";

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
    children: [
      {
        path: "popular-anime",
        element: <PopAnime />,
      },
      {
        path: "anime-movies",
        element: <AnimeMovies />,
      },
      {
        path: "character-list",
        element: <TopCharacters />,
      },
      {
        path: "popular-anime/:id/details",
        element: <PopAnimeDetails />,
        loader: popAnimeLoader,
      },
      {
        path: "character-list/:id/details",
        element: <TopCharactersDetails />,
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