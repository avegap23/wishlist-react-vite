import PropTypes from "prop-types";
import { useState } from "react";

export default function WishItem({ wish, onDoneChange }) {
    const [done, setDone] = useState(wish.done)
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

WishItem.propTypes = {
    wish: PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        done: PropTypes.bool
    }).isRequired,
    onDoneChange: PropTypes.func.isRequired
}