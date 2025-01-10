/* externals */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

/* components */
import App from "./App.jsx";
import HomePage from "./pages/HomePage";
import KidsClassesPage from "./pages/ClassesPage/KidsClassesPage";
import AdultsClassesPage from "./pages/ClassesPage/AdultsClassesPage";
import WomensClassesPage from "./pages/ClassesPage/WomensClassesPage";
import TimetablePage from "./pages/TimetablePage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";

/* css */
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./styles/normalise.css";
import "./styles/global.css";

/* other */
import { theme } from "./styles/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/kids-classes", element: <KidsClassesPage /> },
      { path: "/adults-classes", element: <AdultsClassesPage /> },
      { path: "/womens-classes", element: <WomensClassesPage /> },
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
