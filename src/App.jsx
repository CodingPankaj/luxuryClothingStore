import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { MainContextProvider } from "./context/MainContext";
import { Layout } from "./common/Layout";
import { Shop } from "./pages/Shop";
import { Cart } from "./pages/Cart";
import { Product } from "./pages/Product";

const allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <MainContextProvider>
      <RouterProvider router={allRoutes} />
    </MainContextProvider>
  );
}

export default App;
