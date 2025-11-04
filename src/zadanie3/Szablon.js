import React from "react";

function Szablon({ box, dodaj, odejmij }) {
  return (
    <div
      style={{
        border: "2px solid gray",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
        width: "200px",
        textAlign: "center",
        background: "#f8f8f8"
      }}
    >
      <h3>{box.nazwa}</h3>
      <p>Index: {box.index}</p>
      <p>Ilość: {box.liczba}</p>
      <button onClick={() => dodaj(box.liczba)}>+</button>
      <button onClick={() => odejmij(box.liczba)}>-</button>
    </div>
  );
}

export default Szablon;
