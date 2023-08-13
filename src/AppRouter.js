import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Header from "./components/layout/header"
import { Box, Toolbar } from '@mui/material';
import Sidebar from './components/layout/sidebar';


function AppRouter() {
  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <Toolbar />
      <Sidebar />
      <Box sx={{
        // marginLeft: 1
      }}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>

      </Box>
    </div>
  );
}

export default AppRouter;
