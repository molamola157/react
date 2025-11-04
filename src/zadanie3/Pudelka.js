import { useState } from "react";
import Szablon from "./Szablon";
import pudelkaData from "./pudelka.json";

function Pudelka() {
  const [pudelka, setPudelka] = useState(pudelkaData);

  const handleDelete = (index) => {
    setPudelka(pudelka.filter((p) => p.index !== index));
  };

  return (
    <div>
      <h1>Lista Pudełek</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {pudelka.map((p) => (
          <Szablon key={p.index} box={p} dodaj={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default Pudelka;
