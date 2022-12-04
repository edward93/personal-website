import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Routes from "./utilities/Routes";
import Main from "./components/routes/Main.Route.Component";
import About from "./components/routes/About.Route.Component";
import Projects from "./components/routes/Projects.Route.Component";
import Contact from "./components/routes/Contact.Route.Component";
import ErrorPage from "./components/routes/Error.Route.Component";

import "./styles/index.scss";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

/**
 * Routes
 */
const router = createBrowserRouter([
  {
    path: Routes.Home,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Routes.Home,
        element: <Main />,
      },
      {
        path: Routes.About,
        element: <About />,
      },
      {
        path: Routes.Projects,
        element: <Projects />,
      },
      {
        path: Routes.Contact,
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
