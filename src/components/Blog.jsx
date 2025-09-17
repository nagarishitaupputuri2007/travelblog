import React from "react";

const posts = [
  {
    title: "Exploring the Streets of Paris",
    excerpt: "From the Eiffel Tower to cozy cafes, Paris never fails to amaze."
  },
  {
    title: "Backpacking Through South America",
    excerpt: "An unforgettable journey through Brazil, Peru, and Chile."
  },
  {
    title: "A Foodie's Guide to Japan",
    excerpt: "Sushi, ramen, and street food adventures in Tokyo and Osaka."
  }
];

function Blog() {
  return (
    <section id="blog" style={styles.container}>
      <h2>Blog Posts</h2>
      <div style={styles.posts}>
        {posts.map((post, index) => (
          <div key={index} style={styles.card}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: { padding: "20px", textAlign: "center" },
  posts: { display: "flex", justifyContent: "center", gap: "20px" },
  card: { border: "1px solid #ccc", padding: "15px", borderRadius: "8px", width: "250px" }
};

export default Blog;
