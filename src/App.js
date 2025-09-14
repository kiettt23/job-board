import {
  BrowserRouter,
  useLocation,
  useRoutes,
  Outlet,
} from "react-router-dom";
import Layout from "./components/Layout";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import JobDetailModal from "./pages/JobDetailModal";
import { AuthProvider } from "./app/AuthContext";
import { useState } from "react";
import LoginModal from "./components/LoginModal";

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
  const [loginOpen, setLoginOpen] = useState(false); // ✅ quản lý login modal

  // Nếu có background → render routes dựa trên background, còn modal overlay sẽ render thêm
  const element = useRoutes(routes, state?.background || location);

  return (
    <>
      {/* ✅ pass context cho các page */}
      <Outlet context={{ setLoginOpen }} />

      {element}

      {state?.background && (
        <JobDetailModal
          id={state.jobId}
          open
          onClose={() => window.history.back()}
        />
      )}

      {/* ✅ login modal global */}
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
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
