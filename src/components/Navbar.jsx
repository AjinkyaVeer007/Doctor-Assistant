import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navbarNavigations } from "../utils/Constant";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const { pathname } = location;

  return (
    <div className="bg-white p-4 flex items-center justify-between font-main">
      <div className="font-bold text-indigo-600 text-xl">Doctor Assistant</div>
      <div className="flex items-center gap-10 justify-center">
        {navbarNavigations &&
          navbarNavigations.map((link) => {
            return (
              <div
                key={link?.id}
                onClick={() => navigate(link.navigate)}
                className={`cursor-pointer font-medium ${
                  pathname.includes(link.navigate)
                    ? "text-indigo-600"
                    : "text-slate-400"
                }`}
              >
                {link?.name}
              </div>
            );
          })}
      </div>
      <button className="bg-indigo-600 px-4 py-2 rounded-md text-white text-sm">
        Logout
      </button>
    </div>
  );
}

export default Navbar;
