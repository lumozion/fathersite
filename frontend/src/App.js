import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Craftsmanship from "./components/Craftsmanship";
import Products from "./components/Products";
import Engineering from "./components/Engineering";
import Industries from "./components/Industries";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Craftsmanship />
        <Products />
        <Engineering />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
