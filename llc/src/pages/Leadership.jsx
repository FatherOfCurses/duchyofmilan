// Copy: /content/llc-copy.md § Leadership. Headshots -> /public/board/<name>
const ceo = { name: "Antonio", role: "Chief Executive Officer", img: "/board/antonio.png" };
const board = [
  { name: "Alonso", role: "Chairman of the Board", img: null },
  { name: "Sebastian", role: "Director — Strategy", img: "/board/sebastian.png" },
  { name: "Gonzalo", role: "Director", img: "/board/gonzalo.png" },
];

function Portrait({ name, img }) {
  return img ? (
    <img className="headshot" src={img} alt={name} />
  ) : (
    <div className="headshot headshot-pending" aria-hidden="true">{name[0]}</div>
  );
}

export default function Leadership() {
  return (
    <article>
      <h1>Leadership &amp; Board of Directors</h1>

      <div className="grid">
        <div className="panel">
          <Portrait name={ceo.name} img={ceo.img} />
          <h3>{ceo.name}</h3>
          <p className="accent">{ceo.role}</p>
        </div>
      </div>

      <h2>Board of Directors</h2>
      <div className="grid">
        {board.map((m) => (
          <div className="panel" key={m.name}>
            <Portrait name={m.name} img={m.img} />
            <h3>{m.name}</h3>
            <p className="accent">{m.role}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
