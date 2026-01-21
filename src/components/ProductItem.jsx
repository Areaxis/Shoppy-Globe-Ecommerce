// import hook to send actions to redux
import { useDispatch } from "react-redux";

// import action to add product to cart
import { addToCart } from "../utils/cartSlice";

// import Link for routing
import { Link } from "react-router-dom";

// import css file for product item style
import "./ProductItem.css";

function ProductItem({ product }) {
  // create dispatch to send redux actions
  const dispatch = useDispatch();

  return (
    // main card for single product
    <div className="product-card">

      {/* product image */}
      <img
        loading="lazy"
        src={product.thumbnail}
        alt={product.title}
      />

      {/* product title */}
      <h3>{product.title}</h3>

      {/* link to product detail page */}
      <Link to={`/product/${product.id}`}>
        View Details
      </Link>

      {/* button to add product to cart */}
      <button onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>
    </div>
  );
}

// export ProductItem component
export default ProductItem;
