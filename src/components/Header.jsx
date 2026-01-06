// src/components/Header.jsx
import { useState, useEffect } from "react";
import LogoImg from "../assets/images/logo.png";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#product", label: "About" },
  { href: "#updates", label: "Progress" },
  { href: "#team", label: "Team" },
];

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/60 border-b border-white/10 backdrop-blur-md">
      <div className="px-4 h-16 flex items-center text-white">
        {/* logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2"
        >
          <img
            src={LogoImg}
            alt="BeatRescue logo"
            className="w-10 h-10 rounded-lg border border-white/20"
          />
          <span className="font-semibold text-lg tracking-tight">
            BeatRescue
          </span>
        </a>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm ml-auto">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-slate-200 hover:text-white transition"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="ml-4 inline-flex items-center justify-center
                       px-4 py-2 rounded-full
                       bg-emerald-600 text-white text-sm font-semibold
                       hover:bg-emerald-500 transition"
          >
            Contact
          </a>
        </nav>

        {/* mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden ml-auto w-10 h-10 rounded-lg
                     border border-white/20 bg-slate-900/70"
          aria-label="Toggle menu"
        >
          <i className="fa-solid fa-bars" />
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-950 border-t border-white/10">
          <nav className="px-4 py-4 flex flex-col gap-3 text-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-slate-200 hover:text-white transition"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="mt-2 inline-flex justify-center
                         px-4 py-2 rounded-full
                         bg-emerald-600 text-white font-semibold"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
