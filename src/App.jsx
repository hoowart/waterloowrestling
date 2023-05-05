import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Register from './components/Register';
import Null from "./components/Null"
import Success from "./components/Success"


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/register" element={<Register />} />
            <Route path="/success" element={<Success />} />
            <Route path="*" element={<Null />} />
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
