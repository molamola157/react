import { useState } from "react";
import TypeButton from "./TypeButton";
import types from "../dane/types.json";
import pokedex from "../dane/pokedex.json";

function Pokedex() {
  const [selectedTypes, setSelectedTypes] = useState([]); // tselected types to tablica

 // const nazwaPliku = id.toString().padStart(3, "0");

  const handleTypeClick = (type) => {
    if (selectedTypes.includes(type)) {
      // jeśli typ już wybrany usun go
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      // jeśli nie wybrany to go dodaj
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  // filtrujemy 
  const filteredPokemons =
    selectedTypes.length > 0
      ? pokedex.filter((p) => p.type.some((t) => selectedTypes.includes(t))) //some() sprawdza czy zgadza sie z rzeczą za =>
      : pokedex; // jeśli brak wybranych typów pokaż wszystkie

  return (
    <div>
      <h1>Pokedex</h1>

      <div>
        {types.map((t) => (
          <TypeButton
            key={t}
            type={t}
            onClick={handleTypeClick}
            isSelected={selectedTypes.includes(t)} // do podświetlenia
          />
        ))}
      </div>

      <hr />

      <div>
      {filteredPokemons.map((p) => {
   
    const id = p.id.toString().padStart(3, "0")
        

    return (
      <div key={id}>
        <p>
          {id} {p.name.english} ({p.type.join(", ")})
        </p>
        <img src={`./images/${id}.png`} />
      </div>
    )
})}

      </div>
    </div>
  );
}

export default Pokedex;
