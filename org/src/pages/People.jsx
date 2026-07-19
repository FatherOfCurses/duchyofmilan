// Copy: /content/org-copy.md § The People. Headshots -> /public/team/<name>.jpg
const people = [
  { name: "Prospero", role: "Founder", img: "/team/prospero.jpg" },
  { name: "Antonio", role: "Managing Director", img: "/team/antonio.jpg" },
  { name: "Miranda", role: "Youngest citizen", img: "/team/miranda.jpg" },
  { name: "Gonzalo", role: "Community steward", img: "/team/gonzalo.jpg" },
];

export default function People() {
  return (
    <article>
      <h1>The people who make the Duchy</h1>
      <div className="pillars">
        {people.map((p) => (
          <div className="card" key={p.name}>
            {/* Swap in real headshot when available */}
            <h3>{p.name}</h3>
            <p><i>{p.role}</i></p>
          </div>
        ))}
      </div>
      <p>Every citizen shapes the Duchy. That includes you.</p>
    </article>
  );
}
