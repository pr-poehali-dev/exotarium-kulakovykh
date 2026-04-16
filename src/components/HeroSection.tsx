import Icon from "@/components/ui/icon";

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
    </>
  );
}
