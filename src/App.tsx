import { Navigate, Route, Routes } from "react-router";
import Auth from "./Pages/Auth";
import Home from "./Pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./Pages/CompleteProfile";
import NotFound from "./Pages/NotFound";

import OwnerDashboard from "./Pages/OwnerDashboard";
import Project from "./Pages/Project";
import Projects from "./Pages/Projects";
import { DarkModeProvider } from "./Context/DarkModeContext";
import OwnerLayOut from "./Features/Owner/OwnerLayOut";


import ProposalsTable from "./Features/Project/ProposalsTable";
import FreelanceLayout from "./Features/Freelancer/FreelancerLayout";
import FreelancerDashboard from "./Features/Freelancer/FreelancerDashboard";
import FreelancerLayout from "./Features/Freelancer/FreelancerLayout";

const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/owner" element={<OwnerLayOut />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<Project />} />
          </Route>
          <Route path="freelancer" element={<FreelancerLayout/>}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<FreelancerDashboard />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
