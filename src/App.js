import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import About from "./components/About/About"
import Shop from "./components/Shop/Shop"
import Orders from "./components/Orders/Orders"
import Inventory from "./components/Inventory/Inventory"
import { productsAndCartLoader } from './Loaders/ProductAndCardLoader';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => {
            return fetch('products.json')
          },
          element: <Shop></Shop>
        },
        {
          path: "/orders",
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: "/inventory",
          element: <Inventory></Inventory>
        },
        {
          path: "about",
          element: <About></About>

        },

      ]
    },


  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
