// import hook to send actions to redux
import { useDispatch, useSelector } from "react-redux";

// import action to clear cart
import { clearCart } from "../utils/cartSlice";

// import router hooks and Link
import { useNavigate, Link } from "react-router-dom";

// import useState for form data
import { useState } from "react";

// import css file for checkout page
import "./Checkout.css";

function Checkout() {
  // create dispatch to send redux actions
  const dispatch = useDispatch();

  // navigation hook to move pages
  const nav = useNavigate();

  // get cart items from redux state
  const items = useSelector((state) => state.cart.items);

  // state to check if order is placed
  const [ordered, setOrdered] = useState(false);

  // state for form inputs
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  // calculate total price
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // function to check form values
  const validateForm = () => {
    // check if any field is empty
    if (!name || !address || !phone) {
      alert("All fields are required.");
      return false;
    }

    // check phone number length and digits
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Phone number must be exactly 10 digits.");
      return false;
    }

    return true;
  };

  // function to place order
  const placeOrder = () => {
    // stop if validation fails
    if (!validateForm()) {
      return;
    }

    // clear cart items
    dispatch(clearCart());

    // set order status to true
    setOrdered(true);

    // redirect to home after 3 seconds
    setTimeout(() => {
      nav("/");
    }, 3000);
  };

  // show success message after order
  if (ordered) {
    return (
      <div className="checkout-container">
        <h2 className="checkout-title">Order placed.</h2>

        <p>Redirecting you to home page...</p>

        <p>
          {/* link to home page if redirect fails */}
          If your browser does not support redirection, click{" "}
          <Link to="/" className="redirect-link">here</Link>
        </p>
      </div>
    );
  }

  return (
    // main checkout form container
    <div className="checkout-container">
      <h2>Checkout</h2>

      {/* cart summary section */}
      <div className="checkout-summary">
        <h3>Order Summary</h3>

        {/* list all cart items */}
        {items.map((item) => (
          <p key={item.id}>
            <Link to={`/product/${item.id}`}>{item.title}</Link> x {item.qty}
          </p>
        ))}

        {/* show total price */}
        <p>
          <strong>Total Price:</strong> ${Math.trunc(totalPrice)} or ₹{Math.trunc(totalPrice*90)}
        </p>
      </div>

      {/* input for name */}
      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      {/* input for address */}
      <input
        placeholder="Enter address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />

      {/* input for phone number */}
      <input
        placeholder="Enter phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        maxLength="10"
      />

      {/* button to place order */}
      <button className="place-order-btn" onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
}

// export Checkout component
export default Checkout;
