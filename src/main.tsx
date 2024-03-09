import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import './scss/global.scss';
import { About, Clubs, Events, Sponsors } from "./pages/index.ts";
import App from "./App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:'/about',
    element : <About />,
  },
  {
    path:'/sponsors',
    element : <Sponsors />,
  },
  {
    path:'/clubs',
    element : <Clubs />,
  },
  {
    path: '/events',
    element: <Events />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);
