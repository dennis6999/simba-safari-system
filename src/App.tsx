
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Alerts from "./pages/Alerts";
import Animals from "./pages/Animals";
import Health from "./pages/Health";
import Conservation from "./pages/Conservation";
import Tracking from "./pages/Tracking";
import Tickets from "./pages/Tickets";
import Education from "./pages/Education";
import Sustainability from "./pages/Sustainability";
import Staff from "./pages/Staff";
import Tasks from "./pages/Tasks";
import Security from "./pages/Security";
import Schedule from "./pages/Schedule";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/health" element={<Health />} />
          <Route path="/conservation" element={<Conservation />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/education" element={<Education />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/security" element={<Security />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
