import "./App.css";
import { Routes, Route } from "react-router-dom";
import PokemonHome from "./PokemonHome";
import Home from "./Home";
import TodoHome from "./TodoApp/components/TodoHome";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<TodoHome />} />
      <Route path="/pokemon" element={<PokemonHome />} />
    </Routes>
    </>
  );
}

export default App;
