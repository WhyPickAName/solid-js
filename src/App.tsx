import { Component, lazy } from 'solid-js';
import { Routes, Route } from "solid-app-router"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const Login = lazy(() => import("./Login"));
const Form = lazy(() => import("./Form"));


const App: Component = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDiriWdr70s6D9DkO_P8Ych5mf5eYwBvNc",
    authDomain: "solid-js.firebaseapp.com",
    projectId: "solid-js",
    storageBucket: "solid-js.appspot.com",
    messagingSenderId: "851376742980",
    appId: "1:851376742980:web:4f5882ee800a9a1ca75211",
    measurementId: "G-FQ5CCCYWR2"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/form" element={<Form/>} />
    </Routes>
  );
};

export default App;
