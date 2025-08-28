import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Index from "./pages/Index";
import AircraftDetailing from "./pages/AircraftDetailing";
import InteriorCleaning from "./pages/InteriorCleaning";
import DisinfectionService from "./pages/DisinfectionService";
import Contact from "./pages/Contact";
import QuoteRequest from "./pages/QuoteRequest";
import ContactSuccess from "./pages/ContactSuccess";
import About from "./pages/About";
import Legal from "./pages/Legal";
import MentionsLegales from "./pages/MentionsLegales";
import RGPD from "./pages/RGPD";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/nettoyage-exterieur" element={<AircraftDetailing />} />
            <Route path="/nettoyage-interieur" element={<InteriorCleaning />} />
            <Route path="/desinfection" element={<DisinfectionService />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-success" element={<ContactSuccess />} />
            <Route path="/demander-un-devis" element={<QuoteRequest />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/mentions-legales" element={<Legal />} />
            <Route path="/mentions-legales-separate" element={<MentionsLegales />} />
            <Route path="/rgpd" element={<RGPD />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
