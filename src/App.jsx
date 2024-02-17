import React from "react";
import Nav from "./components/Nav";
import About from "./components/about";
import Home from "./components/home"

import Blog from "./components/blog"
import Contact from "./components/contact"
function App() {
  

  return (
    <div>
      <Nav />
      <Home/>
      <About/>
       <Blog/>
      <Contact/>
    </div>
  );
}

export default App;
