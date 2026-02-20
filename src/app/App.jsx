import React, { useState } from 'react'
import './App.css'
import WishInput from '../input/WishInput.jsx'
import WishList from '../list/WishList.jsx'

const wishlist = [
  { id: 1, text: "PlayStation 5", done: false },
  { id: 2, text: "Macbook Pro", done: true },
  { id: 3, text: "Tesla Model S", done: false }
]

function App() {

  const [wishes, setWishes] = useState(wishlist)

  return (
    <>
      <h1>Mi wishlist</h1>
      <WishInput onNewWish={(a) => { setWishes((wishes) => [a, ...wishes]); }} />
      <WishList wishes={wishes} onWishDoneChange={() => { }} />
      <div id="list">
        <button className="wish-clear" onClick={() => setWishes(wishes.filter((wish) => !wish.done))}>Borrar ya cumplidos</button>
      </div>
    </>
  )
}

export default App
