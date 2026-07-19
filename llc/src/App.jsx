import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Company from "./pages/Company.jsx";
import Leadership from "./pages/Leadership.jsx";
import Platform from "./pages/Platform.jsx";
import Investors from "./pages/Investors.jsx";

// duchyofmilan.llc — modern corporate era. See /content/llc-copy.md and /design/llc-direction.md.
export default function App() {
  return (
    <div className="site">
      <header className="topbar">
        <div className="brand">
          <span className="wordmark">DUCHY OF MILAN</span>
          <span className="tag">LLC</span>
        </div>
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/company">Company</NavLink>
          <NavLink to="/leadership">Leadership</NavLink>
          <NavLink to="/platform">Platform</NavLink>
          <NavLink to="/investors">Investors</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/investors" element={<Investors />} />
        </Routes>
      </main>

      <footer className="footer">
        © 2026 Duchy of Milan LLC. All rights reserved. All positions final.
      </footer>
    </div>
  );
}
