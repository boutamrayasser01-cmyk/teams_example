import { Routes, Route } from "react-router-dom";
import "./App.css";
import Aside from "./Side.jsx";
import Content from "./Content.jsx";
import Accueil from "./Accueil.jsx";
import Notes from "./Notes.jsx";

function App() {
  return (
    <div className="layout">
      <Aside />
      <main className="content">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/etudiants" element={<Content />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;