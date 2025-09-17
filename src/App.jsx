import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import BlogCard from "./components/BlogCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const blogs = [
    {
      id: 1,
      title: "Exploring the Mountains",
      description: "A journey through the scenic landscapes and peaks.",
      image: "https://source.unsplash.com/600x400/?mountains,travel",
    },
    {
      id: 2,
      title: "Beach Vibes",
      description: "Relaxing at the shores with golden sand and waves.",
      image: "https://source.unsplash.com/600x400/?beach,travel",
    },
    {
      id: 3,
      title: "City Adventures",
      description: "Exploring culture, food, and architecture in bustling cities.",
      image: "https://source.unsplash.com/600x400/?city,travel",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          ✈️ Latest Travel Blogs
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
