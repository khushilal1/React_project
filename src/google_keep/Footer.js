import React from "react";
import "./footer.css";

function Footer() {
  let year = new Date().getFullYear();

  return (
    <>
      <footer >
        <p className="copyright">copyright &copy;{year}</p>
      </footer>
    </>
  );
}

export default Footer;
