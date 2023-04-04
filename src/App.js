import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/index";
import Layout from "./components/Layout";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/packageDetail/:id",
        element: <Detail />,
      },
    ],
  },
]);
const App = () => <RouterProvider router={router} />;

export default App;
