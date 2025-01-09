import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Product from "./Components/Product";
import MainLayout from "./Components/MainLayout";
import Error from "./Components/Error";
import ProductsItem from "./Components/ProductItem";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,errorElement:<Error/>,
      children: [
        { path: '/', element: <Home /> },
        { path: '/products', element: <Product /> },
        { path: '/products/:id', element: <ProductsItem /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
