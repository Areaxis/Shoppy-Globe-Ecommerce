// import hook to read route parameter
import { useParams, Link } from "react-router-dom";

// import custom hook to fetch product data
import useFetch from "../utils/useFetch";

// import css file for product detail page
import "./ProductDetail.css";

function ProductDetail() {
  // get product id from url
  const { id } = useParams();

  // fetch product details using id
  const { data: product, error } = useFetch(
    `https://dummyjson.com/products/${id}`
  );

  // show error message if fetch fails
  if (error) return <h3>{error}</h3>;

  // show loading text while data is loading
  if (!product) return <h3>Loading...</h3>;

  return (
    // main container for product detail page
    <div className="detail-container">

      {/* product image section */}
      <div className="detail-image">
        <img
          loading="lazy"
          src={product.thumbnail}
          alt={product.title}
        />
      </div>

      {/* product information section */}
      <div className="detail-info">

        {/* product title */}
        <h2>{product.title}</h2>

        {/* product description */}
        <p className="detail-desc">
          {product.description}
        </p>

        {/* product price in usd and inr */}
        <p>
          <strong>Price:</strong> ${product.price} or ₹
          {Math.trunc(product.price * 90)}
        </p>

        {/* button to go back to product list */}
        <Link to="/">
          <button className="back-btn">Back to Products</button>
        </Link>
      </div>
    </div>
  );
}

// export ProductDetail component
export default ProductDetail;
