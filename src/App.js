import { BrowserRouter, useLocation, useRoutes } from "react-router-dom";
import Layout from "./components/Layout";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import JobDetailModal from "./pages/JobDetailModal";
import LoginModal from "./components/LoginModal";
import { AuthProvider } from "./app/AuthContext";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Jobs /> },
      { path: "job/:id", element: <JobDetail /> },
      { path: "login", element: <LoginModal open /> }, // ✅ route login
    ],
  },
];

function AppRoutes() {
  const location = useLocation();
  const state = location.state;

  const element = useRoutes(routes, state?.background || location);

  return (
    <>
      {element}

      {/* Nếu có background → show JobDetailModal */}
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
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}
