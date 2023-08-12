import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Header from "./components/layout/header"

function AppRouter() {
  return (
    <div style={{ position: 'relative' }}>
      {/* <title>Car Expert Reports</title> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
