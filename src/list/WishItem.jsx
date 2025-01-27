import PropTypes from "prop-types";

export default function WishItem({ wish, onDoneChange }) {
    return (
        <li
            key={wish.id}
            className={`wish-list_item  ${wish.done ? "wish-list__item--done" : ""}`}
        >
            <input
                type="checkbox"
                defaultChecked={wish.done}
                id={wish.id}
                onChange={(e) => onDoneChange(!e.target.value)}
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