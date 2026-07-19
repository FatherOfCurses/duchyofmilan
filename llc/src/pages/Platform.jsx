// Copy: /content/llc-copy.md § Platform
const systems = [
  { name: "ARIEL™", tag: "Autonomous intelligence", desc: "Never sleeps, never negotiates, never forgets. Turns behavior into positions." },
  { name: "DUCAT", tag: "Digital assets", desc: "A native token that meters access and captures value that used to leak to users." },
  { name: "ORACLE", tag: "Prediction markets", desc: "Don't guess the future. Trade it. We take the spread on all of it." },
  { name: "CALIBAN", tag: "Data & labor exchange", desc: "The engine underneath. A global marketplace of human signal. Always on. Rarely credited." },
];

export default function Platform() {
  return (
    <article>
      <h1>The Duchy Platform</h1>
      <div className="grid">
        {systems.map((s) => (
          <div className="panel" key={s.name}>
            <h3>{s.name}</h3>
            <p className="accent">{s.tag}</p>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
      <p>These systems are indistinguishable from magic. That's the point.</p>
    </article>
  );
}
