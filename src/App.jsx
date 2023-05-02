import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Register from './components/Register';
import Null from "./components/Null"

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
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Null />} />
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
