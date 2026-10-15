import { NavLink } from "react-router-dom";

export default function Aside() {
  return (
    <aside className="sidebar">
      <h3>Menu</h3>
      <ul>
        <li><NavLink to="/" end>Accueil</NavLink></li>
        <li><NavLink to="/etudiants">Étudiants</NavLink></li>
        <li><NavLink to="/notes">Notes</NavLink></li>
      </ul>
    </aside>
  );
}