import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Story from "./pages/Story.jsx";
import People from "./pages/People.jsx";
import Manifesto from "./pages/Manifesto.jsx";
import Connect from "./pages/Connect.jsx";

const SHOW_URL = "https://www.nashuatheatreguild.org/on-stage-now";

// duchyofmilan.org — Web 2.0 era. See /content/org-copy.md and /design/org-direction.md.
export default function App() {
  return (
    <div className="site">
      <header className="topbar">
        <div className="brand">
          <span className="wordmark">Duchy of Milan</span>
          <span className="beta">beta</span>
        </div>
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/story">Our Story</NavLink>
          <NavLink to="/people">The People</NavLink>
          <NavLink to="/manifesto">Manifesto</NavLink>
          <NavLink to="/connect">Connect</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/people" element={<People />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </main>

      <footer className="footer">
        <a
          className="footer-webring"
          href={SHOW_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="A friend of the Duchy — visit their page"
        >
          ◈ part of the webring →
        </a>
        <div>Made with care in the open. duchy of milan — beta. © 2011.</div>
      </footer>
    </div>
  );
}
