import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center text-base-content p-8">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Posts
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
