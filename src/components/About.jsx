import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">👩‍💻 About Me</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Hi, I'm <span className="font-semibold text-blue-600">Nagarishitaupputuri</span>, a passionate traveler and storyteller.  
          Through this blog, I share my adventures from mountains, beaches, and bustling cities across the world.  
          My goal is to inspire others to explore new places and experience the beauty of cultures worldwide 🌍✨.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
