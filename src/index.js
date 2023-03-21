import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/error-page";
import LoginPage from "./routes/LoginPage";
import TrendingAnime from './routes/TrendingAnime';
import Root from "./routes/root";
import App from './routes/App'
import TopCharacters from "./routes/TopCharacters";
import TopRecommendation from "./components/TopRecommendation";
import AnimeDetails, { loader as animeDetailsLoader } from "./routes/AnimeDetails";
import CharacterDetails, { loader as characterDetailsLoader } from "./routes/CharacterDetails";
import SearchAnime from "./routes/SearchAnime";
import RegisterPage from "./routes/RegisterPage";
import AnimeGenre from "./components/AnimeGenre";
import ProfilePage from "./routes/ProfilePage";
import PrivateRoutes from "./components/PrivateRoutes";
import ForgotPasswordPage from "./routes/ForgotPasswordPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'register',
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'forgot-password',
    element: <ForgotPasswordPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile",
    element: <ProfilePage />,
    errorElement: <ErrorPage />,
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
        path: "trending-anime/:mal_id/anime-details",
        element: <AnimeDetails />,
        loader: animeDetailsLoader,
      },
      {
        path: "character-list",
        element: <TopCharacters />,
      },
      {
        path: "character-list/:mal_id/details",
        element: <CharacterDetails />,
        loader: characterDetailsLoader,
      },
      {
        path: "search",
        element: <SearchAnime />,
      },
      {
        path: "search/:mal_id/anime-details",
        element: <AnimeDetails />,
        loader: animeDetailsLoader,
      },
      {
        path: "top-recommendation",
        element: <TopRecommendation />,
      },
      {
        path: "top-recommendation/:mal_id/anime-details",
        element: <AnimeDetails />,
        loader: animeDetailsLoader,
      },
      {
        path: "anime-list/:mal_id/anime-details",
        element: <AnimeDetails />,
        loader: animeDetailsLoader,
      },
      {
        path: "genre",
        element: <AnimeGenre />,
      },
      {
        path: "genre/:mal_id/anime-details",
        element: <AnimeDetails />,
        loader: animeDetailsLoader,
      },
    ],
  },
]);



// async function test() {
//   try {
//     const token = JSON.parse(localStorage.token);
//     const response = await fetch('https://api.hattch.brdsites.com/api/v1/auth/me', {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + token.access_token,
//       },
//     });
//     const data = await response.json();
//     localStorage.setItem('user', JSON.stringify(data));
//     if (response.status !== 200) {
//       return false
//     }
//     else {
//       return true
//     }
//   } catch (error) {
//   }
// }

// test();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

  // <React.StrictMode>
  //   <BrowserRouter>
  //     <Routes>
  //       <Route element={<PrivateRoutes />} >
  //         <Route path="/profile" element={<ProfilePage />} />,
  //         <Route path="/" element={<App />} errorElement={<ErrorPage />} />,
  //         <Route path='/anime' element={<Root />} errorElement={<ErrorPage />}>,
  //           <Route path='trending-anime' element={<TrendingAnime />} />
  //           <Route path='character-list' element={<TopCharacters />} />
  //           <Route path='search' element={<SearchAnime />} />
  //           <Route path='top-recommendation' element={<TopRecommendation />} />
  //           <Route path='genre' element={<AnimeGenre />} />
  //           <Route path='genre/:mal_id/anime-details' element={<AnimeDetails />} loader={animeDetailsLoader} />
  //           <Route path='search/:mal_id/anime-details' element={<AnimeDetails />} loader={animeDetailsLoader} />
  //           <Route path='anime-list/:mal_id/anime-details' element={<AnimeDetails />} loader={animeDetailsLoader} />
  //           <Route path='trending-anime/:mal_id/anime-details' element={<AnimeDetails />} loader={animeDetailsLoader} />
  //           <Route path='character-list/:mal_id/details' element={<CharacterDetails />} loader={characterDetailsLoader} />
  //           <Route path='top-recommendation/:mal_id/anime-details' element={<AnimeDetails />} loader={animeDetailsLoader} />
  //         </Route>
  //       </Route>
  //       <Route path="/login" element={<LoginPage />} />,
  //       <Route path="/register" element={<RegisterPage />} />,
  //       <Route path="/forgot-password" element={<ForgotPasswordPage />} />,
  //     </Routes>
  //   </BrowserRouter>
  // </React.StrictMode>
);