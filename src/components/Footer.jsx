import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F]">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-center items-center text-center p-16">
          <div className="space-y-3">
            <h1 className="text-6xl font-bold text-white">KeenKeeper</h1>
            <p className="text-white">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
            <p className="text-xl font-bold text-white">Social Links</p>
            <div className="flex justify-center">
              <div className="flex gap-2">
                <div className="bg-white p-2 rounded-full">
                  <FaInstagram />
                </div>
                <div className="bg-white p-2 rounded-full">
                  <FaSquareFacebook />
                </div>
                <div className="bg-white p-2 rounded-full">
                  <FaXTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-500"/>
        <div className="flex justify-between pt-2 pb-16">
          <p className="text-white">© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex text-white space-x-5">
            <p>Privacy Policy </p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
