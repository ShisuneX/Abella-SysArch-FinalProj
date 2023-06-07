import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Landing } from "./pages/LandingPage"
import { NavBar } from './components/NavBar'

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Landing/>} />

      </Routes>
    </>
  );
}

export default App;
