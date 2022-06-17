import { Component, lazy } from 'solid-js';
import { Routes, Route } from "solid-app-router"
const Login = lazy(() => import("./Login"));
const Form = lazy(() => import("./Form"));


const App: Component = () => {
  

  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/form" element={<Form/>} />
    </Routes>
  );
};

export default App;
