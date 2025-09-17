import React from "react";

function About() {
  return (
    <section id="about" style={styles.container}>
      <h2>About Me</h2>
      <p>
        Hi, I'm Alex! A passionate traveler who loves exploring new cultures,
        cuisines, and hidden gems around the world. 🌍✈️
      </p>
    </section>
  );
}

const styles = {
  container: { padding: "20px", textAlign: "center" }
};

export default About;
