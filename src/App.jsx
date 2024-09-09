import React from "react";
import Navbar from "./Components/Navbar";
import "flowbite";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "./App.css";
import Register from "./Pages/Register";
import ManagerHome from "./Pages/Manager/ManagerHome";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./Auth/ProtectedRoute";
import { AuthProvider } from "./Auth/Contexts/AuhContexts";
import Profile from "./Pages/Manager/Profile";
import ContactList from "./Pages/Manager/ContactList";
import ContactForm from "./Pages/Manager/ContactForm";
import GroupList from "./Pages/Manager/GroupList";
import ContactEdit from "./Pages/Manager/EditContact/[id]";
import TaskManager from "./Pages/Manager/TaskManager";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/contact_manager" element={<ProtectedRoute> <ManagerHome /> </ProtectedRoute>}>
          <Route index element={<Profile />} />
          <Route path="contactList" element={<ContactList />} />
          <Route path="groupList" element={<GroupList />} />
          <Route path="contactForm" element={<ContactForm />} />
          <Route path="EditContact/:id" element={<ContactEdit />} />
          <Route path="TaskManager" element={<TaskManager />} />

        </Route>
      </>
    )
  );

  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  );
};

export default App;
