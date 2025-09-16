// -------------------- Imports --------------------
import { BrowserRouter, useLocation, useRoutes } from "react-router-dom";

// Layout & shared UI
import Layout from "./components/Layout";

// Feature screens
import Jobs from "./features/jobs/Jobs";
import JobDetail from "./features/jobs/JobDetail";
import JobDetailModal from "./features/jobs/JobDetailModal";
import LoginModal from "./features/auth/LoginModal";

// Global context
import { AuthProvider } from "./app/contexts/AuthContext";

// -------------------- Routes Definition --------------------
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Jobs /> },
      { path: "job/:id", element: <JobDetail /> },
      { path: "login", element: <LoginModal open /> }, // login via route
    ],
  },
];

// -------------------- Router Wrapper --------------------
function AppRoutes() {
  const location = useLocation();
  const state = location.state;

  // Background routing: when opening a job from the list, keep the list as background
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

// -------------------- App Root --------------------
export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}
