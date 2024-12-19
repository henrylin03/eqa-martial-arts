import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { theme } from "./theme";
import "./styles/normalise.css";
import "@mantine/core/styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <HomePage /> }],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>,
);
