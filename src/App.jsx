import './App.css'

function App() {
  const wishlist = [
    { id: 1, name: "PlayStation 5", done: false },
    { id: 2, name: "Macbook Pro", done: false },
    { id: 3, name: "Tesla Model S", done: false }
  ]

  return (
    <>
      <h1>My wishlist</h1>
      <fieldset id="new wishes">
        <p><input type="text" placeholder="Introduce tu deseo" /></p>
        <p><button>Add wish</button></p>
        <legend>Adding new wishes</legend>
      </fieldset>
      <div id="list">
        <ul>
          {wishlist.map(({ id, name, done }) => (
            <li key={id}>
              <input type="checkbox" defaultChecked={done} id={id} />
              <label htmlFor={id}>{name}</label>
            </li>
          ))}
        </ul>
        <button>Achive done</button>
      </div>
    </>
  )
}

export default App
