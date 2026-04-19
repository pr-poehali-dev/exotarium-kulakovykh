import { useState } from "react";
import Icon from "@/components/ui/icon";

const LOGO = "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/ccea978b-e785-40af-a733-23243a096fe9.jpg";
const PHONE = "+79143428274";
const PHONE_DISPLAY = "+7 914 342-82-74";

const NAV_LINKS = [
  ["#home", "Главная"],
  ["#services", "Услуги"],
  ["#animals", "Питомцы"],
  ["#trust", "О нас"],
  ["#faq", "Вопросы"],
  ["#contacts", "Контакты"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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
            {NAV_LINKS.map(([href, label]) => (
              <a key={href} href={href} className="nav-link text-sm text-foreground/80 hover:text-foreground transition-colors">{label}</a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={{ background: "hsla(142,60%,42%,0.12)", border: "1px solid hsla(142,60%,42%,0.35)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(142,60%,50%)" }} />
            <span className="font-cormorant text-sm font-semibold tracking-wide" style={{ color: "hsl(142,60%,65%)" }}>Зоопарк рептилий</span>
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
          {NAV_LINKS.map(([href, label], i) => (
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
    </>
  );
}