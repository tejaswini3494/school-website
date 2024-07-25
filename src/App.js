import "./App.css";
import Navbar from "./Componunts/Navbar/Navbar";
import Home from "./Componunts/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Gallery from "./Componunts/Gallery/Gallery";
import Contact from "./Componunts/Contact/Contact";

import Data from "./Componunts/Data";
import Footer from "./Componunts/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="bg-gradient-to-r from-violet-50 to-violet-100 h-full">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<Data category="about" />} />
            <Route path="academics" element={<Data category="academics" />} />
            <Route path="admissions" element={<Data category="admissions" />} />
            <Route path="faculty" element={<Data category="faculty" />} />
            <Route path="student" element={<Data category="students" />} />
            <Route path="gallery" element={<Gallery category="gallery" />} />
            <Route path="contact" element={<Contact />} />

            {/* <Route path="/about" element={<ShopCategory category="men" />} /> */}
            {/* <Route path="/womens" element={<ShopCategory category="women" />} /> */}
            {/* <Route path="/kids" element={<ShopCategory category="kid" />} /> */}
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
