import { useEffect, useState } from "react";
import "./CatFacts.css";

export default function CatFacts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    async function fetchFacts() {
      try {
        setLoading(true);
        setError("");
        const res = await fetch("https://catfact.ninja/facts?limit=5");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setFacts(data.data);
      } catch (e) {
        setError(e.message || "Noe gikk galt");
      } finally {
        setLoading(false);
      }
    }
    fetchFacts();
  }, []);

  return (
    <section className="catCard">
      <div className="catHeader">
        <span>🐱</span>
        <h2>CatFacts</h2>
      </div>

      {loading && <p className="catState">Loading...</p>}
      {error && <p className="catState">Feil: {error}</p>}

      {!loading && !error && (
        <ul className="catList">
          {facts.map((item, i) => (
            <li key={i} className="catItem">{item.fact}</li>
          ))}
        </ul>
      )}
    </section>
  );
}