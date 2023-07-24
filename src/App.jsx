import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Abouts from './pages/Abouts';
import Services from './pages/Services';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Appointment from './pages/Appointment';
import Success from './pages/Success';

function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Abouts />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/success' element={<Success/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
