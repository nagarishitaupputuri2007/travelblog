import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Travel Blog</h1>
      <ul style={styles.navLinks}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 50px",
    backgroundColor: "#2c3e50",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
};

export default Navbar;
