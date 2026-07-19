import { Link } from "react-router-dom";

// Copy: /content/org-copy.md § Home
export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Take back the future.</h1>
        <p>
          Duchy of Milan is an open community of makers, dreamers, and neighbors tearing down
          the walls between people and the tools that used to belong only to the powerful.
        </p>
        <Link className="btn" to="/connect">Join the movement</Link>
        <Link className="btn secondary" to="/manifesto">Read our manifesto</Link>
      </section>

      <section className="pillars">
        <div className="card">
          <h3>Open by default</h3>
          <p>Knowledge wants to be shared. Everything we build, we build in the open.</p>
        </div>
        <div className="card">
          <h3>People over platforms</h3>
          <p>Real connection between real people — not an audience to be sold.</p>
        </div>
        <div className="card">
          <h3>No gatekeepers</h3>
          <p>The tools of creation belong to everyone, not to the few who hoard them.</p>
        </div>
      </section>

      <p style={{ textAlign: "center", fontWeight: 700, color: "var(--green)" }}>
        12,041 dukes and duchesses and counting.
      </p>
    </>
  );
}
