import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
