import CookieClicker from "./components/CookieClicker";
import CatFacts from "./components/CatFacts";
import Users from "./components/Users";
import "./App.css";

export default function App() {
  return (
    <main className="app-page">
      <h1 className="app-title">React Oppgave 2</h1>
      <div className="app-grid">
        <CookieClicker />
        <CatFacts />
        <Users />
      </div>
    </main>
  );
}