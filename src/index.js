import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/error-page";
import LoginPage from "./routes/LoginPage";
import TrendingAnime from './routes/TrendingAnime';
import Root from "./routes/root";
import App from './routes/App'
import TopCharacters from "./routes/TopCharacters";
import TopRecommendation from "./routes/TopRecommendation";
import AnimeDetails, { loader as animeDetailsLoader } from "./routes/AnimeDetails";
import CharacterDetails, { loader as characterDetailsLoader } from "./routes/CharacterDetails";
import SearchAnime from "./routes/SearchAnime";
import RegisterPage from "./routes/RegisterPage";
import AnimeGenre from "./components/AnimeGenre";
import { useNavigate } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'login',
    element: <LoginPage />
  },
  {
    path: 'register',
    element: <RegisterPage />
  },
  {
    path: "anime",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "trending-anime",
        element: <TrendingAnime />,
      },
      {
        path: "character-list",
        element: <TopCharacters />,
      },
      {
        path: "search",
        element: <SearchAnime />,
      },
      {
        path: "top-recommendation",
        element: <TopRecommendation />,
      },
      {
        path: "genre",
        element: <AnimeGenre />,
        // loader: genreListLoader,
      },
      {
        path: "character-list/:mal_id/details",
        element: <CharacterDetails />,
        loader: characterDetailsLoader,
      },
      {
        path: "anime-list/:mal_id/anime-details",
        element: <AnimeDetails />,
        loader: animeDetailsLoader,
      },
      {
        path: "top-recommendation/:mal_id/anime-details",
        element: <AnimeDetails />,
        loader: animeDetailsLoader,
      },
      {
        path: "trending-anime/:mal_id/anime-details",
        element: <AnimeDetails />,
        loader: animeDetailsLoader,
      },
      {
        path: "genre/:mal_id/anime-details",
        element: <AnimeDetails />,
        loader: animeDetailsLoader,
      },
      {
        path: "search/:mal_id/anime-details",
        element: <AnimeDetails />,
        loader: animeDetailsLoader,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export const me = async () => {
  fetch('https://api.hattch.brdsites.com/api/v1/auth/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.token).access_token,
    },
  })
    .then((response) => {
      if (!response.status === 200) {
        useNavigate("/login")
        return false;
      }
      return response.json()
    })
    .then((data) => {
      localStorage.setItem('user', JSON.stringify(data));
      useNavigate('/');
    })
} 