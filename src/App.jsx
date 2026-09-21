import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
// Add page imports here
import Layout from "@/components/site/Layout";
import Home from "@/pages/Home";
import Studio from "@/pages/Studio";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import Process from "@/pages/Process";
import Pricing from "@/pages/Pricing";
import Areas from "@/pages/Areas";
import Journal from "@/pages/Journal";
import JournalArticle from "@/pages/JournalArticle";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import ContactThankYou from "@/pages/ContactThankYou";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      {/* Add your page Route elements here */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/studio/" element={<Studio />} />
        <Route path="/services/" element={<Services />} />
        <Route path="/services/residential-interior-design-mumbai/" element={<ServiceDetail slug="residential-interior-design-mumbai" />} />
        <Route path="/services/modular-kitchen-design-mumbai/" element={<ServiceDetail slug="modular-kitchen-design-mumbai" />} />
        <Route path="/services/space-planning-for-apartments/" element={<ServiceDetail slug="space-planning-for-apartments" />} />
        <Route path="/services/3d-interior-design-visualisation/" element={<ServiceDetail slug="3d-interior-design-visualisation" />} />
        <Route path="/services/turnkey-interior-execution/" element={<ServiceDetail slug="turnkey-interior-execution" />} />
        <Route path="/projects/" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/process/" element={<Process />} />
        <Route path="/pricing-and-how-we-charge/" element={<Pricing />} />
        <Route path="/areas/" element={<Areas />} />
        <Route path="/journal/" element={<Journal />} />
        <Route path="/journal/:slug" element={<JournalArticle />} />
        <Route path="/faq/" element={<FAQ />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/contact/thank-you/" element={<ContactThankYou />} />
        <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions/" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App