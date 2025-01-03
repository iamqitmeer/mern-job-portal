import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";
import FindJobs from "./screens/FindJob";
import ResourcesPage from "./screens/Resources";
import CompaniesPage from "./screens/Companies";
import LoginPage from "./screens/Auth/Login";
import Register from "./screens/Auth/Register";
import EditProfilePage from "./screens/EditProfile";
import SettingsPage from "./screens/Setting";
import Layout from "./screens/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Home />
          </>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/find-job",
        element: <FindJobs />,
      },
      {
        path: "/resources",
        element: <ResourcesPage />,
      },
      {
        path: "/companies",
        element: <CompaniesPage />,
      },

      {
        path: "/edit-profile",
        element: <EditProfilePage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
