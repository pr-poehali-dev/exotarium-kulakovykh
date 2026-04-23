import { useState } from "react";
import Icon from "@/components/ui/icon";

const PHONE = "+79143428274";
const PHONE_DISPLAY = "+7 914 342-82-74";

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

export default function TrustFaqCta() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
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
                <div className="text-xs" style={{ color: "hsla(45,30%,92%,0.55)" }}>{t.desc}</div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl p-8 md:p-12 grid md:grid-cols-3 gap-10 items-center"
            style={{ background: "hsl(150,30%,10%)", border: "1px solid hsl(150,25%,18%)" }}>
            <div>
              <div className="mb-4">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M44 14c0-3-2.5-5-5.5-5C35 9 33 11.5 33 14c0 2 1 3.5 2.5 4.5C32 20 29 22.5 27 26c-2 3.5-2.5 7.5-1.5 11 1 3.2 3.2 5.8 6 7-1.5 1-3.5 1.5-5.5 1.5-5.5 0-10-4.5-10-10 0-2 .5-4 1.5-5.5L20 28c-1.5 2-2 4.5-2 7 0 7.7 6.3 14 14 14 3.5 0 6.8-1.3 9.2-3.5.5-.4.5-1.2 0-1.6-3-2.5-4.7-6-4.2-9.8.5-3.5 2.8-6.5 6-8 .8-.4 1-1.3.5-2-.3-.4-.8-.7-1.3-.6C40.5 24 39 24 37.5 23.5c-1-.5-1.5-1.5-1.5-2.5 0-1.5 1.2-2.8 2.8-2.8.5 0 1 .2 1.5.5.7.5 1.7.3 2-.5.2-.4.2-.9-.1-1.2C41.2 15.8 40 15 38.5 14.5c.2-.5.5-1 .5-1.5 0-1.5 1.5-3 3.5-3 .5 0 1 .5 1.5 1 .5.5 1.5.5 2 0s.5-1.5 0-2C45.5 8 44.8 7.5 44 7.5V14z" fill="none"/>
                  <path d="M10 30 Q18 14 28 18 Q38 22 36 32 Q34 42 26 44 Q16 46 12 38 Q9 33 10 30Z" fill="none" stroke="hsl(45,70%,55%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 30 C14 20 24 12 34 16 C44 20 46 32 40 40 C36 46 28 48 22 44 C14 40 8 34 10 30" fill="none" stroke="hsl(45,70%,55%)" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M36 14 C40 10 46 10 48 14" fill="none" stroke="hsl(150,60%,45%)" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M48 14 L52 12 M48 14 L52 16" fill="none" stroke="hsl(150,60%,45%)" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="42" cy="11" r="1.5" fill="hsl(45,70%,55%)"/>
                  <path d="M12 28 C18 16 30 12 40 18 C48 23 50 34 44 42 C40 48 30 50 22 46 C12 41 8 34 12 28" fill="none" stroke="hsl(150,50%,35%)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
                </svg>
              </div>
              <h3 className="font-cormorant text-3xl font-bold mb-4">
                Боитесь змей?<br /><span className="gold-text">Это нормально</span>
              </h3>
              <p className="leading-relaxed" style={{ color: "hsla(45,30%,92%,0.65)" }}>
                Часто страх исчезает уже после первого знакомства. Когда видишь спокойное, красивое и грациозное животное вблизи,
                на смену тревоге приходит восхищение. Мы умеем мягко и бережно знакомить людей с рептилиями — и детей, и взрослых.
              </p>
            </div>

            {/* Крутящаяся карточка */}
            <div className="flex justify-center items-center">
              <div style={{ perspective: "800px" }}>
                <div
                  style={{
                    width: "180px",
                    height: "220px",
                    animation: "card-spin 4s linear infinite",
                    transformStyle: "preserve-3d",
                    position: "relative",
                  }}
                >
                  <style>{`
                    @keyframes card-spin {
                      0%   { transform: rotateY(0deg); }
                      100% { transform: rotateY(360deg); }
                    }
                  `}</style>
                  {/* Лицевая сторона */}
                  <div style={{
                    position: "absolute", inset: 0, backfaceVisibility: "hidden",
                    borderRadius: "20px", overflow: "hidden",
                    border: "2px solid hsla(43,74%,52%,0.7)",
                    boxShadow: "0 0 30px hsla(142,60%,42%,0.4), 0 0 60px hsla(43,74%,52%,0.15)",
                  }}>
                    <img
                      src="https://cdn.poehali.dev/projects/f562fa50-a2d2-4c54-9fe6-ffa698222548/files/88daf70a-1759-4e02-829b-af045355430d.jpg"
                      alt="Ребёнок с ящерицей"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div style={{
                      position: "absolute", bottom: 0, left: 0, right: 0,
                      padding: "10px 12px",
                      background: "linear-gradient(transparent, rgba(0,0,0,0.75))",
                      color: "hsl(43,74%,72%)",
                      fontSize: "12px",
                      fontWeight: 600,
                      textAlign: "center",
                      letterSpacing: "0.05em",
                    }}>
                      Дети обожают! 🦎
                    </div>
                  </div>
                  {/* Обратная сторона */}
                  <div style={{
                    position: "absolute", inset: 0, backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    borderRadius: "20px",
                    border: "2px solid hsla(43,74%,52%,0.7)",
                    boxShadow: "0 0 30px hsla(142,60%,42%,0.4)",
                    background: "linear-gradient(135deg, hsl(142,45%,10%), hsl(150,40%,7%))",
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center", gap: "10px",
                    padding: "20px",
                  }}>
                    <div style={{ fontSize: "40px" }}>🦎</div>
                    <div style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "16px", fontWeight: 700,
                      color: "hsl(43,74%,62%)",
                      textAlign: "center", lineHeight: 1.3,
                    }}>
                      Экзотариум<br />Кулаковых
                    </div>
                    <div style={{
                      fontSize: "11px", color: "hsla(45,30%,92%,0.5)",
                      textAlign: "center",
                    }}>
                      г. Артём
                    </div>
                  </div>
                </div>
              </div>
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
          <p className="mb-8" style={{ color: "hsla(45,30%,92%,0.55)" }}>г. Артём, Лазо 11, Детский Центр «Непоседа»</p>
          <a href={`tel:${PHONE}`}>
            <button className="btn-gold px-10 py-5 rounded-full text-xl font-semibold flex items-center gap-3 mx-auto animate-pulse-gold">
              <Icon name="Phone" size={22} />
              {PHONE_DISPLAY}
            </button>
          </a>
          <p className="mt-4 text-sm" style={{ color: "hsla(45,30%,92%,0.55)" }}>Забронируйте дату прямо сейчас</p>
        </div>
      </section>
    </>
  );
}