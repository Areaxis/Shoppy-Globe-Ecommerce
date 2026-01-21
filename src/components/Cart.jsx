// import hook to read data from redux store
import { useSelector } from "react-redux";

// import CartItem component to show each item
import CartItem from "./CartItem";

// import Link to move to other pages
import { Link } from "react-router-dom";

// import css file for cart page style
import "./Cart.css";

function Cart() {
  // get all cart items from redux state
  const items = useSelector((state) => state.cart.items);

  return (
    // main container for cart page
    <div className="cart-container">

      {/* title of cart page */}
      <h2 className="cart-title">Your Cart</h2>

      {/* show message when cart is empty */}
      {items.length === 0 && <p>Your cart is empty</p>}

      {/* loop through cart items and show each item */}
      {items.map((i) => (
        <CartItem key={i.id} item={i} />
      ))}

      {/* show checkout button only if cart has items */}
      {items.length > 0 && (
        <Link to="/checkout">
          <button className="checkout-btn">Proceed to Checkout</button>
        </Link>
      )}
    </div>
  );
}

// export Cart component
export default Cart;
