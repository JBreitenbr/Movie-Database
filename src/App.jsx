import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Hello</h1>} />
          <Route path="/about" element={<h1>Auth</h1>} />
          <Route path="/rated" element={<h1>Rated Pages</h1>} />
        </Routes>
      </Router>
    </>
  )
}
