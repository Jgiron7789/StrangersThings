import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import NotFound from "./NotFound";
import Posts from "./routes/Posts";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Root from "./routes/root";
import Profile from "./routes/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "register",
        element: <Register/>,
      },
      {
        path: "login",
        element: <Login/>,
      }
    ],
    }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;