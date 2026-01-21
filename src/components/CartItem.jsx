// import hook to send actions to redux
import { useDispatch } from "react-redux";

// import Link from react-router-dom to turn item titles into links
import { Link } from "react-router-dom";

// import cart actions
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../utils/cartSlice";

// import css file for cart item style
import "./CartItem.css";

function CartItem({ item }) {
  // create dispatch to send actions
  const dispatch = useDispatch();

  return (
    // main container for one cart item
    <div className="cart-item">

      {/* left side with image and text */}
      <div className="item-info">

        {/* product image */}
        <img src={item.thumbnail} alt={item.title} className="cart-img" />

        {/* product title and price */}
        <div className="item-text">
          <h4 className="item-title"><Link to={`/product/${item.id}`}>{item.title}</Link></h4>
          <p>Price: ${item.price} or ₹{Math.trunc(item.price*90)}</p>
        </div>
      </div>

      {/* quantity controls */}
      <div className="qty-controls">

        {/* decrease quantity button */}
        <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>

        {/* show current quantity */}
        <span>{item.qty}</span>

        {/* increase quantity button */}
        <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
      </div>

      {/* remove item from cart */}
      <button
        className="remove-button"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        Remove
      </button>
    </div>
  );
}

// export CartItem component
export default CartItem;
