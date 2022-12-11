import React from "react";
import { ToastContainer } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Header/>
        <Shop/>
      <Footer/>
    </div>
  );
}

export default App;
