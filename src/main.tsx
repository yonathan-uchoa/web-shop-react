import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { routes } from "./router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={routes} />
);
