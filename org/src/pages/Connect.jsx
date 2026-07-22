const SHOW_URL = "https://www.nashuatheatreguild.org/on-stage-now";
const SHOW_PERFORMANCES = [
  "Fri Jul 31 — 7:00 PM",
  "Sat Aug 1 — 2:00 PM & 7:00 PM",
  "Fri Aug 7 — 7:00 PM",
  "Sat Aug 8 — 2:00 PM & 7:00 PM",
];
const SHOW_VENUE = "Greeley Park, Nashua, NH";

// Copy: /content/org-copy.md § Connect. Form is decorative for now.
export default function Connect() {
  return (
    <article>
      <h1>Come build with us</h1>
      <p>No spam, no tracking, no selling your name. Just letters from the Duchy, written by real people.</p>
      <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <input type="email" placeholder="your email" style={{ padding: 12, borderRadius: 20, border: "1px solid #b9d0e6", flex: 1, minWidth: 200 }} />
        <button className="btn" type="submit">Sign the roll</button>
      </form>

      <h2>Upcoming gatherings</h2>
      <div className="card">
        <h3>Duchy meetup in the park</h3>
        <p>We're getting together offline — come find us in the park.</p>
        <ul>
          {SHOW_PERFORMANCES.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p>{SHOW_VENUE}</p>
        <a
          className="btn secondary"
          href={SHOW_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Upcoming Duchy community gathering — details and dates"
        >
          See dates &amp; details
        </a>
      </div>
    </article>
  );
}
