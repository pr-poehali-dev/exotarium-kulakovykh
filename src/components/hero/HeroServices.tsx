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

export default function HeroServices() {
  return (
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
  );
}
