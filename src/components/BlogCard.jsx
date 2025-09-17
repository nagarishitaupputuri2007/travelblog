import React from "react";
import { motion } from "framer-motion";

function BlogCard({ title, description, image }) {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
      whileHover={{ scale: 1.05 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition">
          Read More
        </button>
      </div>
    </motion.div>
  );
}

export default BlogCard;
