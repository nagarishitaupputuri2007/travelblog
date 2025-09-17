import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">📩 Contact Me</h2>
        <p className="text-gray-600 mb-8">
          Have questions, suggestions, or just want to say hello?  
          Fill out the form below and I’ll get back to you soon!
        </p>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;

