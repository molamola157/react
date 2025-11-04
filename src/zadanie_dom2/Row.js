import React from "react"

function Row({ uzyciel, skasuj }) {
  return (
    <tr>
      <td>{uzyciel.id}</td>
      <td>{uzyciel.imie}</td>
      <td>{uzyciel.username}</td>
      <td>{uzyciel.email}</td>
      <td>
        <button onClick={() => skasuj(uzyciel.id)}>Usuń</button>
      </td>
    </tr>
  )
}

export default Row
