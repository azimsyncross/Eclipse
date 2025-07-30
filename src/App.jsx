import Header from "./components/Header";

import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import BlogPage from "./pages/BlogPage";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import TeamPage from "./pages/TeamPage";
import RefundPolicy from "./pages/RefundPolicy";
import Terms from "./pages/Tearms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />

          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="/refunds-policy" element={<RefundPolicy/>} />
          <Route path="/terms-of-services" element={<Terms/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
