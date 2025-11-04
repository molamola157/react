import React, { useState, useEffect, useRef } from "react"
import Row from "./Row"
import dane from "./user.json"



function Table() {
  const [users, setUsers] = useState([])

  const imieRef = useRef()
  const usernameRef = useRef()
  const emailRef = useRef()
    

  useEffect(() => {
    setUsers(dane)
  }, [])

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id))
  }

  const handleAdd = () => {
    const imie = imieRef.current.value.trim()
    const username = usernameRef.current.value.trim()
    const email = emailRef.current.value.trim()

    if (!imie || !username || !email) return alert("Wypełnij wszystkie pola!")


   let idnumer = dane.length;

    const newUser = {
      id: idnumer + 1,
      imie,
      username,
      email
    }

    setUsers((prev) => [...prev, newUser])

    imieRef.current.value = ""
    usernameRef.current.value = ""
    emailRef.current.value = ""
  }

  return (
    <div style={{ margin: "10px"} }>
      <h2>Lista użytkowników</h2>

      <div style={{ marginBottom: "10px" }}>
        <input type="text" placeholder="Imię" ref={imieRef} />
        <input type="text" placeholder="Nick" ref={usernameRef} />
        <input type="text" placeholder="Email" ref={emailRef} />
        <button onClick={handleAdd}>Dodaj</button>
      </div>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Imię</th>
            <th>Username</th>
            <th>Email</th>
            <th>Akcje</th>
          </tr>
        </thead>
        <tbody>
          {users.map((uzyciel) => (
            <Row key={uzyciel.id} uzyciel={uzyciel} skasuj={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
