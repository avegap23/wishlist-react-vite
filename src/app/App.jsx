import React, { useState } from 'react'
import './App.css'
import WishInput from '../input/WishInput.jsx'
import WishList from '../list/WishList.jsx'

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
      <WishInput onNewWish={setWishes} />
      <WishList wishes={wishes} onWishDoneChange={() => { }} />
      <div id="list">
        <button className="wish-clear">Achive done</button>
      </div >
    </>
  )
}

export default App
