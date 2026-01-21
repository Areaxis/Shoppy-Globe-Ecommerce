// import react and lazy loading tools
import React, { Suspense, lazy } from "react";

// import router tools
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// lazy load header component
const Header = lazy(() => import("./components/Header"));

// lazy load product list component
const ProductList = lazy(() => import("./components/ProductList"));

// lazy load product detail component
const ProductDetail = lazy(() => import("./components/ProductDetail"));

// lazy load cart component
const Cart = lazy(() => import("./components/Cart"));

// lazy load checkout component
const Checkout = lazy(() => import("./components/Checkout"));

// lazy load not found component
const NotFound = lazy(() => import("./components/NotFound"));

// create router with routes
const router = createBrowserRouter([
  {
    // main route
    path: "/",

    // header component as layout
    element: <Header />,

    // error page for wrong routes
    errorElement: <NotFound />,

    // child routes
    children: [
      // home page route
      { path: "/", element: <ProductList /> },

      // product detail route with id
      { path: "/product/:id", element: <ProductDetail /> },

      // cart page route
      { path: "/cart", element: <Cart /> },

      // checkout page route
      { path: "/checkout", element: <Checkout /> }
    ]
  }
]);

function App() {
  return (
    // suspense for lazy loaded components
    <Suspense fallback={<h2>Loading...</h2>}>
      {/* provide router to app */}
      <RouterProvider router={router} />
    </Suspense>
  );
}

// export App component
export default App;
