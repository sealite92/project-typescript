import "./App.css";
import { Routes, Route } from "react-router-dom";
import PokemonHome from "./pokemon app/components/PokemonHome";
import Home from "./Home";
import TodoHome from "./TodoApp/components/TodoHome";
import GitSearchHome from "./Github search app/components/GitSearchHome";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<GitSearchHome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/todo" element={<TodoHome />} />
      <Route path="/pokemon" element={<PokemonHome />} />
    </Routes>
    </>
  );
}

export default App;
