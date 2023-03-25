import { BrowserRouter, Routes, Route, Outlet, RouterProvider } from 'react-router-dom';
import Router from './Router';
import '../index.css'

const App = () => {

  return (
    <RouterProvider router={Router} />
    // <Router />
  );
}

export default App
