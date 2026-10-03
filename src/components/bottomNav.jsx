import React from 'react';

function BottomNav({ page, onNav }) {
  return (
    <nav className="bottomNav">
      {[
        ["home", "الرئيسية", "⌂"],
        ["categories", "الأقسام", "▦"],
        ["wishlist", "المفضلة", "♡"],
        ["cart", "السلة", "◫"],
        ["profile", "حسابي", "◯"],
      ].map(([id, l, ic]) => (
        <button
          key={id}
          className={page === id ? "active" : ""}
          onClick={() => onNav(id)}
        >
          <b>{ic}</b>
          <span>{l}</span>
        </button>
      ))}
    </nav>
  );
}

export default BottomNav;
