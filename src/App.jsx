import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Auth from './pages/Auth';
//import {mutationLogin} from './mutationLogin';
export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Hello</h1>} />
          <Route path="/Movie-Database" element={<h1>How are you?</h1>} />
          <Route path="/auth" element={<Auth/>} />
          <Route path="/rated" element={<h1>Rated Pages</h1>} />
        </Routes>
      </Router>
    </>
  )
}
