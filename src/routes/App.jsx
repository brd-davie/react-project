import { BrowserRouter, Routes, Route, Outlet, RouterProvider } from 'react-router-dom';
import Router from './Router';
import '../index.css'
import '../custom.js'

const App = () => {

  return (
    <RouterProvider router={Router} />
    // <Router />
  );
}

export default App
