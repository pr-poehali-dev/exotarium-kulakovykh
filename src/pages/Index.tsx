import { useState } from "react";
import Icon from "@/components/ui/icon";

const SUBMIT_LEAD_URL = "https://functions.poehali.dev/7a1ed6b5-239d-4dd5-a327-fba81a81ee08";

const LOGO = "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/ccea978b-e785-40af-a733-23243a096fe9.jpg";
const HERO_IMG = "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/files/388ca8e2-d3bd-4383-98d7-5ebd33d9d83a.jpg";
const FAMILY_IMG = "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/files/1e7b6c70-efd3-4127-a064-aa775e69b780.jpg";
const CHAMELEON_IMG = "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/files/8396d348-7632-4b66-bc84-b86fee6cc01c.jpg";

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
  { emoji: "🦎", name: "Хамелеон", desc: "Меняет цвет прямо на ваших глазах" },
  { emoji: "🐉", name: "Бородатая агама", desc: "Дружелюбный «дракончик» с добрым характером" },
  { emoji: "🐍", name: "Императорский удав", desc: "Главная звезда праздников и шоу" },
  { emoji: "🐊", name: "Эублефары", desc: "Бархатная кожа и огромные добрые глаза" },
  { emoji: "🐢", name: "Черепашка Наташка", desc: "Мудрая, спокойная и обаятельная" },
  { emoji: "🐍", name: "Полозы", desc: "Вызывают не страх, а искренний интерес" },
];

const TRUST = [
  { icon: "Shield", label: "Безопасно", desc: "Все показы под контролем специалиста" },
  { icon: "BookOpen", label: "Познавательно", desc: "Живой урок природы для любого возраста" },
  { icon: "Sparkles", label: "Эмоционально", desc: "Рептилии удивляют даже тех, кто боится" },
  { icon: "Star", label: "Необычно", desc: "Формат, который невозможно забыть" },
  { icon: "MapPin", label: "Удобно", desc: "Выезжаем по городу и Приморскому краю" },
];

const FAQS = [
  {
    q: "Боюсь змей — это проблема?",
    a: "Совсем нет. Страх часто исчезает уже после первого знакомства. Когда видишь спокойное, красивое и грациозное животное вблизи, на смену тревоге приходит восхищение. Мы умеем мягко и бережно знакомить людей с рептилиями.",
  },
  {
    q: "Можно ли трогать животных?",
    a: "Да! Контакт — главная фишка нашего формата. Под руководством специалиста вы сможете подержать питомца, почувствовать его тепло и фактуру. Это абсолютно безопасно.",
  },
  {
    q: "Для какого возраста подходит?",
    a: "Для всех! Дошкольники, школьники, взрослые и даже пожилые гости — каждый найдёт что-то особенное. Малышам особенно нравятся черепашки и маленькие ящерки.",
  },
  {
    q: "Как далеко вы выезжаете?",
    a: "Работаем по городу Артём и всему Приморскому краю. Звоните — обсудим детали и стоимость выезда для вашего района.",
  },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch(SUBMIT_LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormState("success");
        setForm({ name: "", phone: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "hsl(150, 35%, 7%)" }}>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img src={LOGO} alt="Экзотариум Кулаковых" className="w-12 h-12 rounded-full object-cover"
              style={{ border: "2px solid hsl(43,74%,52%)" }} />
            <div>
              <div className="font-cormorant text-lg font-bold leading-none shimmer-text">Экзотариум Кулаковых</div>
              <div className="text-xs text-muted-foreground leading-none">г. Артём · Лазо 11</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {[["#home","Главная"],["#services","Услуги"],["#animals","Питомцы"],["#trust","О нас"],["#faq","Вопросы"],["#contacts","Контакты"]].map(([href, label]) => (
              <a key={href} href={href} className="nav-link text-sm text-foreground/80 hover:text-foreground transition-colors">{label}</a>
            ))}
          </div>

          <a href={`tel:${PHONE}`} className="hidden lg:flex items-center gap-2 btn-gold px-4 py-2 rounded-full text-sm font-semibold">
            <Icon name="Phone" size={14} />
            {PHONE_DISPLAY}
          </a>

          <button className="lg:hidden text-foreground p-1" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={26} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className="lg:hidden fixed inset-0 z-40 flex flex-col transition-all duration-300"
        style={{
          background: "hsl(150,35%,5%)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(-16px)",
        }}
      >
        <div className="flex-1 flex flex-col justify-center px-8 pt-24 pb-10 gap-2">
          {[["#home","Главная"],["#services","Услуги"],["#animals","Питомцы"],["#trust","О нас"],["#faq","Вопросы"],["#contacts","Контакты"]].map(([href, label], i) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-cormorant text-4xl font-bold py-3 border-b transition-colors hover:opacity-70"
              style={{
                color: "hsl(45,30%,92%)",
                borderColor: "hsla(150,25%,18%,0.6)",
                transitionDelay: menuOpen ? `${i * 40}ms` : "0ms",
              }}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="px-8 pb-10">
          <a
            href={`tel:${PHONE}`}
            className="btn-gold flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-semibold text-lg"
            onClick={() => setMenuOpen(false)}
          >
            <Icon name="Phone" size={20} />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Экзотические рептилии" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(135deg, hsla(150,40%,4%,0.96) 0%, hsla(142,35%,8%,0.72) 50%, hsla(150,40%,4%,0.92) 100%)"
          }} />
        </div>

        {/* Логотип-медальон справа */}
        <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden xl:block">
          <div className="relative w-72 h-72 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full animate-rotate-slow opacity-25"
              style={{ border: "1px solid hsl(43,74%,52%)" }} />
            <div className="absolute inset-6 rounded-full opacity-20"
              style={{ border: "1px solid hsl(142,60%,42%)", animation: "rotate-slow 12s linear infinite reverse" }} />
            <img src={LOGO} alt="Логотип" className="w-52 h-52 rounded-full object-cover green-glow" />
          </div>
        </div>

        <div className="container mx-auto px-4 pt-24 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: "hsla(142,60%,42%,0.15)", border: "1px solid hsla(142,60%,42%,0.4)" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(142,60%,50%)" }} />
              <span className="text-sm" style={{ color: "hsl(142,60%,65%)" }}>г. Артём · Лазо 11, ДЦ «Непоседа»</span>
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

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <a href="#services">
            <Icon name="ChevronDown" size={28} className="opacity-50" style={{ color: "hsl(43,74%,52%)" }} />
          </a>
        </div>
      </section>

      {/* ATTENTION */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ background: "radial-gradient(ellipse at 30% 50%, hsl(142,60%,42%), transparent 60%)" }} />
        <div className="container mx-auto px-4 text-center">
          <div className="text-sm font-semibold mb-3 tracking-widest uppercase" style={{ color: "hsl(142,60%,50%)" }}>Добро пожаловать</div>
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold mb-8">
            Что может удивить сильнее<br />
            <span className="gold-text">живых драконов?</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-6" style={{ color: "hsla(45,30%,92%,0.7)" }}>
            Хамелеон, который меняет окраску. Бородатая агама с добрым характером. Эублефары с бархатной кожей.
            Полозы, которые вызывают не страх, а интерес. И черепашка Наташка — мудрая, спокойная и обаятельная.
          </p>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: "hsla(45,30%,92%,0.7)" }}>
            <strong className="text-foreground">Экзотариум Кулаковых</strong> — это не обычный зоопарк.
            Это место, где рептилии становятся ближе, а знакомство с ними превращается в настоящее приключение.
          </p>
        </div>
      </section>

      <div className="section-divider" />

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
                  background: s.highlight ? "linear-gradient(135deg, hsla(142,60%,35%,0.25), hsla(150,30%,10%))" : "hsl(150,30%,10%)",
                  border: s.highlight ? "1px solid hsla(142,60%,42%,0.5)" : "1px solid hsl(150,25%,18%)"
                }}>
                {s.highlight && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold z-10"
                    style={{ background: "hsl(142,60%,42%)", color: "hsl(20,15%,6%)" }}>
                    Популярно
                  </div>
                )}
                {(s as {image?: string}).image ? (
                  <div className="w-full h-44 overflow-hidden rounded-t-2xl">
                    <img src={(s as {image?: string}).image} alt={s.title} className="w-full h-full object-cover object-top" />
                  </div>
                ) : (
                  <div className="text-5xl mb-5 px-7 pt-7">{s.emoji}</div>
                )}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-cormorant text-2xl font-bold mb-1 leading-tight">{s.title}</h3>
                  {(s as {subtitle?: string}).subtitle && (
                    <div className="text-xs font-semibold mb-3 tracking-wide uppercase" style={{ color: "hsl(142,60%,50%)" }}>
                      {(s as {subtitle?: string}).subtitle}
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
            <p style={{ color: "hsla(45,30%,92%,0.55)" }}>Каждый — со своим характером, историей и невероятным обаянием</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {ANIMALS.map((a) => (
              <div key={a.name} className="card-hover rounded-2xl p-6 text-center group"
                style={{ background: "hsl(150,30%,10%)", border: "1px solid hsl(150,25%,18%)" }}>
                <div className="text-5xl mb-3 group-hover:animate-float inline-block">{a.emoji}</div>
                <div className="font-cormorant text-xl font-bold mb-1">{a.name}</div>
                <div className="text-sm" style={{ color: "hsla(45,30%,92%,0.55)" }}>{a.desc}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden green-glow">
              <img src={CHAMELEON_IMG} alt="Хамелеон крупным планом" className="w-full h-72 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden gold-glow">
              <img src={FAMILY_IMG} alt="Семья с рептилиями" className="w-full h-72 object-cover" />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* TRUST */}
      <section id="trust" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold mb-3 tracking-widest uppercase" style={{ color: "hsl(142,60%,50%)" }}>Доверие</div>
            <h2 className="font-cormorant text-5xl font-bold mb-4">Почему нас <span className="gold-text">выбирают</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {TRUST.map((t) => (
              <div key={t.label} className="card-hover rounded-2xl p-5 text-center"
                style={{ background: "hsl(150,30%,10%)", border: "1px solid hsl(150,25%,18%)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: "linear-gradient(135deg, hsla(142,60%,35%,0.3), hsla(43,74%,52%,0.15))", border: "1px solid hsla(142,60%,42%,0.3)" }}>
                  <Icon name={t.icon as "Shield"} size={20} style={{ color: "hsl(142,60%,55%)" }} />
                </div>
                <div className="font-semibold mb-1 text-sm">{t.label}</div>
                <div className="text-xs" style={{ color: "hsla(45,30%,92%,0.5)" }}>{t.desc}</div>
              </div>
            ))}
          </div>

          {/* Страхи */}
          <div className="rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center"
            style={{ background: "hsl(150,30%,10%)", border: "1px solid hsl(150,25%,18%)" }}>
            <div>
              <div className="text-5xl mb-4">😰</div>
              <h3 className="font-cormorant text-3xl font-bold mb-4">
                Боитесь змей?<br /><span className="gold-text">Это нормально</span>
              </h3>
              <p className="leading-relaxed" style={{ color: "hsla(45,30%,92%,0.65)" }}>
                Часто страх исчезает уже после первого знакомства. Когда видишь спокойное, красивое и грациозное животное вблизи,
                на смену тревоге приходит восхищение. Мы умеем мягко и бережно знакомить людей с рептилиями — и детей, и взрослых.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { e: "😨", text: "До: «Нет, это же змея, я боюсь!»", active: false },
                { e: "😮", text: "Во время: «Ой, она такая мягкая...»", active: false },
                { e: "😍", text: "После: «Можно ещё раз подержать?»", active: true },
              ].map(({ e, text, active }) => (
                <div key={text} className="flex items-center gap-3 p-4 rounded-xl"
                  style={{
                    background: active ? "hsla(142,60%,42%,0.15)" : "hsl(150,28%,13%)",
                    border: `1px solid ${active ? "hsla(142,60%,42%,0.4)" : "hsl(150,25%,20%)"}`
                  }}>
                  <span className="text-xl">{e}</span>
                  <span className="text-sm" style={{ color: active ? "hsl(142,60%,65%)" : "hsla(45,30%,92%,0.7)" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold mb-3 tracking-widest uppercase" style={{ color: "hsl(142,60%,50%)" }}>FAQ</div>
            <h2 className="font-cormorant text-5xl font-bold mb-4">Частые <span className="gold-text">вопросы</span></h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-2xl overflow-hidden transition-all"
                style={{ background: "hsl(150,30%,10%)", border: `1px solid ${openFaq === i ? "hsla(142,60%,42%,0.5)" : "hsl(150,25%,18%)"}` }}>
                <button className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold">{faq.q}</span>
                  <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={18}
                    style={{ color: openFaq === i ? "hsl(142,60%,55%)" : "hsl(215,16%,47%)", flexShrink: 0 }} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm leading-relaxed border-t border-white/5 pt-4"
                    style={{ color: "hsla(45,30%,92%,0.65)" }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, hsl(142,45%,10%), hsl(150,40%,8%))" }} />
        <div className="absolute inset-0 opacity-10"
          style={{ background: "radial-gradient(ellipse at center, hsl(43,74%,52%), transparent 60%)" }} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-6 animate-float flex justify-center">
            <img
              src="https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/3befca5a-ec0d-48ad-ad36-0fd983a41c00.png"
              alt="Экзотариум Кулаковых"
              className="w-40 h-40 rounded-full object-cover"
              style={{ border: "2px solid hsla(43,74%,52%,0.4)", boxShadow: "0 0 40px hsla(142,60%,42%,0.3)" }}
            />
          </div>
          <h2 className="font-cormorant text-5xl font-bold mb-4">
            Не откладывайте <span className="gold-text">чудо</span>
          </h2>
          <p className="text-lg mb-2" style={{ color: "hsla(45,30%,92%,0.7)" }}>Экзотариум Кулаковых</p>
          <p className="mb-8" style={{ color: "hsla(45,30%,92%,0.45)" }}>г. Артём, Лазо 11, Детский Центр «Непоседа»</p>
          <a href={`tel:${PHONE}`}>
            <button className="btn-gold px-10 py-5 rounded-full text-xl font-semibold flex items-center gap-3 mx-auto animate-pulse-gold">
              <Icon name="Phone" size={22} />
              {PHONE_DISPLAY}
            </button>
          </a>
          <p className="mt-4 text-sm" style={{ color: "hsla(45,30%,92%,0.35)" }}>Забронируйте дату прямо сейчас</p>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold mb-3 tracking-widest uppercase" style={{ color: "hsl(142,60%,50%)" }}>Контакты</div>
            <h2 className="font-cormorant text-5xl font-bold mb-4">Как нас <span className="gold-text">найти</span></h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Левая колонка: контакты + карта */}
            <div className="space-y-5">
              {[
                { icon: "MapPin", label: "Адрес", value: "г. Артём, ул. Лазо 11\nДетский Центр «Непоседа»" },
                { icon: "Phone", label: "Телефон", value: PHONE_DISPLAY },
                { icon: "Clock", label: "Режим работы", value: "Уточняйте при записи" },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 p-5 rounded-2xl"
                  style={{ background: "hsl(150,30%,10%)", border: "1px solid hsl(150,25%,18%)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "hsla(142,60%,42%,0.2)", border: "1px solid hsla(142,60%,42%,0.3)" }}>
                    <Icon name={icon as "MapPin"} size={18} style={{ color: "hsl(142,60%,55%)" }} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">{label}</div>
                    <div className="font-medium whitespace-pre-line">{value}</div>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl overflow-hidden green-glow relative" style={{ height: "18rem" }}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=132.766788,43.360263&z=15&pt=132.766788,43.360263,pm2gnm"
                  width="100%" height="100%" frameBorder="0" title="Карта Экзотариума Кулаковых"
                  style={{ filter: "grayscale(60%) brightness(0.55) hue-rotate(100deg)", minHeight: "18rem" }} />
                <div className="absolute bottom-4 left-4 glass px-4 py-3 rounded-xl">
                  <div className="text-xs text-muted-foreground">Экзотариум Кулаковых</div>
                  <div className="text-sm font-semibold">г. Артём, Лазо 11</div>
                </div>
              </div>
            </div>

            {/* ФОРМА справа */}
            <div className="rounded-2xl p-8" style={{ background: "hsl(150,30%,10%)", border: "1px solid hsl(150,25%,18%)" }}>
              <h3 className="font-cormorant text-2xl font-bold mb-2">Оставить заявку</h3>
              <p className="text-sm mb-6" style={{ color: "hsla(45,30%,92%,0.5)" }}>
                Перезвоним в течение часа и ответим на все вопросы
              </p>

              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "hsla(142,60%,42%,0.2)", border: "1px solid hsla(142,60%,42%,0.4)" }}>
                    <Icon name="Check" size={28} style={{ color: "hsl(142,60%,55%)" }} />
                  </div>
                  <div className="font-cormorant text-2xl font-bold">Заявка принята!</div>
                  <p className="text-sm" style={{ color: "hsla(45,30%,92%,0.5)" }}>
                    Мы перезвоним вам в ближайшее время
                  </p>
                  <button onClick={() => setFormState("idle")}
                    className="text-sm underline mt-2" style={{ color: "hsl(142,60%,50%)" }}>
                    Отправить ещё
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block">Ваше имя *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Иван Иванов"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                      style={{
                        background: "hsl(150,28%,13%)",
                        border: "1px solid hsl(150,25%,22%)",
                        color: "hsl(45,30%,92%)",
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block">Телефон *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      placeholder="+7 900 000-00-00"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                      style={{
                        background: "hsl(150,28%,13%)",
                        border: "1px solid hsl(150,25%,22%)",
                        color: "hsl(45,30%,92%)",
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block">Сообщение</label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Хочу посетить зоопарк, записать ребёнка..."
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors resize-none"
                      style={{
                        background: "hsl(150,28%,13%)",
                        border: "1px solid hsl(150,25%,22%)",
                        color: "hsl(45,30%,92%)",
                      }}
                    />
                  </div>
                  {formState === "error" && (
                    <p className="text-sm" style={{ color: "hsl(0,80%,65%)" }}>
                      Что-то пошло не так. Попробуйте ещё раз или позвоните нам.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="btn-green w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-opacity disabled:opacity-60"
                  >
                    {formState === "loading" ? (
                      <>
                        <Icon name="Loader2" size={18} className="animate-spin" />
                        Отправляем...
                      </>
                    ) : (
                      <>
                        <Icon name="Send" size={18} />
                        Отправить заявку
                      </>
                    )}
                  </button>
                  <p className="text-xs text-center" style={{ color: "hsla(45,30%,92%,0.3)" }}>
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>


        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "hsl(150,40%,4%)", borderTop: "1px solid hsl(150,25%,13%)" }}>
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src={LOGO} alt="Логотип" className="w-12 h-12 rounded-full object-cover"
                style={{ border: "2px solid hsl(43,74%,52%)" }} />
              <div>
                <div className="font-cormorant text-lg font-bold shimmer-text">Экзотариум Кулаковых</div>
                <div className="text-xs text-muted-foreground">Мир чешуи, чудес и живых эмоций</div>
              </div>
            </div>
            <div className="text-center text-sm" style={{ color: "hsla(45,30%,92%,0.4)" }}>
              <div>г. Артём, Лазо 11, ДЦ «Непоседа»</div>
              <a href={`tel:${PHONE}`} className="hover:opacity-70 transition-opacity" style={{ color: "hsl(43,74%,55%)" }}>
                {PHONE_DISPLAY}
              </a>
            </div>
            <div className="text-xs text-center" style={{ color: "hsla(45,30%,92%,0.3)" }}>
              © 2024 Экзотариум Кулаковых<br />
              Контактный зоопарк · Выездные программы
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}