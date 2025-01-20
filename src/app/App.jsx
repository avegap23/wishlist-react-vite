import React, { useState } from 'react'
import './App.css'
import WishInput from '../input/WishInput.jsx'

const wishlist = [
  { id: 1, name: "PlayStation 5", done: false },
  { id: 2, name: "Macbook Pro", done: true },
  { id: 3, name: "Tesla Model S", done: false }
]

function App() {

  const [wishes, setWishes] = useState(wishlist)

  return (
    <>
      <h1>My wishlist</h1>
      <WishInput setWishes={setWishes} />
      <div id="list">
        <ul className="wish-list">
          {wishlist.map(({ id, name, done }) => (
            <li key={id} className={`wish-list__item + ${done ? "wish-list__item--done" : ""}`}>
              <input type="checkbox" defaultChecked={done} id={id} />
              <label htmlFor={id} className={done ? "wish-list__item--done label" : ""}>{name}</label>
              {/* wish-list__item--done */}
            </li>
          ))}
        </ul>
        <button className="wish-clear">Achive done</button>
      </div >
    </>
  )
}

export default App
