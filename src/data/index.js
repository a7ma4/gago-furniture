import hero from "../assets/hero.webp";
import brandRef from "../assets/harbor.webp";
import productRef from "../assets/build.webp";

export const products = [
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

export const cats = [
  ["مكتب", ""],
  ["Dining", " "],
  ["Bedroom", " "],
  ["Office", ""],
  ["Outdoor", ""],
  ["Storage", ""],
];

export const money = (n) => new Intl.NumberFormat("en-EG").format(n) + " EGP";