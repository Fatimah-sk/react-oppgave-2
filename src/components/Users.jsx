import { useState } from "react";
import "./Users.css";

const mockData = [
  { username: "Ola Normann", email: "ola.normann@norge.no" },
  { username: "Torleif", email: "torleif@kodehode.no" },
  { username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { username: "Sander", email: "sander@kodehode.no" },
];

export default function Users() {
  const [users, setUsers] = useState(mockData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  function addUser() {
    if (!username.trim() || !email.trim()) return;
    setUsers((prev) => [...prev, { username: username.trim(), email: email.trim() }]);
    setUsername("");
    setEmail("");
  }

  return (
    <section className="usersCard">
      <div className="usersHeader">
        <span>👥</span>
        <h2>Users</h2>
      </div>

      <div className="usersForm">
        <input
          className="usersInput"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="usersInput"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="usersBtn" onClick={addUser}>Add User</button>
      </div>

      <ul className="usersList">
        {users.map((u, i) => (
          <li key={i} className="userItem">
            <div className="userName">{u.username}</div>
            <div className="userEmail">{u.email}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}