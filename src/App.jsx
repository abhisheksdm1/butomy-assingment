import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Homelayout, Landing, Error } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        // element: <Register />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
