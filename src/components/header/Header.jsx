import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white fixed top-0 left-0 z-10">
        <nav className="py-6 px-5 flex justify-between items-center w-full mx-auto md:px-16 lg:px-24">
          <div>
            <a href="#" className="font-bold text-green text-3xl lg:text-4xl">
              Herdian
            </a>
          </div>
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <div className="hidden lg:block">
            <ul className="flex gap-16">
              <li>
                <a href="#aboutme">About</a>
              </li>
              <li>
                <a href="#myprojects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        {menuOpen && (
          <ul className="animate-slide-down text-center">
            <li className="py-3">
              <a href="#aboutme" onClick={() => setMenuOpen(!menuOpen)}>
                About
              </a>
            </li>
            <li className="py-3">
              <a href="#myprojects" onClick={() => setMenuOpen(!menuOpen)}>
                Projects
              </a>
            </li>
            <li className="py-3">
              <a href="#contact" onClick={() => setMenuOpen(!menuOpen)}>
                Contacts
              </a>
            </li>
            <hr className="border border-green-700 mt-6" />
          </ul>
        )}
      </header>
    </>
  );
}
