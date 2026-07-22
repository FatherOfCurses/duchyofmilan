// Copy: /content/org-copy.md § The People. Headshots -> /public/team/<name>
const people = [
  { name: "Prospero", role: "Founder", img: "/team/prospero.png" },
  { name: "Antonio", role: "Managing Director", img: "/team/antonio.png" },
  { name: "Miranda", role: "Youngest citizen", img: "/team/miranda.jpg" },
  { name: "Gonzalo", role: "Community steward", img: "/team/gonzalo.png" },
];

export default function People() {
  return (
    <article>
      <h1>The people who make the Duchy</h1>
      <div className="pillars">
        {people.map((p) => (
          <div className="card" key={p.name}>
            <img className="headshot" src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p><i>{p.role}</i></p>
          </div>
        ))}
      </div>
      <p>Every citizen shapes the Duchy. That includes you.</p>
    </article>
  );
}
