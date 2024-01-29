import { useState } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Completed from "./Pages/Completed"
import Contact from './Pages/Contact';

function App() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "Complete Task A",
      completed: false,
    },
    {
      id: "2",
      title: "Read Book",
      completed: true,
    },
    {
      id: "3",
      title: "Write Code",
      completed: true,
    },
  ]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home todos={todos} setTodos={setTodos} />} />
        <Route path="about" element={<About/>} />
        <Route path="contactus" element={<Contact/>} />
        <Route path="completed" element={<Completed todos={todos} />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
