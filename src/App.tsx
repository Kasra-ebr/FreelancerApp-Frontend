import { Route, Routes } from "react-router";
import Auth from "./Pages/Auth";
import Home from "./Pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./Pages/CompleteProfile";
import NotFound from "./Pages/NotFound";
import AppLayout from "./Features/AppLayout/AppLayout";
import OwnerDashboard from "./Pages/OwnerDashboard";
import Project from "./Pages/Project";
import Projects from "./Pages/Projects";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="/owner" element={<AppLayout />}>
          <Route path="dashboard" element={<OwnerDashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<Project />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
