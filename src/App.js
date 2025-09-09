import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Jobs /> },
      { path: "job/:id", element: <JobDetail /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
