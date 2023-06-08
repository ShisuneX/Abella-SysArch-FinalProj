import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Landing } from "./pages/LandingPage"
import { NavBar } from './components/NavBar'
import { AboutUs } from './pages/AboutUsPage';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/about" element ={<AboutUs/>} />
      </Routes>
    </>
  );
}

export default App;
