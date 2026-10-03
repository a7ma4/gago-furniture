import React from 'react';
import Header from "../components/header.jsx";
import BottomNav from "../components/bottomNav.jsx";
import ProductCard from "../components/productCard.jsx";
import { products, cats, money } from "../data";

import hero from "../assets/hero.webp";
import brandRef from "../assets/harbor.webp";
import productRef from "../assets/build.webp";
import heroHome from "../assets/heroHome.webp";
import ourStory from "../assets/ourStory.webp";
import windowFrame from "../assets/window.webp";
import shell from "../assets/shell.png";
import desk from "../assets/desk.png";
// import desk1 from "../assets/desk1.png";
import desk3 from "../assets/desk2.png";
import desk2 from "../assets/desk3.png";
import footer from "../assets/footer.png";

function Home({ onNav, onProduct }) {
  return (
    <>
      <Header onNav={onNav} />
      <main className="page">
        <section
          className="hero"
          style={{
            backgroundImage: `linear-gradient(180deg,#1b2b3630,#1f1710dd),url(${heroHome})`,
          }}
        >
          <div className="heroText">
            <div className="eyebrow light">GAGO FURNITURE · PORT SAID</div>
            <h1>
              FROM LAND
             
              <em>TO SEA.</em>
            </h1>
            <p>
              Furniture with a story.
              <br />
              من بورسعيد... إلى العالم.
            </p>
            <button className="lightPill" onClick={() => onNav("categories")}>
              استكشف المجموعة <span>→</span>
            </button>
          </div>
        </section>


        <section className="storyStrip">
          <div>
            <span>OUR STORY</span>
            <h2>
              مدينة بدأت بالبحر
              <br />
              وأثاث يبدأ من الأرض
            </h2>
            <p>Born in Port Said. Built like the city.</p>
            <button className="lightPill2" onClick={() => onNav("about")}>
              اكتشف قصتنا <b>→</b>
            </button>
          </div>
          <img src={ourStory} />
        </section>


       <div className="marquee">
  <div className="marquee-track">
    <div className="marquee-content">
      FROM PORT SAID TO THE WORLD · BUILT LIKE THE CITY · FROM LAND TO SEA ·{" "}
      <span>GAGO FURNITURE</span> ·
    </div>

    <div className="marquee-content">
      FROM PORT SAID TO THE WORLD · BUILT LIKE THE CITY · FROM LAND TO SEA ·{" "}
      <span>GAGO FURNITURE</span> ·
    </div>
  </div>
</div>



        <section className="section">
          <div className="sectionHead">
            <div>
              <span className="eyebrow">SHOP BY SPACE</span>
              <h2>اختار مساحتك</h2>
            </div>
            <button className="textBtn" onClick={() => onNav("categories")}>
              الكل →
            </button>
          </div>
          <div className="catGrid">
  {cats.slice(0, 4).map((c, i) => (
    <button
      className="product-card"
      key={c[0]}
      onClick={() => onNav("category", c[0])}
    > 
    <img className="frame" src={windowFrame} alt="" />
      
      <img
        className="product-image"
        src={[desk, desk3, desk2, desk3][i]}
        alt={c[0]}
      />
     
      <div className="product-info">
        <span>{c[0]}</span>
        <small>{c[1]}</small>
      </div>
    </button>
  ))}
</div>
        </section>


        <section className="shellSection">
          <div className="shellCopy">
            <span className="eyebrow">THE SHELL COLLECTION</span>
            <h2>لؤلؤة من بورسعيد</h2>
            <p>الصدفة أصبحت كارد... والمنتج هو اللؤلؤة.</p>
          </div>
      <div className="shellGrid">
  {products.slice(0, 3).map((p, i) => (
    <button
      key={p.id}
      className="shellCard"
      onClick={() => onProduct(p)}
    >
      <div className="shellArt">
        <img className="shellFrame" src={shell} alt="" />
        <img className="shellProduct" src={[desk, desk3, desk2][i]} alt={p.name} />
      </div>
      <strong>{p.name}</strong>
      <small>{money(p.price)}</small>
    </button>
  ))}
</div>
        </section>
        {/* <section className="section darkSection">
          <div className="eyebrow">FROM PORT SAID</div>
          <h2>
            إرث معماري
            <br />
            <em>يصنع الفرق.</em>
          </h2>
          <p>
            مستوحى من الفلل الخشبية، الفنار، والميناء القديم — لكن بلغة أثاث
            معاصرة.
          </p>
          <button className="outlineLight" onClick={() => onNav("about")}>
            رحلة البراند →
          </button>
        </section> */}


        <section className="section">
          <div className="sectionHead">
            <div>
              <span className="eyebrow">FEATURED PIECES</span>
              <h2>قطع لها حضور</h2>
            </div>
            <button className="textBtn" onClick={() => onNav("categories")}>
              تسوق الكل →
            </button>
          </div>
          <div className="productGrid">
            {products.map((p, i) => (
              <ProductCard
                key={p.id}
                p={{ ...p, img: [desk, desk, desk, desk, desk, desk][i] }}
                onClick={() => onProduct(p)}
              />
            ))}
          </div>
        </section>
        <section
          className="find"
          style={{
            backgroundImage: `url(${footer})`,
          }}
        >
          <span>FIND GAGO</span>
          <h2>المكان جزء من الحكاية.</h2>
          <p>اعرف أقرب موزع ومعرض ليك.</p>
          <button className="lightPill" onClick={() => onNav("distributors")}>
            ابحث عن موزع →
          </button>
        </section>
      </main>
      <BottomNav page="home" onNav={onNav} />
    </>
  );
}

export default Home;
