import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-24 px-6 md:px-20 shadow-lg text-center"
      >
        <Hero />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-200 py-20 px-6 md:px-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <About />
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="blog"
        className="bg-gradient-to-r from-pink-100 via-red-100 to-pink-200 py-20 px-6 md:px-20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 drop-shadow-lg">
            ✍️ Blog Posts
          </h2>
          <Blog />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gradient-to-r from-green-100 via-teal-100 to-green-200 py-20 px-6 md:px-20"
      >
        <div className="max-w-3xl mx-auto text-center">
          <Contact />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-6 text-center">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
