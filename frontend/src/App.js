import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Craftsmanship from "./components/Craftsmanship";
import Products from "./components/Products";
import Engineering from "./components/Engineering";
import About from "./components/About";
import GoogleReviews from "./components/GoogleReviews";
import Industries from "./components/Industries";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import LoadingScreen from "./components/LoadingScreen";
import WhatsAppChat from "./components/WhatsAppChat";
import ControlTransformers from "./components/products/ControlTransformers";
import PowerTransformers from "./components/products/PowerTransformers";
import DistributionTransformers from "./components/products/DistributionTransformers";
import IsolationTransformers from "./components/products/IsolationTransformers";
import AutoTransformers from "./components/products/AutoTransformers";
import NotFound from "./components/NotFound";

  const PageWithLoading = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <LoadingScreen />;
  }

  return children;
};

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Craftsmanship />
        <Products />
        <Engineering />
        <About />
        <GoogleReviews />
        <Industries />
        <Contact />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1a1a1a',
            color: '#fffef8',
            border: 'none',
            borderRadius: '0',
            fontFamily: 'Inter, sans-serif',
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={
            <PageWithLoading>
              <Header /><PrivacyPolicy /><Footer /><WhatsAppChat />
            </PageWithLoading>
          } />
          <Route path="/terms-of-service" element={
            <PageWithLoading>
              <Header /><TermsOfService /><Footer /><WhatsAppChat />
            </PageWithLoading>
          } />
          <Route path="/products/control-transformers" element={<><Header /><ControlTransformers /><Footer /><WhatsAppChat /></>} />
          <Route path="/products/power-transformers" element={<><Header /><PowerTransformers /><Footer /><WhatsAppChat /></>} />
          <Route path="/products/distribution-transformers" element={<><Header /><DistributionTransformers /><Footer /><WhatsAppChat /></>} />
          <Route path="/products/isolation-transformers" element={<><Header /><IsolationTransformers /><Footer /><WhatsAppChat /></>} />
          <Route path="/products/auto-transformers" element={<><Header /><AutoTransformers /><Footer /><WhatsAppChat /></>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
