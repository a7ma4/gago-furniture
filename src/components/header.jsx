import React from 'react';
import logo from "../assets/logo.webp";


function Icon({ name }) {
  const d =
    {
      search: "⌕",
      bag: "◫",
      heart: "♡",
      user: "◯",
      menu: "☰",
      back: "‹",
      arrow: "→",
      pin: "⌖",
      plus: "＋",
      minus: "−",
      filter: "≡",
    }[name] || "•";
  return <span className={"ico " + name}>{d}</span>;
}
const money = (n) => new Intl.NumberFormat("en-EG").format(n) + " EGP";
function Header({ onNav }) {
  return (
    <header className="topbar">
      <button className="iconBtn" onClick={() => onNav("menu")}>
        <i class="fa-solid fa-bars" style={{ fontSize: "21px" }}></i>
      </button>
      <button className="brand" onClick={() => onNav("home")}>
        <img src={logo} />
        
      </button>
      <div className="headActions">
        <button className="iconBtn" onClick={() => onNav("search")}>
          <i class="fa-solid fa-magnifying-glass" style={{ fontSize: "21px" }}></i>
        </button>
        <button className="iconBtn" onClick={() => onNav("cart")}>
         <i class="fa-solid fa-cart-shopping" style={{ fontSize: "21px" }}></i>
        </button>
      </div>
    </header>
  );
}

export default Header;