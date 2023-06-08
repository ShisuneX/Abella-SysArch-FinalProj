import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Landing } from "./pages/LandingPage"
import { NavBar } from './components/NavBar'
import { AboutUs } from './pages/AboutUsPage';
import { Contact } from './pages/ContactPage';
import { Register } from './pages/RegisterPage';
import { Login } from './pages/LoginPage';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/about" element ={<AboutUs/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element ={<Login/>} />
        <Route path="/register" element ={<Register/>} />
      </Routes>
    </>
  );
}

export default App;
