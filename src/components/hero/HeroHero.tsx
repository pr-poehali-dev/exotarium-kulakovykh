import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/files/388ca8e2-d3bd-4383-98d7-5ebd33d9d83a.jpg";
const PHONE = "+79143428274";
const PHONE_DISPLAY = "+7 914 342-82-74";

export default function HeroHero() {
  return (
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
  );
}
