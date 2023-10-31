// Navbar.js

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const connectPassport = async function () {
    if (typeof window !== 'undefined'&& window.provider) {
    window.accounts = await window.provider.request({ method: "eth_requestAccounts" });
    if (window.accounts) {
      getUserInfo();
    }
  }
  };

  const getUserInfo = async function () {
    if (typeof window !== 'undefined'&& window.passport){
    window.userProfile = await window.passport.getUserInfo();
    console.log("userrrrrr", window.userProfile);
  }
  };

  const passportLogout = async function () {
    if (typeof window !== 'undefined'&& window.provider){
    let logout = await window.passport.logout();
    console.log(logout, "logout");
    window.userProfile = {};
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link legacyBehavior href="/">
          <a className="text-white font-bold text-xl">Game App</a>
        </Link>
        <div>
          {/* Your existing navigation links */}
          <button id="btn-passport" className="text-white mr-4" onClick={connectPassport}>
            Login with Passport
          </button>
          <button id="btn-logout" className="text-white" onClick={passportLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
