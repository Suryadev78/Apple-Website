import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./pages/Hero";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
