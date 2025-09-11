import { BrowserRouter, useLocation, useRoutes } from "react-router-dom";
import Layout from "./components/Layout";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import JobDetailModal from "./pages/JobDetailModal";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Jobs /> },
      { path: "job/:id", element: <JobDetail /> },
    ],
  },
];

function AppRoutes() {
  const location = useLocation();
  const state = location.state;

  // Nếu có background → render routes dựa trên background, còn modal overlay sẽ render thêm
  const element = useRoutes(routes, state?.background || location);

  return (
    <>
      {element}
      {state?.background && (
        <JobDetailModal
          id={state.jobId}
          open
          onClose={() => window.history.back()}
        />
      )}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
