// import hook to get router error
import { useRouteError, Link } from "react-router-dom";

// import css file for not found page
import "./NotFound.css";

function NotFound() {
  // get error information from router
  const error = useRouteError();

  return (
    // main container for error page
    <div className="notfound">

      {/* show error status in heading */}
      <h2>{error?.status} Page Not Found</h2>

      {/* show error message */}
      <p>Error Message: {error?.statusText || error?.message}</p>

      {/* show error status code */}
      <p>Status Code: {error?.status}</p>

      {/* add space */}
      <br />

      {/* link to go back to home page */}
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

// export NotFound component
export default NotFound;
