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
    </article>
  );
}
