import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import logo from "./assets/logo.jpg";
import hero from "./assets/hero.webp";
import brandRef from "./assets/harbor.webp";
import productRef from "./assets/build.webp";
import heroHome from "./assets/heroHome.webp";

import Onboarding from "./components/onBoarding.jsx";
import Header from "./components/header.jsx";
import BottomNav from "./components/bottomNav.jsx";
import Home from "./pages/home.jsx";

const products = [
  {
    id: 1,
    name: "Azure Desk",
    ar: "مكتب أزور",
    price: 7950,
    cat: "Office",
    img: productRef,
    tag: "Port Said Series",
  },
  {
    id: 2,
    name: "Lighthouse Chair",
    ar: "كرسي الفنار",
    price: 3400,
    cat: "Living",
    img: hero,
    tag: "Shell Collection",
  },
  {
    id: 3,
    name: "Harbor Sofa",
    ar: "كنبة الميناء",
    price: 18500,
    cat: "Living",
    img: brandRef,
    tag: "Signature",
  },
  {
    id: 4,
    name: "Delta Coffee Table",
    ar: "ترابيزة دلتا",
    price: 6400,
    cat: "Living",
    img: productRef,
    tag: "Woodline",
  },
  {
    id: 5,
    name: "Fanar Side Table",
    ar: "ترابيزة فنار",
    price: 3950,
    cat: "Dining",
    img: hero,
    tag: "Port Said Series",
  },
  {
    id: 6,
    name: "Canal Console",
    ar: "كونسول القناة",
    price: 8600,
    cat: "Dining",
    img: brandRef,
    tag: "Heritage",
  },
];
const cats = [
  ["Living Room", "غرفة المعيشة"],
  ["Dining", "غرفة الطعام"],
  ["Bedroom", "غرفة النوم"],
  ["Office", "المكاتب"],
  ["Outdoor", "الخارجي"],
  ["Storage", "التخزين"],
];









function Categories({ onNav }) {
  return (
    <>
      <Header onNav={onNav} />
      <main className="page">
        <section className="pageTitle">
          <span className="eyebrow">GAGO FURNITURE</span>
          <h1>الأقسام</h1>
          <p>مساحات مختلفة. نفس الروح.</p>
        </section>
        <div className="bigCats">
          {cats.map((c, i) => (
            <button
              key={c[0]}
              onClick={() => onNav("category", c[0])}
              style={{
                backgroundImage: `linear-gradient(0deg,#241a12cc,#0000),url(${[hero, brandRef, productRef, hero, brandRef, productRef][i]})`,
              }}
            >
              <div>
                <small>{c[1]}</small>
                <h2>{c[0]}</h2>
              </div>
              <span>→</span>
            </button>
          ))}
        </div>
      </main>
      <BottomNav page="categories" onNav={onNav} />
    </>
  );
}

function Listing({ category, onNav, onProduct }) {
  const list = category
    ? products.filter((x) => x.cat === category || category === "All")
    : products;
  return (
    <>
      <Header onNav={onNav} />
      <main className="page">
        <section className="listHead">
          <div>
            <span className="eyebrow">COLLECTION</span>
            <h1>{category || "كل المنتجات"}</h1>
            <p>{list.length * 18 + 6} قطعة</p>
          </div>
          <button className="pill">ترتيب ↕</button>
        </section>
        <div className="filters">
          <button>☷ تصفية</button>
          <button>السعر</button>
          <button>الخامة</button>
          <button>اللون</button>
        </div>
        <div className="productGrid listing">
          {list.map((p) => (
            <ProductCard key={p.id} p={p} onClick={() => onProduct(p)} />
          ))}
        </div>
      </main>
      <BottomNav page="categories" onNav={onNav} />
    </>
  );
}

function Product({ p, onNav, onAdd }) {
  return (
    <>
      <main className="detail">
        <button className="backBtn" onClick={() => onNav("home")}>
          ‹
        </button>
        <div
          className="detailImg"
          style={{
            backgroundImage: `linear-gradient(#0000,#1c150e55),url(${p.img})`,
          }}
        >
          <span>{p.tag}</span>
        </div>
        <section className="detailBody">
          <span className="eyebrow">{p.cat} · GAGO PORT SAID</span>
          <h1>{p.name}</h1>
          <h3>{p.ar}</h3>
          <div className="rating">
            ★★★★★ <span>4.8 (32)</span>
          </div>
          <div className="detailPrice">{money(p.price)}</div>
          <p className="desc">
            تصميم مستوحى من روح بورسعيد، يجمع بين البساطة والقوة في قطعة واحدة.
            تفاصيل هادئة، خامات مختارة، وشخصية تعيش معك.
          </p>
          <div className="specRow">
            <div>
              <small>المقاس</small>
              <b>120 × 60 × 75 cm</b>
            </div>
            <div>
              <small>الخامة</small>
              <b>Wood + Fabric</b>
            </div>
            <div>
              <small>اللون</small>
              <b>3 خيارات</b>
            </div>
          </div>
          <button className="addBtn" onClick={onAdd}>
            أضف إلى السلة <span>→</span>
          </button>
          <button className="storyLink" onClick={() => onNav("about")}>
            تفاصيل القطعة وقصتها <span>⌄</span>
          </button>
        </section>
      </main>
    </>
  );
}

function Cart({ cart, onNav, onQty }) {
  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
  return (
    <>
      <Header onNav={onNav} />
      <main className="page">
        <section className="pageTitle">
          <span className="eyebrow">YOUR PIECES</span>
          <h1>سلة مختارة</h1>
          <p>قطع مختارة من بورسعيد إلى بيتك.</p>
        </section>
        <div className="cartList">
          {cart.length ? (
            cart.map((x) => (
              <div className="cartItem" key={x.id}>
                <img src={x.img} />
                <div>
                  <small>{x.cat}</small>
                  <h3>{x.name}</h3>
                  <strong>{money(x.price)}</strong>
                  <div className="qty">
                    <button onClick={() => onQty(x.id, -1)}>−</button>
                    <b>{x.qty}</b>
                    <button onClick={() => onQty(x.id, 1)}>+</button>
                  </div>
                </div>
                <button className="trash" onClick={() => onQty(x.id, -99)}>
                  ×
                </button>
              </div>
            ))
          ) : (
            <div className="empty">
              السلة فاضية حاليًا.
              <br />
              <button className="darkPill" onClick={() => onNav("categories")}>
                ابدأ التسوق →
              </button>
            </div>
          )}
        </div>
        {cart.length > 0 && (
          <div className="summary">
            <div>
              <span>المجموع الفرعي</span>
              <b>{money(total)}</b>
            </div>
            <div>
              <span>الشحن</span>
              <b>250 EGP</b>
            </div>
            <div className="total">
              <span>الإجمالي</span>
              <b>{money(total + 250)}</b>
            </div>
            <button className="fullBtn" onClick={() => onNav("checkout")}>
              متابعة الشراء →
            </button>
          </div>
        )}
      </main>
      <BottomNav page="cart" onNav={onNav} />
    </>
  );
}

function Checkout({ cart, onNav }) {
  const total = cart.reduce((s, x) => s + x.price * x.qty, 0) + 250;
  return (
    <>
      <Header onNav={onNav} />
      <main className="page checkout">
        <section className="pageTitle">
          <span className="eyebrow">CHECKOUT</span>
          <h1>إتمام الطلب</h1>
        </section>
        <div className="steps">
          <b>1 البيانات</b>
          <span>2 الشحن</span>
          <span>3 الدفع</span>
        </div>
        <div className="form">
          <label>
            الاسم الكامل
            <input placeholder="أحمد محمد" />
          </label>
          <label>
            رقم الهاتف
            <input placeholder="01XXXXXXXXX" />
          </label>
          <label>
            المحافظة / المدينة
            <input placeholder="بورسعيد — مصر" />
          </label>
          <label>
            العنوان بالتفصيل
            <textarea placeholder="الحي، الشارع، رقم العقار"></textarea>
          </label>
        </div>
        <div className="pay">
          <h3>طريقة الدفع</h3>
          <button className="payOption active">● الدفع عند الاستلام</button>
          <button className="payOption">
            ○ بطاقة بنكية · Visa / Mastercard
          </button>
          <button className="payOption">○ فوري / InstaPay</button>
        </div>
        <div className="summary">
          <div>
            <span>الإجمالي</span>
            <b>{money(total)}</b>
          </div>
          <button className="fullBtn" onClick={() => onNav("success")}>
            تأكيد الطلب →
          </button>
        </div>
      </main>
    </>
  );
}

function About({ onNav }) {
  return (
    <>
      <Header onNav={onNav} />
      <main className="page about">
        <section
          className="aboutHero"
          style={{
            backgroundImage: `linear-gradient(#1e2d3844,#1e1a15aa),url(${hero})`,
          }}
        >
          <div>
            <span>GAGO FURNITURE</span>
            <h1>
              FROM LAND
              <br />
              TO SEA.
            </h1>
          </div>
        </section>
        <section className="storyBlock">
          <span className="eyebrow">THE STORY</span>
          <h2>بورسعيد كانت من البحر للبر... ورحلتنا إحنا العكس.</h2>
          <p>
            من مدينة اتبنت من البحر ووصلت العالم بقناة السويس، بنبني GAGO من أرض
            بورسعيد ونوصلها للعالم.
          </p>
        </section>
        <section className="timeline">
          <article>
            <b>1859</b>
            <h3>بداية الحكاية</h3>
            <p>طلعت أرض من البحر واتسمت بورسعيد.</p>
          </article>
          <article>
            <b>1869</b>
            <h3>فنار المدينة</h3>
            <p>علامة على الأفق وروح تتطلع للمستقبل.</p>
          </article>
          <article>
            <b>2023</b>
            <h3>ولدت GAGO</h3>
            <p>من أرض بورسعيد، بأيادي مصرية وبجودة تنافس العالم.</p>
          </article>
        </section>
        <section
          className="storyPhoto"
          style={{ backgroundImage: `url(${brandRef})` }}
        >
          <div>
            <span>BUILT LIKE THE CITY.</span>
            <h2>بسيط. قوي. وله قصة.</h2>
          </div>
        </section>
      </main>
      <BottomNav page="profile" onNav={onNav} />
    </>
  );
}

function Distributors({ onNav }) {
  return (
    <>
      <Header onNav={onNav} />
      <main className="page">
        <section className="pageTitle">
          <span className="eyebrow">FIND GAGO</span>
          <h1>موزعينا</h1>
          <p>المكان جزء من الحكاية.</p>
        </section>
        <div
          className="map"
          style={{
            backgroundImage: `linear-gradient(#33495766,#33495799),url(${hero})`,
          }}
        >
          <div className="mapPin">⌖</div>
          <div className="mapPin p2">⌖</div>
          <div className="mapPin p3">⌖</div>
        </div>
        <div className="locations">
          <div>
            <h3>GAGO Port Said</h3>
            <p>بورسعيد · شارع فلسطين</p>
            <button>الاتجاهات →</button>
          </div>
          <div>
            <h3>GAGO Cairo</h3>
            <p>القاهرة · للتجار والموزعين</p>
            <button>تفاصيل →</button>
          </div>
        </div>
      </main>
      <BottomNav page="profile" onNav={onNav} />
    </>
  );
}

function Success({ onNav }) {
  return (
    <main
      className="success"
      style={{
        backgroundImage: `linear-gradient(#f1e7dbcc,#f1e7dbdd),url(${hero})`,
      }}
    >
      <img src={logo} />
      <div className="check">✓</div>
      <span className="eyebrow">ORDER CONFIRMED</span>
      <h1>تم تأكيد طلبك بنجاح</h1>
      <p>قطعة من بورسعيد في طريقها إليك.</p>
      <strong>#GAGO4587</strong>
      <button className="darkPill" onClick={() => onNav("home")}>
        العودة للتسوق →
      </button>
      <small>FROM LAND TO SEA</small>
    </main>
  );
}

function Search({ onNav, onProduct }) {
  const [q, setQ] = useState("");
  const list = products.filter((p) =>
    (p.name + p.ar).toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <>
      <Header onNav={onNav} />
      <main className="page">
        <section className="pageTitle">
          <span className="eyebrow">SEARCH</span>
          <h1>ابحث في GAGO</h1>
        </section>
        <div className="searchBox">
          <Icon name="search" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="ابحث عن منتج أو فئة..."
          />
        </div>
        <div className="chips">
          {["مكاتب", "طاولات", "كراسي", "كنب", "غرف النوم"].map((x) => (
            <button onClick={() => setQ(x)} key={x}>
              {x}
            </button>
          ))}
        </div>
        <div className="productGrid">
          {list.map((p) => (
            <ProductCard key={p.id} p={p} onClick={() => onProduct(p)} />
          ))}
        </div>
      </main>
      <BottomNav page="home" onNav={onNav} />
    </>
  );
}

function Profile({ onNav }) {
  return (
    <>
      <Header onNav={onNav} />
      <main className="page">
        <section className="profileHead">
          <div className="avatar">أ</div>
          <div>
            <span className="eyebrow">WELCOME BACK</span>
            <h1>أحمد محمد</h1>
            <p>ahmed@example.com</p>
          </div>
        </section>
        <div className="menuList">
          {[
            ["طلباتي", "orders"],
            ["المفضلة", "wishlist"],
            ["عناويني", "profile"],
            ["طرق الدفع", "checkout"],
            ["موزعينا", "distributors"],
            ["عن GAGO", "about"],
            ["المساعدة والدعم", "profile"],
            ["الإعدادات", "profile"],
          ].map(([x, id]) => (
            <button key={x} onClick={() => onNav(id)}>
              <span>{x}</span>
              <b>→</b>
            </button>
          ))}
        </div>
      </main>
      <BottomNav page="profile" onNav={onNav} />
    </>
  );
}

function App() {
  // ✅ كل الـ useState فوق
  const [onboard, setOnboard] = useState(() => {
    return localStorage.getItem("gago_onboarded") !== "true";
  });
  const [page, setPage] = useState("home");
  const [selected, setSelected] = useState(products[0]);
  const [category, setCategory] = useState(null);
  const [cart, setCart] = useState([]);

  // ✅ done هنا جوه الـ function
  const done = () => {
    localStorage.setItem("gago_onboarded", "true");
    setOnboard(false);
  };

  // ✅ if واحدة بس بعد كل الـ useState
  if (onboard) return <Onboarding onDone={done} />;

  const nav = (p, arg) => {
    if (p === "menu") return;
    if (p === "category") { setCategory(arg); setPage("listing"); return; }
    if (p === "product") { setSelected(arg); setPage("product"); return; }
    setPage(p);
  };

  const add = () => setCart((c) => {
    const old = c.find((x) => x.id === selected.id);
    return old
      ? c.map((x) => (x.id === selected.id ? { ...x, qty: x.qty + 1 } : x))
      : [...c, { ...selected, qty: 1 }];
  });

  const qty = (id, d) => setCart((c) =>
    d === -99
      ? c.filter((x) => x.id !== id)
      : c.map((x) => x.id === id ? { ...x, qty: Math.max(1, x.qty + d) } : x)
  );

  let content;
  switch (page) {
    case "home": content = <Home onNav={nav} onProduct={(p) => nav("product", p)} />; break;
    case "categories": content = <Categories onNav={nav} />; break;
    case "listing": content = <Listing category={category} onNav={nav} onProduct={(p) => nav("product", p)} />; break;
    case "product": content = <Product p={selected} onNav={nav} onAdd={add} />; break;
    case "cart": content = <Cart cart={cart} onNav={nav} onQty={qty} />; break;
    case "checkout": content = <Checkout cart={cart} onNav={nav} />; break;
    case "about": content = <About onNav={nav} />; break;
    case "distributors": content = <Distributors onNav={nav} />; break;
    case "success": content = <Success onNav={nav} />; break;
    case "search": content = <Search onNav={nav} onProduct={(p) => nav("product", p)} />; break;
    case "profile":
    case "wishlist": content = <Profile onNav={nav} />; break;
    default: content = <Home onNav={nav} onProduct={(p) => nav("product", p)} />;
  }

  return <div className="app">{content}</div>;
}

// createRoot(document.getElementById("root")).render(<App />);
export default App;