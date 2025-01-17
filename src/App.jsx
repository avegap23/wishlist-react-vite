import './App.css'

function App() {
  const wishlist = [
    { id: 1, name: "PlayStation 5", done: false },
    { id: 2, name: "Macbook Pro", done: true },
    { id: 3, name: "Tesla Model S", done: false }
  ]

  return (
    <>
      <h1>My wishlist</h1>
      <fieldset id="new wishes" className="wish-input">
        <p><input type="text" placeholder="Introduce tu deseo" className='wish-input__field' /></p>
        <p><button>Add wish</button></p>
        <legend className="wish-input__label">Adding new wishes</legend>
      </fieldset>
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
