// import custom hook to fetch product data
import useFetch from "../utils/useFetch";

// import ProductItem component
import ProductItem from "./ProductItem";

// import redux hooks
import { useSelector, useDispatch } from "react-redux";

// import action to update search value
import { setSearch } from "../utils/cartSlice";

// import css file for product list page
import "./ProductList.css";

function ProductList() {
  // create dispatch to send redux actions
  const dispatch = useDispatch();

  // fetch products from api
  const { data: products, error } = useFetch(
    "https://dummyjson.com/products"
  );

  // get search text from redux state
  const search = useSelector((state) => state.cart.search);

  // filter products based on search text
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // show error message if fetch fails
  if (error) return <h3>{error}</h3>;

  return (
    <>
      {/* search bar container */}
      <div className="product-search">

        {/* wrapper for input and icon */}
        <div className="search-wrapper">

          {/* search icon image */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
            alt="search"
            className="search-icon"
          />

          {/* search input field */}
          <input
            className="search-input"
            placeholder="Search products..."
            value={search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
        </div>
      </div>

      {/* grid to show all products */}
      <div className="product-grid">
        {filtered.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

// export ProductList component
export default ProductList;
