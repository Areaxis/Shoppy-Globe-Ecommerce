// import Link and Outlet for routing
import { Link, Outlet } from "react-router-dom";

// import hook to read data from redux store
import { useSelector } from "react-redux";

// import css file for header style
import "./Header.css";

function Header() {
  // get cart items from redux state
  const cartItems = useSelector((state) => state.cart.items);

  // count total quantity of items in cart
  const totalItems = cartItems.reduce((total, item) => total + item.qty, 0);

  return (
    <>
      {/* main navigation bar */}
      <nav className="navbar">

        {/* left side navigation links */}
        <div className="nav-links">

          {/* link to home page */}
          <Link to="/">Home</Link>

          {/* link to cart page */}
          <Link to="/cart" className="cart-link">
            Cart

            {/* cart icon image */}
            <span className="cart-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
                alt="cart"
                className="cart-icon"
              />
            </span>

            {/* show total cart item count */}
            <span className="cart-count">
              {totalItems}
            </span>
          </Link>
        </div>

        {/* website title */}
        <h2>Shoppy Globe E-Commerce</h2>

        {/* name and year text */}
        <div className="header-credit">
          © 2026 Khriesezo Peseyie
        </div>
      </nav>

      {/* container for page content */}
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

// export Header component
export default Header;
