import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./herosection/Dashboard";
import Statistics from "./herosection/Statistics";
import MedicineStore from "./herosection/MedicineStore";

function App() {
  const router = createBrowserRouter([
    {
      path: "/*",
      element: <PageNotFound />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/main",
      element: <Layout />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "medicinestore",
          element: <MedicineStore />,
        },
        {
          path: "statistics",
          element: <Statistics />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
