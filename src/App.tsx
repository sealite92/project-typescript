import "./App.css";
import PokemonContextProvider, {  } from "./pokemon app/components/PokemonContextProvider";

import PokemonList from "./pokemon app/components/PokemonList";

function App() {
  return (
    <>
      <PokemonContextProvider>
      <h1 className="text-5xl font-bold bg-blue-400">
        We are building something new here...
      </h1>
         <PokemonList />
      </PokemonContextProvider>
     
    </>
  );
}

export default App;
