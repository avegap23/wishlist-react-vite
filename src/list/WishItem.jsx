import PropTypes from "prop-types";
import { useState } from "react";

export default function WishItem({ wish, onDoneChange }) {
    // Hook de estado local
    const [done, setDone] = useState(wish.done)

    // Declaramos el elemento HTML que debería renderizar (deseo individual)
    return (
        <li
            key={wish.id}
            className={`wish-list_item  ${wish.done ? "wish-list__item--done" : ""}`}
        >
            <input
                type="checkbox"
                defaultChecked={wish.done}
                id={wish.id}
                onChange={(e) => {
                    wish.done = e.target.checked
                    setDone(wish.done)
                    // onDoneChange(wish.done)
                }}
            />
            <label htmlFor={wish.id}>{wish.text}</label>
        </li>
    )
}

// Declaramos el objeto "wish"
WishItem.propTypes = {
    wish: PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        done: PropTypes.bool
    }).isRequired,
    onDoneChange: PropTypes.func.isRequired
}