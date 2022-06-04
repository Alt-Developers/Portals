import Footer from "./components/Footer";
import Home from "./pages/Home";

import { useDispatch } from "react-redux";
import { Route, Routes, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import Posts from "./pages/Posts";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Navigation />
        <div style={{ minHeight: "100vh" }}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </div>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
