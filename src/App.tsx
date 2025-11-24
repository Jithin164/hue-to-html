import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import FreezerRoom from "./pages/services/FreezerRoom";
import ChillerRoom from "./pages/services/ChillerRoom";
import PetShelter from "./pages/services/PetShelter";
import PortableColdRoom from "./pages/services/PortableColdRoom";
import BudgetColdRoom from "./pages/services/BudgetColdRoom";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/freezer-room" element={<FreezerRoom />} />
          <Route path="/services/chiller-room" element={<ChillerRoom />} />
          <Route path="/services/pet-shelter" element={<PetShelter />} />
          <Route path="/services/portable-cold-room" element={<PortableColdRoom />} />
          <Route path="/services/budget-cold-room" element={<BudgetColdRoom />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
