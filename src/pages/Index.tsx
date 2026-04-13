import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/files/388ca8e2-d3bd-4383-98d7-5ebd33d9d83a.jpg";
const FAMILY_IMG = "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/files/1e7b6c70-efd3-4127-a064-aa775e69b780.jpg";
const CHAMELEON_IMG = "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/files/8396d348-7632-4b66-bc84-b86fee6cc01c.jpg";

const NAV_LINKS = [
  { href: "#home", label: "Главная" },
  { href: "#about", label: "О нас" },
  { href: "#services", label: "Услуги" },
  { href: "#animals", label: "Животные" },
  { href: "#gallery", label: "Галерея" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#blog", label: "Блог" },
  { href: "#contacts", label: "Контакты" },
];

const ANIMALS = [
  {
    name: "Хамелеон Вейлера",
    category: "Рептилии",
    emoji: "🦎",
    description: "Мастер маскировки, меняющий цвет в зависимости от настроения и температуры.",
    fact: "Способен видеть двумя глазами одновременно в разных направлениях!",
    color: "from-green-900/50 to-green-950/80",
  },
  {
    name: "Королевский питон",
    category: "Змеи",
    emoji: "🐍",
    description: "Одна из самых спокойных и безопасных змей. Любит тепло и объятия.",
    fact: "Может прожить без еды до 6 месяцев!",
    color: "from-amber-900/50 to-amber-950/80",
  },
  {
    name: "Древесная лягушка",
    category: "Земноводные",
    emoji: "🐸",
    description: "Ярко-зелёные красавицы с огромными глазами. Ночные охотники.",
    fact: "Присоски на лапах удерживают их на вертикальных поверхностях!",
    color: "from-emerald-900/50 to-emerald-950/80",
  },
  {
    name: "Голубая игуана",
    category: "Рептилии",
    emoji: "🦕",
    description: "Редкий вид с потрясающим голубым окрасом. Занесён в Красную книгу.",
    fact: "Живёт более 60 лет и узнаёт своих хозяев!",
    color: "from-blue-900/50 to-blue-950/80",
  },
  {
    name: "Тарантул Брахипельма",
    category: "Пауки",
    emoji: "🕷️",
    description: "Бархатистый гигант с рыжими волосками. Совершенно не агрессивен.",
    fact: "Женские особи доживают до 30 лет!",
    color: "from-orange-900/50 to-orange-950/80",
  },
  {
    name: "Пальмовый какаду",
    category: "Птицы",
    emoji: "🦜",
    description: "Величественная птица с чёрным оперением и красными щеками.",
    fact: "Единственная птица, использующая инструменты для создания музыки!",
    color: "from-purple-900/50 to-purple-950/80",
  },
];

const SERVICES = [
  { icon: "Users", title: "Групповые экскурсии", desc: "Увлекательное путешествие по миру экзотических животных с опытным гидом.", price: "от 350 ₽" },
  { icon: "Crown", title: "Детские праздники", desc: "Незабываемый день рождения с интерактивным шоу и фото с питомцами.", price: "от 8 000 ₽" },
  { icon: "Camera", title: "Фотосессии", desc: "Профессиональная съёмка с экзотическими животными. Яркие воспоминания навсегда.", price: "от 2 500 ₽" },
  { icon: "GraduationCap", title: "Образовательные программы", desc: "Лекции и мастер-классы для школьников о биологии и экологии.", price: "от 200 ₽" },
  { icon: "Heart", title: "Терапия с животными", desc: "Зоотерапия — контакт с животными снижает стресс и улучшает настроение.", price: "от 1 500 ₽" },
  { icon: "Star", title: "VIP-посещение", desc: "Эксклюзивный тур за кулисы: кормление, уход и личное общение с животными.", price: "от 5 000 ₽" },
];

const REVIEWS = [
  { name: "Анна Петрова", rating: 5, text: "Были с детьми на день рождения — дочка в полном восторге! Организация на высшем уровне, животные здоровые и ухоженные. Вернёмся обязательно!", date: "15 марта 2024", avatar: "👩" },
  { name: "Дмитрий Козлов", rating: 5, text: "Поразительное место! Держал питона в руках — адреналин зашкаливал. Персонал очень профессиональный, рассказали всё о животных. Рекомендую!", date: "2 апреля 2024", avatar: "👨" },
  { name: "Мария Сидорова", rating: 5, text: "Провели корпоратив — все коллеги в шоке от впечатлений. Хамелеон прямо на руке сменил цвет! Незабываемо. Спасибо команде ЭкзоМир!", date: "18 апреля 2024", avatar: "👩‍💼" },
  { name: "Игорь Новиков", rating: 4, text: "Отличная экскурсия для всей семьи. Дети узнали много нового о рептилиях. Гид Алексей — настоящий профессионал и энтузиаст своего дела.", date: "5 мая 2024", avatar: "👨‍👩‍👧" },
  { name: "Светлана Волкова", rating: 5, text: "Фотосессия с игуаной вышла потрясающей! Профи фотограф, спокойные животные, уютная атмосфера. Фото сразу в рамку на стену!", date: "20 мая 2024", avatar: "📸" },
  { name: "Павел Морозов", rating: 5, text: "VIP-тур превзошёл все ожидания. Кормил ящериц, наблюдал за кормлением питона — такое не забудешь. Стоит каждой потраченной копейки!", date: "1 июня 2024", avatar: "🎩" },
];

const BLOG_POSTS = [
  { category: "Факты", title: "Почему хамелеоны меняют цвет: научное объяснение", preview: "Многие думают, что хамелеоны маскируются — но правда ещё интереснее. Узнайте о нанокристаллах в их коже...", date: "10 июня 2024", readTime: "5 мин", emoji: "🦎" },
  { category: "Уход", title: "Как обустроить идеальный террариум для питона", preview: "Правильная температура, влажность и укрытия — залог здоровья вашего питомца. Полное руководство от наших специалистов...", date: "5 июня 2024", readTime: "8 мин", emoji: "🐍" },
  { category: "События", title: "Новые жители: встречаем голубую игуану Лазурика", preview: "В нашем экзотариуме появился новый питомец! Знакомьтесь с Лазуриком — редким представителем голубых игуан...", date: "28 мая 2024", readTime: "3 мин", emoji: "🦕" },
];

const TIMES = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeAnimal, setActiveAnimal] = useState(0);
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState("Групповая экскурсия");
  const [bookingDone, setBookingDone] = useState(false);
  const [contactSent, setContactSent] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "hsl(20, 15%, 6%)" }}>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
              style={{ background: "linear-gradient(135deg, hsl(142,60%,35%), hsl(43,74%,52%))" }}>
              🌿
            </div>
            <div>
              <div className="font-cormorant text-xl font-bold leading-none shimmer-text">ЭкзоМир</div>
              <div className="text-xs text-muted-foreground leading-none">экзотариум</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="nav-link text-sm text-foreground/80 hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <a href="#booking" className="hidden lg:block">
            <button className="btn-gold px-5 py-2 rounded-full text-sm font-semibold">Записаться</button>
          </a>

          <button className="lg:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden glass border-t border-white/5 py-4">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="block px-6 py-3 text-foreground/80 hover:text-foreground"
                onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Экзотические животные" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(135deg, hsla(20,15%,4%,0.93) 0%, hsla(142,30%,8%,0.75) 50%, hsla(20,15%,4%,0.87) 100%)"
          }} />
        </div>

        <div className="absolute top-32 right-20 w-72 h-72 rounded-full opacity-10 animate-rotate-slow"
          style={{ border: "1px solid hsl(43,74%,52%)" }} />
        <div className="absolute top-44 right-32 w-52 h-52 rounded-full opacity-8"
          style={{ border: "1px solid hsl(142,60%,42%)", animation: "rotate-slow 15s linear infinite reverse" }} />

        <div className="container mx-auto px-4 pt-24 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: "hsla(142,60%,42%,0.15)", border: "1px solid hsla(142,60%,42%,0.4)" }}>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm" style={{ color: "hsl(142,60%,65%)" }}>Открыто сегодня · 10:00 — 20:00</span>
            </div>

            <h1 className="font-cormorant font-bold leading-none mb-6" style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}>
              Мир<br />
              <span className="shimmer-text">экзотики</span><br />
              рядом
            </h1>

            <p className="text-lg mb-10 max-w-xl leading-relaxed" style={{ color: "hsla(45,30%,92%,0.65)" }}>
              Откройте двери в захватывающий мир редких животных. Живое общение, незабываемые впечатления и море открытий для всей семьи.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#booking">
                <button className="btn-gold px-8 py-4 rounded-full text-base font-semibold animate-pulse-gold">
                  🗓 Записаться на экскурсию
                </button>
              </a>
              <a href="#animals">
                <button className="px-8 py-4 rounded-full text-base font-semibold transition-all hover:bg-white/10"
                  style={{ border: "1px solid hsla(142,60%,42%,0.5)", color: "hsl(142,60%,60%)" }}>
                  Наши животные →
                </button>
              </a>
            </div>

            <div className="flex gap-10 mt-14">
              {[["200+", "видов животных"], ["15 000+", "гостей в год"], ["10", "лет работы"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-cormorant text-3xl font-bold gold-text">{num}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about"><Icon name="ChevronDown" size={28} className="text-yellow-500 opacity-70" /></a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, hsl(142,60%,42%), transparent)" }} />
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-semibold mb-3 tracking-widest uppercase" style={{ color: "hsl(142,60%,50%)" }}>О нас</div>
              <h2 className="font-cormorant text-5xl font-bold mb-6 leading-tight">
                Место, где природа<br />
                <span className="gold-text">говорит с тобой</span>
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: "hsla(45,30%,92%,0.65)" }}>
                ЭкзоМир — это не просто зоопарк. Это живая энциклопедия удивительных существ, каждое из которых хранит тайны эволюции и природы. Мы создали пространство, где каждый может прикоснуться к дикой природе в безопасных и комфортных условиях.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: "hsla(45,30%,92%,0.65)" }}>
                За 10 лет работы мы приняли более 150 000 гостей, воспитали десятки редких видов и стали домом для животных, нуждающихся в заботе и реабилитации.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "Shield", text: "Лицензированный питомник" },
                  { icon: "Leaf", text: "Участник программ охраны" },
                  { icon: "Award", text: "Лучший экзотариум 2023" },
                  { icon: "Heart", text: "Этичное содержание" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background: "hsla(142,40%,20%,0.15)", border: "1px solid hsla(142,60%,42%,0.2)" }}>
                    <Icon name={icon} size={16} className="flex-shrink-0" style={{ color: "hsl(142,60%,50%)" }} />
                    <span className="text-sm" style={{ color: "hsla(45,30%,92%,0.8)" }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden green-glow">
                <img src={FAMILY_IMG} alt="Семья с животными" className="w-full h-96 object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-gold p-5 rounded-2xl">
                <div className="font-cormorant text-4xl font-bold gold-text">10+</div>
                <div className="text-sm" style={{ color: "hsla(45,30%,92%,0.7)" }}>лет заботы<br />о природе</div>
              </div>
              <div className="absolute -top-4 -right-4 glass p-4 rounded-2xl">
                <div className="text-2xl mb-1">🏆</div>
                <div className="text-xs" style={{ color: "hsla(45,30%,92%,0.7)" }}>Лучший<br />экзотариум</div>
              </div>
            </div>
          </div>
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
              От семейных экскурсий до эксклюзивных VIP-туров — каждый найдёт что-то особенное
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="card-hover rounded-2xl p-6 group"
                style={{ background: "hsl(22,18%,9%)", border: "1px solid hsl(22,18%,18%)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, hsla(142,60%,35%,0.3), hsla(43,74%,52%,0.2))", border: "1px solid hsla(142,60%,42%,0.3)" }}>
                  <Icon name={s.icon} size={22} style={{ color: "hsl(142,60%,55%)" }} />
                </div>
                <h3 className="font-cormorant text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "hsla(45,30%,92%,0.55)" }}>{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold gold-text">{s.price}</span>
                  <a href="#booking">
                    <button className="text-xs flex items-center gap-1 transition-colors" style={{ color: "hsl(142,60%,55%)" }}>
                      Записаться <Icon name="ArrowRight" size={12} />
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ANIMALS */}
      <section id="animals" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold mb-3 tracking-widest uppercase" style={{ color: "hsl(142,60%,50%)" }}>Каталог</div>
            <h2 className="font-cormorant text-5xl font-bold mb-4">Наши <span className="gold-text">обитатели</span></h2>
            <p style={{ color: "hsla(45,30%,92%,0.55)" }}>Познакомьтесь с удивительными жителями нашего экзотариума</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-3">
              {ANIMALS.map((a, i) => (
                <button key={a.name} onClick={() => setActiveAnimal(i)}
                  className="w-full text-left p-5 rounded-2xl transition-all duration-300"
                  style={{
                    background: activeAnimal === i
                      ? "linear-gradient(135deg, hsla(142,60%,35%,0.3), hsla(43,74%,52%,0.1))"
                      : "hsl(22,18%,9%)",
                    border: activeAnimal === i
                      ? "1px solid hsla(142,60%,42%,0.5)"
                      : "1px solid hsl(22,18%,18%)",
                    boxShadow: activeAnimal === i ? "0 0 20px hsla(142,60%,42%,0.2)" : "none"
                  }}>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{a.emoji}</span>
                    <div className="flex-1">
                      <div className="font-semibold">{a.name}</div>
                      <div className="text-xs text-muted-foreground">{a.category}</div>
                    </div>
                    <Icon name="ChevronRight" size={16}
                      className={`transition-transform ${activeAnimal === i ? "rotate-90" : ""}`}
                      style={{ color: activeAnimal === i ? "hsl(142,60%,55%)" : "hsl(215,16%,47%)" }} />
                  </div>
                </button>
              ))}
            </div>

            <div className="sticky top-24">
              <div className="rounded-3xl overflow-hidden"
                style={{ background: "hsl(22,18%,9%)", border: "1px solid hsl(22,18%,18%)" }}>
                <div className="h-64 flex items-center justify-center relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, hsl(22,18%,12%), hsl(142,20%,12%))" }}>
                  <img src={CHAMELEON_IMG} alt={ANIMALS[activeAnimal].name}
                    className="w-full h-full object-cover opacity-50 absolute inset-0" />
                  <div className="relative z-10 text-8xl animate-float">{ANIMALS[activeAnimal].emoji}</div>
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "hsla(142,60%,42%,0.3)", border: "1px solid hsla(142,60%,42%,0.5)", color: "hsl(142,60%,70%)" }}>
                    {ANIMALS[activeAnimal].category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-cormorant text-3xl font-bold mb-3">{ANIMALS[activeAnimal].name}</h3>
                  <p className="leading-relaxed mb-5" style={{ color: "hsla(45,30%,92%,0.65)" }}>{ANIMALS[activeAnimal].description}</p>
                  <div className="p-4 rounded-xl"
                    style={{ background: "hsla(43,74%,52%,0.1)", border: "1px solid hsla(43,74%,52%,0.25)" }}>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">💡</span>
                      <div>
                        <div className="text-xs font-semibold mb-1" style={{ color: "hsl(43,74%,60%)" }}>Интересный факт</div>
                        <div className="text-sm" style={{ color: "hsla(45,30%,92%,0.8)" }}>{ANIMALS[activeAnimal].fact}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* GALLERY */}
      <section id="gallery" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold mb-3 tracking-widest uppercase" style={{ color: "hsl(142,60%,50%)" }}>Галерея</div>
            <h2 className="font-cormorant text-5xl font-bold mb-4">Моменты <span className="gold-text">живой природы</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[HERO_IMG, FAMILY_IMG, CHAMELEON_IMG, CHAMELEON_IMG, HERO_IMG, FAMILY_IMG].map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden card-hover group cursor-pointer">
                <div className="relative overflow-hidden h-52 md:h-64">
                  <img src={src} alt={`Галерея ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                    style={{ background: "hsla(0,0%,0%,0)", }}
                    onMouseEnter={e => (e.currentTarget.style.background = "hsla(0,0%,0%,0.3)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "hsla(0,0%,0%,0)")}>
                    <Icon name="ZoomIn" size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ background: "radial-gradient(ellipse at center, hsl(142,60%,42%), transparent 70%)" }} />
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-sm font-semibold mb-3 tracking-widest uppercase" style={{ color: "hsl(142,60%,50%)" }}>Бронирование</div>
              <h2 className="font-cormorant text-5xl font-bold mb-4">Запишитесь <span className="gold-text">онлайн</span></h2>
              <p style={{ color: "hsla(45,30%,92%,0.55)" }}>Выберите услугу, дату и удобное время</p>
            </div>

            {!bookingDone ? (
              <div className="glass rounded-3xl p-8">
                <div className="flex items-center gap-2 mb-8">
                  {[1, 2, 3].map(step => (
                    <div key={step} className="flex items-center gap-2 flex-1">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                        style={{
                          background: bookingStep >= step ? "linear-gradient(135deg, hsl(142,60%,35%), hsl(142,65%,45%))" : "hsl(22,18%,16%)",
                          color: bookingStep >= step ? "hsl(20,15%,6%)" : "hsl(215,16%,47%)"
                        }}>
                        {bookingStep > step ? <Icon name="Check" size={14} /> : step}
                      </div>
                      <div className="text-xs text-muted-foreground hidden sm:block flex-1">
                        {["Услуга", "Дата и время", "Контакты"][step - 1]}
                      </div>
                      {step < 3 && <div className="flex-1 h-px bg-border hidden sm:block" />}
                    </div>
                  ))}
                </div>

                {bookingStep === 1 && (
                  <div className="space-y-3">
                    <h3 className="font-cormorant text-2xl font-bold mb-5">Выберите услугу</h3>
                    {["Групповая экскурсия", "Детский праздник", "Фотосессия", "VIP-тур"].map(svc => (
                      <button key={svc} onClick={() => setSelectedService(svc)}
                        className="w-full text-left p-4 rounded-xl transition-all"
                        style={{
                          background: selectedService === svc ? "hsla(142,60%,42%,0.15)" : "hsl(22,18%,10%)",
                          border: `1px solid ${selectedService === svc ? "hsl(142,60%,42%)" : "hsl(22,18%,18%)"}`
                        }}>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{svc}</span>
                          {selectedService === svc && <Icon name="CheckCircle2" size={18} style={{ color: "hsl(142,60%,50%)" }} />}
                        </div>
                      </button>
                    ))}
                    <button onClick={() => setBookingStep(2)} className="btn-green w-full py-4 rounded-xl font-semibold mt-2">
                      Далее →
                    </button>
                  </div>
                )}

                {bookingStep === 2 && (
                  <div className="space-y-5">
                    <h3 className="font-cormorant text-2xl font-bold mb-5">Дата и время</h3>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">Выберите дату</label>
                      <input type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-3 rounded-xl border" />
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-3">Выберите время</label>
                      <div className="grid grid-cols-4 gap-2">
                        {TIMES.map(t => (
                          <button key={t} onClick={() => setSelectedTime(t)}
                            className="py-2 rounded-lg text-sm font-medium transition-all"
                            style={{
                              background: selectedTime === t ? "hsl(142,60%,42%)" : "hsl(22,18%,12%)",
                              border: `1px solid ${selectedTime === t ? "hsl(142,60%,42%)" : "hsl(22,18%,22%)"}`,
                              color: selectedTime === t ? "hsl(20,15%,6%)" : "hsla(45,30%,92%,0.7)"
                            }}>
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3 pt-2">
                      <button onClick={() => setBookingStep(1)}
                        className="flex-1 py-4 rounded-xl font-semibold border border-border text-muted-foreground hover:text-foreground transition-colors">
                        ← Назад
                      </button>
                      <button onClick={() => { if (selectedDate && selectedTime) setBookingStep(3); }}
                        className="flex-1 py-4 rounded-xl font-semibold btn-green"
                        style={{ opacity: selectedDate && selectedTime ? 1 : 0.5 }}>
                        Далее →
                      </button>
                    </div>
                  </div>
                )}

                {bookingStep === 3 && (
                  <div className="space-y-4">
                    <h3 className="font-cormorant text-2xl font-bold mb-5">Ваши контакты</h3>
                    <div className="p-4 rounded-xl mb-2"
                      style={{ background: "hsla(142,60%,42%,0.1)", border: "1px solid hsla(142,60%,42%,0.3)" }}>
                      <div className="text-sm text-muted-foreground">Выбрано: <span style={{ color: "hsl(142,60%,55%)" }} className="font-medium">{selectedService}</span></div>
                      <div className="text-sm text-muted-foreground">{selectedDate} в {selectedTime}</div>
                    </div>
                    <input placeholder="Ваше имя" className="w-full px-4 py-3 rounded-xl border" />
                    <input placeholder="+7 (___) ___-__-__" className="w-full px-4 py-3 rounded-xl border" />
                    <input placeholder="Количество гостей" type="number" className="w-full px-4 py-3 rounded-xl border" />
                    <textarea placeholder="Особые пожелания (необязательно)" rows={3}
                      className="w-full px-4 py-3 rounded-xl border resize-none" />
                    <div className="flex gap-3 pt-2">
                      <button onClick={() => setBookingStep(2)}
                        className="flex-1 py-4 rounded-xl font-semibold border border-border text-muted-foreground hover:text-foreground transition-colors">
                        ← Назад
                      </button>
                      <button onClick={() => setBookingDone(true)} className="btn-gold flex-1 py-4 rounded-xl font-semibold">
                        Подтвердить запись
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="glass rounded-3xl p-10 text-center">
                <div className="text-6xl mb-5 animate-float">🎉</div>
                <h3 className="font-cormorant text-4xl font-bold mb-3 gold-text">Запись принята!</h3>
                <p className="mb-6" style={{ color: "hsla(45,30%,92%,0.65)" }}>Мы свяжемся с вами в течение 30 минут для подтверждения.</p>
                <div className="p-5 rounded-xl mb-6"
                  style={{ background: "hsla(142,60%,42%,0.1)", border: "1px solid hsla(142,60%,42%,0.3)" }}>
                  <div className="font-semibold">{selectedService}</div>
                  <div className="text-muted-foreground text-sm">{selectedDate} · {selectedTime}</div>
                </div>
                <button onClick={() => { setBookingDone(false); setBookingStep(1); setSelectedDate(""); setSelectedTime(""); }}
                  className="btn-green px-8 py-3 rounded-full font-semibold">
                  Записаться ещё раз
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* REVIEWS */}
      <section id="reviews" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold mb-3 tracking-widest uppercase" style={{ color: "hsl(142,60%,50%)" }}>Отзывы</div>
            <h2 className="font-cormorant text-5xl font-bold mb-4">Что говорят <span className="gold-text">наши гости</span></h2>
            <div className="flex items-center justify-center gap-3">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <span key={i} className="text-xl star-filled">★</span>)}
              </div>
              <span className="font-cormorant text-3xl font-bold gold-text">4.9</span>
              <span className="text-muted-foreground text-sm">/ 5.0 · 847 отзывов</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map(r => (
              <div key={r.name} className="card-hover rounded-2xl p-6"
                style={{ background: "hsl(22,18%,9%)", border: "1px solid hsl(22,18%,18%)" }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: "hsla(142,40%,20%,0.3)", border: "1px solid hsla(142,60%,42%,0.3)" }}>
                    {r.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{r.name}</div>
                    <div className="flex gap-0.5 mt-1">
                      {Array.from({ length: r.rating }).map((_, j) => (
                        <span key={j} className="text-sm star-filled">★</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">{r.date}</div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "hsla(45,30%,92%,0.65)" }}>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* BLOG */}
      <section id="blog" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold mb-3 tracking-widest uppercase" style={{ color: "hsl(142,60%,50%)" }}>Блог</div>
            <h2 className="font-cormorant text-5xl font-bold mb-4">Мир <span className="gold-text">экзотики</span> изнутри</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {BLOG_POSTS.map(post => (
              <div key={post.title} className="card-hover rounded-2xl overflow-hidden group cursor-pointer"
                style={{ background: "hsl(22,18%,9%)", border: "1px solid hsl(22,18%,18%)" }}>
                <div className="h-48 flex items-center justify-center text-7xl relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, hsl(22,18%,12%), hsl(142,20%,12%))" }}>
                  <span className="animate-float">{post.emoji}</span>
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "hsla(142,60%,42%,0.2)", border: "1px solid hsla(142,60%,42%,0.4)", color: "hsl(142,60%,65%)" }}>
                    {post.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-cormorant text-xl font-bold mb-2 leading-tight transition-colors group-hover:text-green-400">{post.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "hsla(45,30%,92%,0.55)" }}>{post.preview}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1"><Icon name="Clock" size={12} /> {post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CONTACTS */}
      <section id="contacts" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold mb-3 tracking-widest uppercase" style={{ color: "hsl(142,60%,50%)" }}>Контакты</div>
            <h2 className="font-cormorant text-5xl font-bold mb-4">Мы на <span className="gold-text">карте</span></h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="font-cormorant text-2xl font-bold">Напишите нам</h3>
              {!contactSent ? (
                <div className="space-y-4">
                  <input placeholder="Ваше имя" className="w-full px-4 py-3 rounded-xl border" />
                  <input placeholder="Email или телефон" className="w-full px-4 py-3 rounded-xl border" />
                  <textarea placeholder="Ваш вопрос или предложение..." rows={4} className="w-full px-4 py-3 rounded-xl border resize-none" />
                  <button onClick={() => setContactSent(true)} className="btn-gold w-full py-4 rounded-xl font-semibold">
                    Отправить сообщение
                  </button>
                </div>
              ) : (
                <div className="glass-gold p-8 rounded-2xl text-center">
                  <div className="text-4xl mb-3">✉️</div>
                  <h4 className="font-cormorant text-2xl font-bold gold-text mb-2">Сообщение отправлено!</h4>
                  <p className="text-sm mb-4" style={{ color: "hsla(45,30%,92%,0.65)" }}>Ответим в течение 2 часов в рабочее время.</p>
                  <button onClick={() => setContactSent(false)} className="text-sm transition-colors" style={{ color: "hsl(142,60%,55%)" }}>
                    Отправить ещё
                  </button>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "MapPin", label: "Адрес", value: "ул. Тропическая, 42\nМосква, Россия" },
                  { icon: "Phone", label: "Телефон", value: "+7 (495) 123-45-67" },
                  { icon: "Clock", label: "Режим работы", value: "Ежедневно\n10:00 — 20:00" },
                  { icon: "Mail", label: "Email", value: "info@exomir.ru" },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="p-4 rounded-xl"
                    style={{ background: "hsl(22,18%,9%)", border: "1px solid hsl(22,18%,18%)" }}>
                    <Icon name={icon as any} size={18} className="mb-2" style={{ color: "hsl(142,60%,50%)" } as any} />
                    <div className="text-xs text-muted-foreground mb-1">{label}</div>
                    <div className="text-sm whitespace-pre-line">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden green-glow relative" style={{ height: "24rem" }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.617700,55.755819&z=13&pt=37.617700,55.755819,pm2gnm"
                width="100%" height="100%" frameBorder="0" title="Карта"
                style={{ filter: "grayscale(60%) brightness(0.55) hue-rotate(100deg)" }} />
              <div className="absolute bottom-4 left-4 glass px-4 py-3 rounded-xl">
                <div className="text-xs text-muted-foreground">ЭкзоМир · Экзотариум</div>
                <div className="text-sm font-semibold">ул. Тропическая, 42</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "hsl(20,15%,4%)", borderTop: "1px solid hsl(22,18%,14%)" }}>
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌿</span>
                <span className="font-cormorant text-xl font-bold shimmer-text">ЭкзоМир</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "hsla(45,30%,92%,0.4)" }}>
                Уникальный мир экзотических животных в сердце города.
              </p>
              <div className="flex gap-3 mt-4">
                {["📱", "📘", "📷"].map((icon, i) => (
                  <button key={i} className="w-9 h-9 rounded-lg flex items-center justify-center text-lg hover:scale-110 transition-transform"
                    style={{ background: "hsl(22,18%,12%)" }}>
                    {icon}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="font-semibold mb-4 text-sm">Навигация</div>
              <div className="space-y-2">
                {NAV_LINKS.slice(0, 4).map(l => (
                  <a key={l.href} href={l.href} className="block text-sm transition-colors" style={{ color: "hsla(45,30%,92%,0.45)" }}>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="font-semibold mb-4 text-sm">Услуги</div>
              <div className="space-y-2">
                {["Экскурсии", "Праздники", "Фотосессии", "VIP-туры"].map(s => (
                  <a key={s} href="#services" className="block text-sm transition-colors" style={{ color: "hsla(45,30%,92%,0.45)" }}>{s}</a>
                ))}
              </div>
            </div>
            <div>
              <div className="font-semibold mb-4 text-sm">Контакты</div>
              <div className="space-y-2 text-sm" style={{ color: "hsla(45,30%,92%,0.45)" }}>
                <div>📍 ул. Тропическая, 42</div>
                <div>📞 +7 (495) 123-45-67</div>
                <div>✉️ info@exomir.ru</div>
                <div>🕐 10:00 — 20:00</div>
              </div>
            </div>
          </div>
          <div className="section-divider mb-6" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{ color: "hsla(45,30%,92%,0.3)" }}>
            <span>© 2024 ЭкзоМир. Все права защищены.</span>
            <span>Лицензия № 77-ЖВ-0042 · Москомприрода</span>
          </div>
        </div>
      </footer>
    </div>
  );
}