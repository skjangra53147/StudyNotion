import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../logo1.svg";


const Footer = () => {
        
  return (
    <footer className="bg-black text-gray-300 px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">

        {/* Part-1 */}
        <div className="col-span-2 sm:col-span-3 md:col-span-1">
          <Link to="/">
            <img src={logo1} alt="logo" className="w-32 mb-6" />
          </Link>

          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Affiliates</li>
          </ul>
        </div>

        {/* Part-2 */}
        <div>
          <h4 className="text-white font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm mb-6">
            <li className="hover:text-white cursor-pointer">Articles</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Chart Sheet</li>
            <li className="hover:text-white cursor-pointer">Code challenges</li>
            <li className="hover:text-white cursor-pointer">Docs</li>
            <li className="hover:text-white cursor-pointer">Projects</li>
            <li className="hover:text-white cursor-pointer">Videos</li>
            <li className="hover:text-white cursor-pointer">Workspaces</li>
          </ul>

          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help Center</li>
          </ul>
        </div>

        {/* Part-3 */}
        <div>
          <h4 className="text-white font-semibold mb-3">Plans</h4>
          <ul className="space-y-2 text-sm mb-6">
            <li className="hover:text-white cursor-pointer">Paid memberships</li>
            <li className="hover:text-white cursor-pointer">For students</li>
            <li className="hover:text-white cursor-pointer">Business solutions</li>
          </ul>

          <h4 className="text-white font-semibold mb-3">Community</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Forums</li>
            <li className="hover:text-white cursor-pointer">Chapters</li>
            <li className="hover:text-white cursor-pointer">Events</li>
          </ul>
        </div>

        {/* Part-4 */}
        <div>
          <h4 className="text-white font-semibold mb-3">Subjects</h4>
          <ul className="space-y-2 text-sm">
            <li>AI</li>
            <li>Code Computing</li>
            <li>Code Foundations</li>
            <li>Computer Science</li>
            <li>Cybersecurity</li>
            <li>Data Analytics</li>
            <li>Data Science</li>
            <li>Data Visualization</li>
            <li>Developer Tools</li>
            <li>DevOps</li>
            <li>Game Development</li>
            <li>IT</li>
            <li>Machine Learning</li>
            <li>Math</li>
            <li>Mobile Development</li>
            <li>Web Design</li>
            <li>Web Development</li>
          </ul>
        </div>

        {/* Part-5 */}
        <div>
          <h4 className="text-white font-semibold mb-3">Languages</h4>
          <ul className="space-y-2 text-sm">
            <li>Bash</li>
            <li>C++</li>
            <li>C#</li>
            <li>Go</li>
            <li>HTML & CSS</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Kotlin</li>
            <li>PHP</li>
            <li>Python</li>
            <li>R</li>
            <li>Ruby</li>
            <li>SQL</li>
            <li>Swift</li>
          </ul>
        </div>

        {/* Part-6 */}
        <div>
          <h4 className="text-white font-semibold mb-3">Career building</h4>
          <ul className="space-y-2 text-sm">
            <li>Career paths</li>
            <li>Career services</li>
            <li>Interview prep</li>
            <li>Professional certification</li>
            <li>Full Catalog</li>
            <li>Beta Content</li>
          </ul>
        </div>

      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © 2026 Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;