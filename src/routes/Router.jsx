import Home from "./Home";
import ErrorPage from '../components/error-page'
import LoginPage from "./LoginPage";
import RegisterPage from '../routes/RegisterPage'
import ForgotPasswordPage from '../routes/ForgotPasswordPage'
import ProfilePage from '../routes/ProfilePage'
import Root from "../routes/root";
import CharacterDetails, { loader as characterDetailsLoader } from './CharacterDetails'
import TopRecommendation from "../components/TopRecommendation";
import TrendingAnime from '../routes/TrendingAnime'
import AnimeDetails, { loader as animeDetailsLoader } from './AnimeDetails'
import TopCharacters from './TopCharacters'
import { createBrowserRouter, Route, Routes, BrowserRouter } from "react-router-dom";
import SearchAnime from './SearchAnime'
import AnimeGenre from '../components/AnimeGenre'
import UpcomingAnime from "./UpcomingAnime";
import OngoingAnime from "./OngoingAnime";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
      {
        path: "upcoming",
        element: <UpcomingAnime />,
      },
      {
        path: "upcoming/:mal_id/anime-details",
        element: <AnimeDetails />,
        loader: animeDetailsLoader,
      },
      {
        path: "ongoing",
        element: <OngoingAnime />,
      },
      {
        path: "ongoing/:mal_id/anime-details",
        element: <AnimeDetails />,
        loader: animeDetailsLoader,
      },
    ],
  },
]);
// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/profile" element={<ProfilePage />} />,
//         <Route path="/" element={<Home />} errorElement={<ErrorPage />} />,
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
//         <Route path="/login" element={<LoginPage />} />,
//         <Route path="/register" element={<RegisterPage />} />,
//         <Route path="/forgot-password" element={<ForgotPasswordPage />} />,
//         <Route path="*" element={<ErrorPage />} />
//       </Routes>
//     </BrowserRouter>
//   )

// }

export default Router