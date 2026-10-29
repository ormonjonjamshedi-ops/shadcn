import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import translations from "./i18n"; 

const PRODUCTS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    price: 499,
    name: { tg: "Смартфон", ru: "Смартфон", en: "Smartphone" },
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    price: 899,
    name: { tg: "Ноутбук", ru: "Ноутбук", en: "Laptop" },
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    price: 79,
    name: { tg: "Гӯшмонак", ru: "Наушники", en: "Headphones" },
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    price: 149,
    name: { tg: "Соати ҳушманд", ru: "Умные часы", en: "Smartwatch" },
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
    price: 549,
    name: { tg: "Камера", ru: "Камера", en: "Camera" },
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
    price: 49,
    name: { tg: "Клавиатура", ru: "Клавиатура", en: "Keyboard" },
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    price: 25,
    name: { tg: "Муш", ru: "Мышь", en: "Mouse" },
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    price: 59,
    name: { tg: "Борхалта", ru: "Рюкзак", en: "Backpack" },
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    price: 89,
    name: { tg: "Кафши варзишӣ", ru: "Кроссовки", en: "Sneakers" },
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop",
    price: 69,
    name: { tg: "Қаҳвачӯшон", ru: "Кофеварка", en: "Coffee maker" },
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    price: 39,
    name: { tg: "Айнаки офтобӣ", ru: "Солнечные очки", en: "Sunglasses" },
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    price: 35,
    name: { tg: "Павербанк", ru: "Павербанк", en: "Power bank" },
  },
];

const NEW_PRODUCTS = [
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    price: 129,
    name: { tg: "Гӯшмонаки бесим", ru: "Беспроводные наушники", en: "Wireless Earbuds" },
  },
  {
    id: 14,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    price: 349,
    name: { tg: "Планшет", ru: "Планшет", en: "Tablet" },
  },
  {
    id: 15,
    image: "https://images.unsplash.com/photo-1615669797889-4c5d1c3c8c5a?w=400&h=400&fit=crop",
    price: 45,
    name: { tg: "Муши бозӣ", ru: "Игровая мышь", en: "Gaming Mouse" },
  },
  {
    id: 16,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
    price: 279,
    name: { tg: "Монитор 27\"", ru: "Монитор 27\"", en: "27\" Monitor" },
  },
  {
    id: 17,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop",
    price: 89,
    name: { tg: "SSD беруна", ru: "Внешний SSD", en: "External SSD" },
  },
  {
    id: 18,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop",
    price: 199,
    name: { tg: "Колонкаи бесим", ru: "Беспроводная колонка", en: "Bluetooth Speaker" },
  },
  {
    id: 19,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop",
    price: 59,
    name: { tg: "Заряди бесим", ru: "Беспроводная зарядка", en: "Wireless Charger" },
  },
  {
    id: 20,
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&h=400&fit=crop",
    price: 119,
    name: { tg: "Камераи веб", ru: "Веб-камера", en: "Webcam" },
  },
];

const TECH_PRODUCTS = [
  {
    id: 21,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    price: 1299,
    name: { tg: "МакБук", ru: "Макбук", en: "MacBook" },
  },
  {
    id: 22,
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400&h=400&fit=crop",
    price: 799,
    name: { tg: "iPhone", ru: "Айфон", en: "iPhone" },
  },
  {
    id: 23,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop",
    price: 399,
    name: { tg: "Эпл Вотч", ru: "Эппл Вотч", en: "Apple Watch" },
  },
  {
    id: 24,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
    price: 249,
    name: { tg: "ЭйрПодс", ru: "ЭйрПодс", en: "AirPods" },
  },
  {
    id: 25,
    image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&h=400&fit=crop",
    price: 599,
    name: { tg: "Плейстейшн 5", ru: "Плейстейшн 5", en: "PlayStation 5" },
  },
  {
    id: 26,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop",
    price: 449,
    name: { tg: "Xbox Series X", ru: "Xbox Series X", en: "Xbox Series X" },
  },
  {
    id: 27,
    image: "https://images.unsplash.com/photo-1617802690658-1173a812650d?w=400&h=400&fit=crop",
    price: 189,
    name: { tg: "Роутери Wi-Fi 6", ru: "Роутер Wi-Fi 6", en: "Wi-Fi 6 Router" },
  },
  {
    id: 28,
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop",
    price: 349,
    name: { tg: "Принтери лазерӣ", ru: "Лазерный принтер", en: "Laser Printer" },
  },
];

const ALL_PRODUCTS = [...PRODUCTS, ...NEW_PRODUCTS, ...TECH_PRODUCTS];

function store(key, value) {
  try {
    if (value === undefined) return localStorage.getItem(key);
    localStorage.setItem(key, value);
  } catch {
    return null;
  }
}

export default function App() {
  const [lang, setLang] = useState(() => {
    const saved = store("lang");
    return translations[saved] ? saved : "tg";
  });

  const [dark, setDark] = useState(() => {
    const saved = store("theme");
    return saved
      ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [cart, setCart] = useState({});
  const [cartOpen, setCartOpen] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    store("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    document.documentElement.lang = lang;
    store("lang", lang);
  }, [lang]);

  const addToCart = (id) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));

  const changeQty = (id, delta) =>
    setCart((c) => {
      const next = { ...c, [id]: (c[id] || 0) + delta };
      if (next[id] <= 0) delete next[id];
      return next;
    });

  const cartItems = ALL_PRODUCTS.filter((p) => cart[p.id]);
  const count = cartItems.reduce((sum, p) => sum + cart[p.id], 0);
  const total = cartItems.reduce((sum, p) => sum + p.price * cart[p.id], 0);

  const ProductCard = ({ product }) => (
    <div className="h-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
      <div className="relative h-40 overflow-hidden rounded-xl">
        <img src={product.image} alt={product.name[lang]}className="h-full w-full object-cover transition hover:scale-105"/>
      </div>
      <h3 className="mt-3 font-semibold">{product.name[lang]}</h3>
      <p className="font-bold text-indigo-600 dark:text-indigo-400">${product.price}</p>
      <button onClick={() => addToCart(product.id)} className="mt-3 w-full rounded-lg bg-indigo-600 py-2 text-sm font-medium text-white hover:bg-indigo-700 active:scale-95">
         {t.add}</button>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-900 dark:text-slate-100">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">🛍️ {t.shop}</span>
          <div className="flex items-center gap-2">
            <select value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-sm text-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100">
              <option value="tg">Тоҷикӣ</option>
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
            <button onClick={() => setDark(!dark)} aria-label="Toggle theme"
              className="rounded-lg border border-slate-300 px-2 py-1 hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
            >{dark ? "☀️" : "🌙"}</button>

            <button onClick={() => setCartOpen(true)} className="flex items-center gap-1 rounded-lg bg-indigo-600 px-3 py-1 text-sm font-medium text-white hover:bg-indigo-700">
              🛒 {t.cart}
              {count > 0 && (
                <span className="rounded-full bg-white px-1.5 text-xs font-bold text-indigo-600">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <section className="mb-8">
          <h1 className="text-3xl font-extrabold">{t.title}</h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">{t.sub}</p>
        </section>

        
        <h2 className="mb-4 text-xl font-bold">{t.products}</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            560: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="pb-10 [--swiper-theme-color:#6366f1] [--swiper-navigation-size:24px]">
          {PRODUCTS.map((p) => (
            <SwiperSlide key={p.id} className="!h-auto">
              <ProductCard product={p} />
            </SwiperSlide>
          ))}
        </Swiper>

        <h2 className="mb-4 mt-10 text-xl font-bold">{t.newProducts}</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            560: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="pb-10 [--swiper-theme-color:#6366f1] [--swiper-navigation-size:24px]">
          {NEW_PRODUCTS.map((p) => (
            <SwiperSlide key={p.id} className="!h-auto">
              <ProductCard product={p} />
            </SwiperSlide>
          ))}
        </Swiper>

        <h2 className="mb-4 mt-10 text-xl font-bold">{t.tech}</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            560: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },}}
          className="pb-10 [--swiper-theme-color:#6366f1] [--swiper-navigation-size:24px]">
          {TECH_PRODUCTS.map((p) => (
            <SwiperSlide key={p.id} className="!h-auto">
              <ProductCard product={p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>

      <footer className="py-6 text-center text-sm text-slate-500 dark:text-slate-400">
        {t.footer}
      </footer>

      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40" onClick={() => setCartOpen(false)}>
          <div className="h-full w-80 max-w-full overflow-y-auto bg-white p-5 dark:bg-slate-800"onClick={(e) => e.stopPropagation()}>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold">{t.cart}</h2>
              <button
                onClick={() => setCartOpen(false)} aria-label="Close" className="text-2xl leading-none">×</button>
            </div>

            {cartItems.length === 0 ? (
              <p className="text-slate-500 dark:text-slate-400">{t.empty}</p>
            ) : (
              <>
                <ul className="space-y-3">
                  {cartItems.map((p) => (
                    <li key={p.id} className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <img src={p.image} alt={p.name[lang]} className="h-10 w-10 rounded-lg object-cover"/>
                        <span className="text-sm">{p.name[lang]}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => changeQty(p.id, -1)}
                          className="h-6 w-6 rounded border border-slate-300 leading-none dark:border-slate-600">−</button>
                        <span className="w-4 text-center text-sm">{cart[p.id]}</span>
                        <button
                          onClick={() => changeQty(p.id, 1)}
                          className="h-6 w-6 rounded border border-slate-300 leading-none dark:border-slate-600"
                        >
                          +
                        </button>
                        <b className="w-14 text-right text-sm">
                          ${p.price * cart[p.id]}
                        </b>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex justify-between border-t border-slate-200 pt-3 font-bold dark:border-slate-700">
                  <span>{t.total}</span>
                  <span>${total}</span>
                </div>

                <button
                  onClick={() => setCart({})}
                  className="mt-4 w-full rounded-lg border border-slate-300 py-2 text-sm hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-700"
                >
                  {t.clear}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}