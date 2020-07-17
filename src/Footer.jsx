import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-center">
        {/* eslint-disable-next-line */}
        <p>
          🌿 Copyright © {new Date().getFullYear()} | CampK12 | Maintained
          by&nbsp;
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/kapil-d"
          >
            Web Wolf
          </a>
          🔥
        </p>
      </footer>
    </>
  );
};

export default Footer;
