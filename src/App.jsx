import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./components/Home"
import Navbar from "./layouts/Navbar"
import Footer from "./layouts/Footer"
import Contact from "./components/Contact"
import Register from "./auth/Register"
import NotFound from "./components/NotFound"

function App() {

  return (
    <div className="font-montserrat min-h-screen text-white">
      <Router>

        {/* <Navbar /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        {/* <div className="fixed bottom-0 left-0 w-full py-4"> */}
          {/* <Footer /> */}
        {/* </div> */}
      </Router>
    </div>
  )
}

export default App
