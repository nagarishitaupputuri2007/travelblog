import React from "react";

function Footer() {
  return (
    <footer id="contact" style={styles.footer}>
      <p>Contact me: <a href="mailto:alextravels@example.com">alextravels@example.com</a></p>
      <p>
        Follow me on 
        <a href="https://twitter.com" target="_blank" rel="noreferrer"> Twitter</a> | 
        <a href="https://instagram.com" target="_blank" rel="noreferrer"> Instagram</a>
      </p>
    </footer>
  );
}

const styles = {
  footer: { background: "#333", color: "#fff", padding: "15px", textAlign: "center" }
};

export default Footer;
