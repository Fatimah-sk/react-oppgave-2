import { useState } from "react";
import "./CookieClicker.css";

export default function CookieClicker() {
  const [points, setPoints] = useState(0);

  return (
    <section className="cookieCard">
      <div className="cookieHeader">
        <span>🍪</span>
        <h2>CookieClicker</h2>
      </div>

      <button className="cookieBtn" onClick={() => setPoints(p => p + 1)}>
        <img className="cookieImg" src="/cookie.png" alt="Image of a Cookie" />
      </button>

      <p className="cookiePoints">
        Poeng: <b>{points}</b>
      </p>
    </section>
  );
}