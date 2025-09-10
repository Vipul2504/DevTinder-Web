import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center fixed bottom-0 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - Made with ❤️ by Vipul
            Vishwakarna
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
