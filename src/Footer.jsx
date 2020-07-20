import React from "react";

const linkText = {
  color: "#F4F6F7",
};

const Footer = () => {
  return (
    <>
      <footer className="text-center">
        {/* eslint-disable-next-line */}
        <p>
          🌿 Copyright © {new Date().getFullYear()} | CampK12 | Maintained
          by&nbsp;
          <a
            style={linkText}
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/kapil-d"
          >
            Web Wolf
          </a>
          &nbsp;and&nbsp;
          <a
            style={linkText}
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/archit-gupta-346b6612b/"
          >
            Arch
          </a>
          🔥
        </p>
      </footer>
    </>
  );
};

export default Footer;
