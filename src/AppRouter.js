import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import CreateReport from "./pages/CreateReport"
import Contact from "./pages/contact"
import Header from "./components/layout/header"
import { Box, Toolbar } from '@mui/material';
import Sidebar from './components/layout/sidebar';
import AccessControl from "./pages/accesscontrol"

function AppRouter() {
  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <Toolbar />
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create-report" element={<CreateReport />} />
        <Route path="contact" element={<Contact />} />
        <Route path="ac" element={<AccessControl />} />
      </Routes>

    </div>
  );
}

export default AppRouter;
