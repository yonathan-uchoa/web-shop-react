import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Home from "./pages/home";
import Store from "./pages/store";
import About from "./pages/about";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
