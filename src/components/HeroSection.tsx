import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const LOGO = "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/ccea978b-e785-40af-a733-23243a096fe9.jpg";
const HERO_IMG = "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/files/388ca8e2-d3bd-4383-98d7-5ebd33d9d83a.jpg";



const BEARDED_DRAGON_IMGS = [
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/f4f3f9e2-86e1-4a44-a5be-33d01d671c4e.jpg",
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/c20fc8f6-c917-4026-838e-eb12122169ac.jpg",
];

const POLOZ_IMGS = [
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/251f22d5-4c9f-4469-9262-e320b07aae44.jpg",
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/645d49d9-4a5f-42d1-892f-71b79f2a82e9.jpg",
];

const CHAMELEON_IMGS = [
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/51eefb17-4601-409f-840b-56042a05a11f.png",
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/502e6078-68f1-4f6a-b82a-c01b030959b8.jpg",
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/341bc78d-28b3-4549-82d0-6f78ec4fc9c3.png",
];


const PHONE = "+79143428274";
const PHONE_DISPLAY = "+7 914 342-82-74";

const SERVICES = [
  {
    emoji: "🏠",
    image: "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/4ed8f3e0-f031-446e-96e1-9fe11b45fcfe.png",
    title: "Контактный зоопарк в Артёме",
    subtitle: "Наша резиденция — зоопарк в Артёме",
    desc: "Добро пожаловать в наше королевство рептилий! г. Артём, Лазо 11, ДЦ «Непоседа». Полное погружение для всей семьи — можно трогать, фотографировать и задавать вопросы.",
    price: "800 ₽",
    unit: "билет",
    cta: "Купить билет",
    highlight: true,
  },
  {
    emoji: "🎉",
    image: "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/55d2486f-e8ad-4a00-90e3-dc1979e408ea.png",
    title: "Выезд на праздник — Премиум",
    desc: "День рождения, свадьба, корпоратив. Главный артист вечера — императорский удав! Шоу, фото, эмоции на весь год.",
    price: "10 000 ₽",
    unit: "в час",
    cta: "Организовать праздник",
    highlight: false,
  },
  {
    emoji: "🚌",
    image: "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/907e4d0b-44a3-45e2-bd3c-a66f5f6cefad.jpg",
    title: "Урок живой природы — выезд в школу",
    desc: "Мы приедем к вам с командой удивительных питомцев. Хамелеон, агама, эублефары, полозы — живой урок биологии, который невозможно забыть.",
    price: "300 ₽",
    unit: "с ребёнка",
    cta: "Забронировать выезд",
    highlight: false,
  },
];

const ANIMALS = [
  { emoji: "🦎", name: "Хамелеон Гоша", desc: "Мастер маскировки" },
  { emoji: "🐉", name: "Бородатая агама", desc: "Дружелюбный «дракончик» с добрым характером" },
  { emoji: "🐍", name: "Змеи", desc: "Вызывают не страх, а искренний интерес" },
];


function BeardedDragonCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BEARDED_DRAGON_IMGS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-2xl w-full" style={{ position: "relative", paddingBottom: "100%", overflow: "hidden" }}>
      {BEARDED_DRAGON_IMGS.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Бородатая агама ${i + 1}`}
          className="object-cover transition-opacity duration-700"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}
      <div style={{ position: "absolute", bottom: 12, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 8, zIndex: 10 }}>
        {BEARDED_DRAGON_IMGS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: 8, height: 8, borderRadius: "50%",
              background: i === current ? "hsl(142,60%,55%)" : "rgba(255,255,255,0.4)",
              border: "none", cursor: "pointer", padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function PolozCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % POLOZ_IMGS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-2xl w-full" style={{ position: "relative", paddingBottom: "100%", overflow: "hidden" }}>
      {POLOZ_IMGS.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Полоз ${i + 1}`}
          className="object-cover transition-opacity duration-700"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}
      <div style={{ position: "absolute", bottom: 12, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 8, zIndex: 10 }}>
        {POLOZ_IMGS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: 8, height: 8, borderRadius: "50%",
              background: i === current ? "hsl(142,60%,55%)" : "rgba(255,255,255,0.4)",
              border: "none", cursor: "pointer", padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ChameleonCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % CHAMELEON_IMGS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-2xl w-full" style={{ position: "relative", paddingBottom: "100%", overflow: "hidden" }}>
      {CHAMELEON_IMGS.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Хамелеон ${i + 1}`}
          className="object-cover transition-opacity duration-700"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}
      <div style={{ position: "absolute", bottom: 12, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 8, zIndex: 10 }}>
        {CHAMELEON_IMGS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: 8, height: 8, borderRadius: "50%",
              background: i === current ? "hsl(142,60%,55%)" : "rgba(255,255,255,0.4)",
              border: "none", cursor: "pointer", padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <>
      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Экзотические рептилии" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(135deg, hsla(150,40%,4%,0.96) 0%, hsla(142,35%,8%,0.72) 50%, hsla(150,40%,4%,0.92) 100%)"
          }} />
        </div>


        <div className="container mx-auto px-4 pt-24 relative z-10">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background: "hsla(142,60%,42%,0.15)", border: "1px solid hsla(142,60%,42%,0.4)" }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(142,60%,50%)" }} />
                <span className="text-sm" style={{ color: "hsl(142,60%,65%)" }}>г. Артём · Лазо 11, ДЦ «Непоседа»</span>
              </div>
              <div className="inline-flex md:hidden items-center gap-2 px-4 py-2 rounded-full"
                style={{ background: "hsla(142,60%,42%,0.15)", border: "1px solid hsla(142,60%,42%,0.4)" }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(142,60%,50%)" }} />
                <span className="font-cormorant text-base font-semibold tracking-wide" style={{ color: "hsl(142,60%,70%)" }}>Зоопарк рептилий</span>
              </div>
            </div>

            <h1 className="font-cormorant font-bold leading-none mb-4 uppercase"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}>
              Экзотариум<br />
              <span className="shimmer-text">Кулаковых</span>
            </h1>

            <p className="text-xl font-cormorant italic mb-4" style={{ color: "hsl(43,74%,62%)" }}>
              Мир чешуи, чудес и живых эмоций
            </p>

            <p className="text-base leading-relaxed mb-10 max-w-lg" style={{ color: "hsla(45,30%,92%,0.65)" }}>
              Хамелеон, что меняет цвет у вас на ладони. Бородатая агама с добрым характером.
              Императорский удав — главная звезда любого праздника.
              Приходите — здесь страх превращается в восхищение.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href={`tel:${PHONE}`}>
                <button className="btn-gold px-8 py-4 rounded-full text-base font-semibold flex items-center gap-2 animate-pulse-gold">
                  <Icon name="Phone" size={18} />
                  {PHONE_DISPLAY}
                </button>
              </a>
              <a href="#services">
                <button className="px-8 py-4 rounded-full text-base font-semibold transition-all hover:bg-white/10"
                  style={{ border: "1px solid hsla(142,60%,42%,0.5)", color: "hsl(142,60%,60%)" }}>
                  Наши услуги →
                </button>
              </a>
              <a href="https://www.vl.ru/ekzotariumm?lsearch=экзотариум&utm_source=vl.ru&utm_medium=header_search#comments" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 rounded-full text-base font-semibold transition-all hover:bg-white/10 flex items-center gap-2"
                  style={{ border: "1px solid hsla(43,74%,62%,0.5)", color: "hsl(43,74%,62%)" }}>
                  <Icon name="Star" size={18} />
                  Отзывы
                </button>
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-12">
              {[["🦎","Хамелеоны"],["🐍","Удавы"],["🐉","Агамы"],["🐢","Черепахи"]].map(([e, l]) => (
                <div key={l} className="flex items-center gap-2">
                  <span className="text-2xl">{e}</span>
                  <span className="text-sm text-muted-foreground">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:flex absolute top-28 right-12 z-10 flex-col items-end gap-2">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: "hsla(142,60%,42%,0.15)", border: "1px solid hsla(142,60%,42%,0.4)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(142,60%,50%)" }} />
            <span className="font-cormorant text-base font-semibold tracking-wide" style={{ color: "hsl(142,60%,70%)" }}>Зоопарк рептилий</span>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <a href="#services">
            <Icon name="ChevronDown" size={28} className="opacity-50" style={{ color: "hsl(43,74%,52%)" }} />
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold mb-3 tracking-widest uppercase" style={{ color: "hsl(142,60%,50%)" }}>Услуги</div>
            <h2 className="font-cormorant text-5xl font-bold mb-4">Что мы <span className="gold-text">предлагаем</span></h2>
            <p className="max-w-xl mx-auto" style={{ color: "hsla(45,30%,92%,0.55)" }}>
              Живые эмоции для детей и взрослых — одинаково нравится и малышам, и родителям
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className={`card-hover rounded-2xl relative overflow-hidden flex flex-col ${s.highlight ? "green-glow" : ""}`}
                style={{
                  background: s.highlight ? "linear-gradient(135deg, hsla(142,60%,35%,0.25), hsl(150,30%,10%))" : "hsl(150,30%,10%)",
                  border: s.highlight ? "1px solid hsla(142,60%,42%,0.5)" : "1px solid hsl(150,25%,18%)"
                }}>
                {s.highlight && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold z-10"
                    style={{ background: "hsl(142,60%,42%)", color: "hsl(20,15%,6%)" }}>
                    Популярно
                  </div>
                )}
                {(s as { image?: string }).image ? (
                  <div className="w-full h-44 overflow-hidden rounded-t-2xl">
                    <img src={(s as { image?: string }).image} alt={s.title} className="w-full h-full object-cover object-top" />
                  </div>
                ) : (
                  <div className="text-5xl mb-5 px-7 pt-7">{s.emoji}</div>
                )}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-cormorant text-2xl font-bold mb-1 leading-tight">{s.title}</h3>
                  {(s as { subtitle?: string }).subtitle && (
                    <div className="text-xs font-semibold mb-3 tracking-wide uppercase" style={{ color: "hsl(142,60%,50%)" }}>
                      {(s as { subtitle?: string }).subtitle}
                    </div>
                  )}
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "hsla(45,30%,92%,0.6)" }}>{s.desc}</p>
                  <div className="flex items-end justify-between mt-auto">
                    <div>
                      <div className="font-cormorant text-3xl font-bold gold-text">{s.price}</div>
                      <div className="text-xs text-muted-foreground">{s.unit}</div>
                    </div>
                    <a href={`tel:${PHONE}`}>
                      <button className={s.highlight ? "btn-green px-5 py-2.5 rounded-full text-sm font-semibold" : "btn-gold px-5 py-2.5 rounded-full text-sm font-semibold"}>
                        {s.cta}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl"
              style={{ background: "hsla(43,74%,52%,0.1)", border: "1px solid hsla(43,74%,52%,0.25)" }}>
              <span className="text-2xl">📞</span>
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Остались вопросы? Звоните прямо сейчас</div>
                <a href={`tel:${PHONE}`} className="font-cormorant text-2xl font-bold gold-text hover:opacity-80 transition-opacity">
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ANIMALS */}
      <section id="animals" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold mb-3 tracking-widest uppercase" style={{ color: "hsl(142,60%,50%)" }}>Наши питомцы</div>
            <h2 className="font-cormorant text-5xl font-bold mb-4">Живые <span className="gold-text">герои</span></h2>
            <p style={{ color: "hsla(150,30%,25%,0.65)" }}>Каждый — со своим характером, историей и невероятным обаянием</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {ANIMALS.map((a) => (
              a.name === "Хамелеон Гоша" || a.name === "Бородатая агама" || a.name === "Змеи" ? (
                <div key={a.name} className="card-hover rounded-2xl overflow-hidden group"
                  style={{ background: "hsl(150,30%,10%)", border: "1px solid hsl(150,25%,18%)" }}>
                  {a.name === "Бородатая агама" ? <BeardedDragonCarousel /> : a.name === "Змеи" ? <PolozCarousel /> : <ChameleonCarousel />}
                  <div className="p-4 text-center">
                    <div className="font-cormorant text-xl font-bold mb-1">{a.name}</div>
                    <div className="text-sm" style={{ color: "hsla(45,30%,92%,0.55)" }}>{a.desc}</div>
                  </div>
                </div>
              ) : (
                <div key={a.name} className="card-hover rounded-2xl p-6 text-center group"
                  style={{ background: "hsl(150,30%,10%)", border: "1px solid hsl(150,25%,18%)" }}>
                  <div className="text-5xl mb-3 group-hover:animate-float inline-block">{a.emoji}</div>
                  <div className="font-cormorant text-xl font-bold mb-1">{a.name}</div>
                  <div className="text-sm" style={{ color: "hsla(45,30%,92%,0.55)" }}>{a.desc}</div>
                </div>
              )
            ))}
          </div>


        </div>
      </section>

      <div className="section-divider" />

      {/* ATTENTION */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ background: "radial-gradient(ellipse at 30% 50%, hsl(142,60%,42%), transparent 60%)" }} />
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold mb-8">
            Что может удивить сильнее<br />
            <span className="gold-text">живых драконов?</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-6" style={{ color: "hsla(45,30%,92%,0.7)" }}>
            Хамелеон, который меняет окраску. Бородатая агама с добрым характером. Эублефары с бархатной кожей.
            Полозы, которые вызывают не страх, а интерес. И черепашка Наташка — мудрая, спокойная и обаятельная.
          </p>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: "hsla(45,30%,92%,0.7)" }}>
            <strong className="text-white">Экзотариум Кулаковых</strong> — это не обычный зоопарк.
            Это место, где рептилии становятся ближе, а знакомство с ними превращается в настоящее приключение.
          </p>
        </div>
      </section>
    </>
  );
}