/* externals */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

/* components */
import App from "./App.jsx";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage.jsx";
import KidsClassesPage from "./pages/ClassesPage/KidsClassesPage";
import AdultsClassesPage from "./pages/ClassesPage/AdultsClassesPage";
import TimetablePage from "./pages/TimetablePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

/* css */
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./styles/normalise.css";
import "./styles/global.css";

/* other */
import { theme } from "./theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/kids-classes", element: <KidsClassesPage /> },
      { path: "/adults-classes", element: <AdultsClassesPage /> },
      { path: "/timetable", element: <TimetablePage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
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
