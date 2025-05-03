import React from 'react';
import { BsFacebook, BsLinkedin, BsTwitterX, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className=" text-white py-8 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* About Section */}
          <div>
            <h5 className="text-xl font-semibold mb-4">EduElevate</h5>
            <p className="text-gray-400">
              EduElevate is an educational technology company dedicated to enhancing learning through innovative digital solutions. We provide students with access to high-quality resources and offer educators powerful tools to improve engagement and outcomes.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h5 className="text-xl font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Sitemap</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h5 className="text-xl font-semibold mb-4">Our Services</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Android App</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">SEO Optimization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">UI/UX Design</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h5 className="text-xl font-semibold mb-4">Contact Us</h5>
            <p className="text-gray-400">Email: eduelevate@gmail.com</p>
            <p className="text-gray-400">Phone: +123 456 7890</p>
            <p className="text-gray-400">Address: 123 Business St., Liverpool, US</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h5 className="text-xl font-semibold mb-4">Follow Us</h5>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
                <BsFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                <BsLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
                <BsTwitterX size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
                <BsInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">&copy; 2024 EduElevate. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
