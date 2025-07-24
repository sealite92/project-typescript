import "./App.css";
import { Routes, Route } from "react-router-dom";
import PokemonHome from "./PokemonHome";
import Home from "./Home";
import TodoHome from "./TodoApp/components/TodoHome";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<TodoHome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pokemon" element={<PokemonHome />} />
    </Routes>
    </>
  );
}

export default App;
