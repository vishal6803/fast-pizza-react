import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Cart from "./features/cart/Cart"
import CreateOrder from "./features/order/CreateOrder"
import Order from "./features/order/Order"
import Menu,{loader as menuLoader} from "./features/menu/Menu";
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [{
        path:"/",
        element:<Home/>
      },
      {
        path:"/cart",
        element:<Cart />
      },
      {
        path:"order/new",
        element:<CreateOrder />
      },
      {
        path:"order/:id",
        element:<Order/>
      },
      {
        path:"/menu",
        element : <Menu />,
        loader:menuLoader,
      }
    
    
    ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
