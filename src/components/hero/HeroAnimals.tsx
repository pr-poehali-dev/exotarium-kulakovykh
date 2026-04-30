import HeroCarousel from "./HeroCarousel";

const BEARDED_DRAGON_IMGS = [
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/f4f3f9e2-86e1-4a44-a5be-33d01d671c4e.jpg",
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/c20fc8f6-c917-4026-838e-eb12122169ac.jpg",
];

const POLOZ_IMGS = [
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/251f22d5-4c9f-4469-9262-e320b07aae44.jpg",
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/645d49d9-4a5f-42d1-892f-71b79f2a82e9.jpg",
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/8b654e87-95a6-4938-b262-1f2df5067103.jpg",
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/f1329aaa-a12f-471c-a265-f6235c656ff6.jpg",
];

const LIZARD_IMGS = [
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/d76782fd-4c76-40d5-b27c-d6cf1dffa377.jpg",
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/ba9a28b9-0dba-4494-b935-adec0eb26309.jpg",
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/f5e9a36b-4607-48f9-89e9-7bba417d17c7.jpg",
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/06181745-bc2e-4a3f-a844-a41e70a4d171.jpg",
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/0c3f62e9-7d51-4108-b98f-a32cd219f75c.jpg",
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/f834d6d9-6553-49bb-9eb5-ee270c5dff08.jpg",
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/dc1f463c-902a-4c4f-9791-511e51198a2e.jpg",
];

const OTHERS_IMGS = [
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/727df747-b7ef-4d26-bb1c-dfa9e7e52e2c.jpg",
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/d3f27afe-e74c-4df9-8e54-824d3a5b9e50.jpg",
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/10dc7e22-4d63-4659-a8b1-53762dabd1bb.jpg",
];

const CHAMELEON_IMGS = [
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/51eefb17-4601-409f-840b-56042a05a11f.png",
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/502e6078-68f1-4f6a-b82a-c01b030959b8.jpg",
  "https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/bucket/341bc78d-28b3-4549-82d0-6f78ec4fc9c3.png",
];

const ANIMALS = [
  { emoji: "🦎", name: "Ящерицы", desc: "Мастер маскировки" },
  { emoji: "🐍", name: "Змеи", desc: "Вызывают не страх, а искренний интерес" },
  { emoji: "🌟", name: "И другие Герои нашего зоопарка", desc: "Каждый питомец — маленькое открытие" },
];

export default function HeroAnimals() {
  return (
    <>
      <section id="animals" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold mb-3 tracking-widest uppercase" style={{ color: "hsl(142,60%,50%)" }}>Наши питомцы</div>
            <h2 className="font-cormorant text-5xl font-bold mb-4">Живые <span className="gold-text">герои</span></h2>
            <p style={{ color: "hsla(150,30%,25%,0.65)" }}>Каждый — со своим характером, историей и невероятным обаянием</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {ANIMALS.map((a) => (
              a.name === "Ящерицы" || a.name === "Змеи" || a.name === "И другие Герои нашего зоопарка" ? (
                <div key={a.name} className="card-hover rounded-2xl overflow-hidden group"
                  style={{ background: "hsl(150,30%,10%)", border: "1px solid hsl(150,25%,18%)" }}>
                  {a.name === "Змеи" ? (
                    <HeroCarousel images={POLOZ_IMGS} altPrefix="Полоз" />
                  ) : a.name === "И другие Герои нашего зоопарка" ? (
                    <HeroCarousel images={OTHERS_IMGS} altPrefix="Герой зоопарка" />
                  ) : (
                    <HeroCarousel images={LIZARD_IMGS} altPrefix="Ящерица" />
                  )}
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

export { BEARDED_DRAGON_IMGS, CHAMELEON_IMGS };
