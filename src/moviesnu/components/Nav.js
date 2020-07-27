import React, { useEffect, useState } from "react";
import "../css/nav.css";

function Nav() {
  const [showNav, setNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 130) {
        setNav(true);
      } else setNav(false);
    });
    // return window.removeEventListener("scroll");
  }, []);
  return (
    <div className={`nav ${showNav && "nav_logo_bg"}`}>
      <span className="nav_logo">𝕸𝖔𝖛𝖎𝖊𝖘𝕹𝖀</span>
    </div>
  );
}

export default Nav;
