import PropTypes from "prop-types";
import WishItem from "./WishItem.jsx";

export default function WishList({ wishes, onWishDoneChange }) {
    // Declaramos el elemento HTML que debería renderizar (la lista de deseos)
    return (
        <ul className="wish-list">
            {wishes.map((wish) => (
                <WishItem key={wish.id} wish={wish} onDoneChange={onWishDoneChange} />
            ))}
        </ul>
    )
}

// Declaramos el objeto "wishes"
WishList.propTypes = {
    wishes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            text: PropTypes.string,
            done: PropTypes.bool
        })
    ),
    onWishDoneChange: PropTypes.func.isRequired
}

WishList.defaultProps = {
    wishes: []
}
