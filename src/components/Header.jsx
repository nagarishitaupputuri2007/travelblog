import React from "react";

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Wanderlust Diaries</h1>
      <nav>
        <ul style={styles.nav}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: { background: "#333", color: "#fff", padding: "15px" },
  title: { margin: "0" },
  nav: { listStyle: "none", display: "flex", gap: "15px" }
};

export default Header;
