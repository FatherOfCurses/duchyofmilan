import { Link } from "react-router-dom";

// Copy: /content/llc-copy.md § Home
export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Own the future.</h1>
        <p>
          Duchy of Milan LLC turns attention, data, and belief into durable advantage. We build
          the infrastructure of influence.
        </p>
        <Link className="btn" to="/platform">Request access</Link>
        <Link className="btn ghost" to="/investors">Investor relations</Link>
      </section>

      <div className="metricbar">
        <div><b>$4.2B</b> assets under influence</div>
        <div><b>340M</b> engaged identities</div>
        <div><b>99th</b> percentile retention</div>
        <div><b>41</b> markets</div>
      </div>

      <section className="grid">
        <div className="panel"><h3 className="accent">Predictive by default</h3><p>Our models don't wait for the future. They price it.</p></div>
        <div className="panel"><h3 className="accent">Platforms over people</h3><p>Scale is the only moat that compounds. We own the rails.</p></div>
        <div className="panel"><h3 className="accent">Total capture</h3><p>Every interaction is a signal. Every signal is a position.</p></div>
      </section>
    </>
  );
}
