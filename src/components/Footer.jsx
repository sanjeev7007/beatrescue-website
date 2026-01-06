// src/components/Footer.jsx
import LogoImg from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="py-10 bg-slate-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 text-center text-slate-400">
        {/* logo */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <img
            src={LogoImg}
            alt="BeatRescue logo"
            className="w-12 h-12 rounded-full border border-white/20"
          />
          <span className="text-lg font-semibold text-white">
            BeatRescue
          </span>
        </div>

        {/* description */}
        <p className="text-sm max-w-xl mx-auto mb-6">
          BeatRescue is an evolving disaster-response initiative focused on
          supporting efforts to locate survivors during emergencies.
        </p>

        {/* links */}
        <div className="flex justify-center gap-6 text-sm mb-6">
          <a
            href="#"
            className="hover:text-emerald-300 transition"
          >
            Privacy
          </a>
          <a
            href="#"
            className="hover:text-emerald-300 transition"
          >
            Terms
          </a>
        </div>

        {/* socials */}
        <div className="flex justify-center gap-4 text-lg mb-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-300 transition"
          >
            <i className="fa-brands fa-linkedin" />
          </a>
          <a
            href="mailto:beatrescuelife@gmail.com"
            className="hover:text-emerald-300 transition"
          >
            <i className="fa-solid fa-envelope" />
          </a>
        </div>

        {/* copyright */}
        <p className="text-xs">
          © {new Date().getFullYear()} BeatRescue. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
