import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import CreatePost from "./pages/CreatePost";
import NotFound from "./NotFound";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "createPost",
        element: <CreatePost />,
      },
      {
        path: "login",
        element: <Login />,
      },
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
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;