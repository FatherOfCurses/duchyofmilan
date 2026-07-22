// Copy: /content/llc-copy.md § In Memoriam.
// Deliberately somber — a straight-faced departure from the cold .llc house style.
// Portraits use the same /public/board/ convention (swap in headshots when available).
export default function Memoriam() {
  return (
    <article className="memoriam">
      <header className="memoriam-head">
        <h1>In Memoriam</h1>
        <p className="memoriam-sub">
          Remembering our founder, Prospero, and his daughter, Miranda — lost at sea, 2011.
        </p>
      </header>

      <div className="memoriam-portraits">
        <figure>
          {/* <img src="/board/prospero.jpg" alt="Prospero" /> */}
          <figcaption>Prospero<span>Founder</span></figcaption>
        </figure>
        <figure>
          {/* <img src="/board/miranda.jpg" alt="Miranda" /> */}
          <figcaption>Miranda<span>1998 – 2011</span></figcaption>
        </figure>
      </div>

      <div className="memoriam-body">
        <p>
          It is with profound and lasting sorrow that Duchy of Milan LLC remembers our founder,
          <b> Prospero</b>, and his beloved daughter, <b>Miranda</b>, who were tragically lost at
          sea in the autumn of 2011 when the vessel carrying them was overtaken by a sudden and
          violent storm. They have never been forgotten, and they never shall be.
        </p>
        <p>
          Prospero was a visionary in the truest sense — a mind that soared far beyond the
          horizon, forever chasing the next great idea. He believed technology could be a kind of
          magic, and for a time, he made the rest of us believe it too. Every wall he saw, he
          wanted to tear down. Every locked door, he wanted to open. There was no one quite like
          him, and there never will be again.
        </p>
        <p>
          He was, above all, a seeker of knowledge. Where others counted quarters, Prospero read,
          and questioned, and wandered — happiest when lost in his research, his gaze fixed on
          problems no roadmap had asked him to solve. The day-to-day of running the company he was
          content to entrust to those who loved him, and none carried that trust more faithfully
          than his brother, <b>Antonio</b>, who quietly shouldered the operational work so that
          Prospero might remain free to dream.
        </p>
        <p>
          Little Miranda was the light of his life and of ours — curious, kind, and wise beyond
          her years. That the sea took them together is a grief we still cannot measure.
        </p>
        <p>
          The founder's chair sits empty in their honor, and always will. Everything we have
          built, we have built in their memory.
        </p>
        <p className="memoriam-benediction">Rest, and be at peace. The horizon is yours now.</p>
        <p className="memoriam-sign">— Antonio and the Board of Directors, Duchy of Milan LLC</p>
      </div>
    </article>
  );
}
