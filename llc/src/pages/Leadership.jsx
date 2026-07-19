// Copy: /content/llc-copy.md § Leadership. Headshots -> /public/board/<name>.jpg
const ceo = { name: "Antonio", role: "Chief Executive Officer", img: "/board/antonio.jpg" };
const board = [
  { name: "Alonso", role: "Chairman of the Board", img: "/board/alonso.jpg" },
  { name: "Sebastian", role: "Director — Strategy", img: "/board/sebastian.jpg" },
  { name: "Gonzalo", role: "Director", img: "/board/gonzalo.jpg" },
];

export default function Leadership() {
  return (
    <article>
      <h1>Leadership &amp; Board of Directors</h1>

      <div className="grid">
        <div className="panel">
          <h3>{ceo.name}</h3>
          <p className="accent">{ceo.role}</p>
        </div>
        {/* Deliberate blank: the founder's chair sits vacant. */}
        <div className="panel" style={{ opacity: 0.4, fontStyle: "italic" }}>
          <h3>—</h3>
          <p>Founder's chair (vacant). The company does not comment on its history.</p>
        </div>
      </div>

      <h2>Board of Directors</h2>
      <div className="grid">
        {board.map((m) => (
          <div className="panel" key={m.name}>
            <h3>{m.name}</h3>
            <p className="accent">{m.role}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
