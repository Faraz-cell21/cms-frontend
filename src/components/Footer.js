// import React from "react";

// function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white py-6 mt-10">
//       <div className="container mx-auto text-center space-y-2">
//         <p className="text-lg font-semibold">&copy; 2025 CMS Platform. All rights reserved.</p>
//         <p className="text-sm">Powered by MERN Stack</p>

//         {/* Optional Social Links */}
//         <div className="flex justify-center space-x-6 mt-2">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
//             📘
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
//             🐦
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
//             🔗
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-around px-6">
        {/* Gomal University Section */}
        <div className="w-full md:w-1/3 text-center md:text-left px-4 mb-6">
          <h3 className="text-xl font-bold mb-3">Gomal University</h3>
          <p className="text-gray-400 text-sm">
            Gomal University, located in Khyber Pakhtunkhaw, has 3 campuses, 7 faculties, 10 constituent colleges, 20 departments, centers, institutes, and 50+ affiliated colleges.
          </p>
        </div>

        {/* Useful Links */}
        <div className="w-full md:w-1/4 text-center md:text-left px-4 mb-6">
          <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/" className="hover:text-white">Products</Link></li>
            <li><Link to="/" className="hover:text-white">Services</Link></li>
            <li><Link to="/" className="hover:text-white">Legal</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-1/4 text-center md:text-left px-4">
          <h3 className="text-lg font-semibold mb-3">Connect with Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: <a href="mailto:info@gu.edu.pk" className="hover:text-white">info@gu.edu.pk</a></li>
            <li>Phone: <a href="tel:+92-966-750-424-29" className="hover:text-white">+92 (966) 750-424-29</a></li>
          </ul>
          <div className="flex space-x-3 mt-3">
            <a href="#" className="text-gray-400 hover:text-white"><img src="/fb.png" alt="Facebook" className="h-6"/></a>
            <a href="#" className="text-gray-400 hover:text-white"><img src="/twitter.png" alt="Twitter" className="h-6"/></a>
            <a href="#" className="text-gray-400 hover:text-white"><img src="/link.png" alt="LinkedIn" className="h-6"/></a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="bg-gray-900 text-center py-3">
        <p className="text-gray-400 text-sm">All rights reserved to owners</p>
      </div>
    </footer>
  );
}

export default Footer;
