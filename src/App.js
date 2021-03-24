import React, { useState } from "react";
import "./styles.css";

const Menu = ({ open }) => {
  return (
    <ul id="menu" className={open ? "open" : ""}
    >
      <a href="/">
        <li>Home</li>
      </a>
      <a href="/">
        <li>About</li>
      </a>
      <a href="/">
        <li>Info</li>
      </a>
      <a href="/">
        <li>Contact</li>
      </a>
    </ul>
  );
};

const Burger = ({ open, setOpen }) => {
  return (
    <div
      id="burger"
      className={open ? "open" : ""}
      onClick={() => setOpen(!open)}
    >
      <div className="ingredients" id="top-bun"></div>
      <div className="ingredients" id="meat"></div>
      <div className="ingredients" id="bottom-bun"></div>
    </div>
  );
};

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default App;
